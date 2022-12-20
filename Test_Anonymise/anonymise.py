import pandas as pd
import matplotlib.pyplot as plt
import copy
from tabulate import tabulate
import math
import time

# For node js
import sys
import json


def getMicrodata(sensitive_attribute):
    """ Returns the Microdata & Extra Time taken for displaying the microdata table. """

    final_lines = None
    with open("Test_Anonymise/received_microdata.csv", "r") as f:
        final_lines = f.readlines()

    no_of_records = len(final_lines) - 1  # -1 for header

    diction = {}

    # Columns
    columns = final_lines[0].split(",")
    columns = list(map(lambda x: x.strip(), columns))  # Removing Spaces

    for i, line in enumerate(final_lines[1:]):

        slno = i+1

        diction[slno] = {}

        attributes = line.split(',')

        for column in columns:
            diction[slno][column] = attributes[columns.index(column)].strip()
            if column == "Marital Status":
                diction[slno]["Marital Parent"] = getParent(
                    diction[slno]["Marital Status"])
            elif column == "Disease":
                diction[slno]["Disease Parent"] = getDiseaseParent(
                    diction[slno]["Disease"])

        # diction[slno]["Age"] = attributes[0].strip()
        # diction[slno]["Gender"] = attributes[1].strip()
        # diction[slno]["Zip Code"] = attributes[2].strip()
        # diction[slno]["Education"] = attributes[3].strip()
        # diction[slno]["Employment"] = attributes[4].strip()
        # diction[slno]["Marital Status"] = attributes[5].strip()
        # diction[slno]["Marital Parent"] = getParent(
        #     diction[slno]["Marital Status"])
        # diction[slno]["Relationship"] = attributes[6].strip()
        # diction[slno]["Race"] = attributes[7].strip()
        # diction[slno]["Salary"] = attributes[8].strip()
        # diction[slno]["Disease"] = attributes[9].replace("\n", "").strip()
        # diction[slno]["Disease Parent"] = getDiseaseParent(
        #     diction[slno]["Disease"])

        diction[slno]["Group ID"] = ((slno-1)//K)+1

    df, columns = NestedDictionaryToDataFrame(diction)

    # Convert df to string
    return_data = df.to_string(index=False)

    with open("Test_Anonymise/string_original.csv", "w+", newline="") as f:
        f.write(return_data)

    return diction, no_of_records


def getValuesInEq(eq_class, attribute_name):

    return [record[attribute_name] for record in eq_class.values()]


def getParent(child):

    tree = {"Married": ["Married-civ-spouse",
                        "Married-spouse-absent",
                        "Married-AF-spouse"],
            "Unmarried": ["Never-married",
                          "Divorced",
                          "Separated",
                          "Widowed"]
            }

    for parent, children in tree.items():
        if child in children:
            return parent

    else:
        raise Exception(f"PARENT NOT FOUND for: {child}")


def ParentsCheck(value, existing_values, algo):
    """ Checks if a record can be added in EQ class (True) or Not (False) """

    parent = getParent(value)

    existing_parents = list(map(getParent, existing_values))

    if algo == 2 or algo == -100:

        return parent not in existing_parents

    elif algo == 3:

        # After adding in EQ Class, becomes two common parents in EQ
        return existing_parents.count(parent) <= 1

    else:
        raise Exception("ParentCheck function error")


def getDiseaseParent(child):

    tree = {"Respiratory disease": ["Asthama",
                                    "Pneumonia",
                                    "Emphysema"],
            "Excretory_system disorder": ["Uremia",
                                          "Nephritis",
                                          "Oedema"],
            "Circulatory_system disorder": ["Cardiac arrest",
                                            "Angina Pectoris",
                                            "Cardiomyopathy"],
            "Digestive disorder": ["Gastritis",
                                   "Jaundice",
                                   "Diarrhoea"],
            "Mental disorder": ["Insomnia",
                                "Schizophernia",
                                "Dementia"]}

    for parent, children in tree.items():
        if child in children:
            return parent
    else:
        pass
        # raise Exception(f"PARENT NOT FOUND for: {child}")


def DiseaseParentsCheck(value, existing_values):
    """ Checks if a record can be added in EQ class (True) or Not (False) """

    parent = getDiseaseParent(value)

    existing_parents = list(map(getDiseaseParent, existing_values))

    return parent not in existing_parents


def diversifyRecords(table, no_of_records, K, sensitive_attribute):
    """ This function rearranges the records based on Sensitive Attribute and
    returns the New Microdata Dictionary. """

    """ 1) We create a separate dictionary to store values that do not fit in the current dictionary .
        and then later add the separated values back into the dictionary. """

    original_table = copy.deepcopy(table)  # To prevent Accidental Modification

    temp_dict = {}
    new_dict = {}

    # Creating new_dict nested structure
    max_group_id = math.ceil(no_of_records/K)

    # Creating Group IDs
    for i in range(1, max_group_id+1):

        new_dict[i] = {}      # Stores as {1:{}, 2:{}}

    for record_no, record in original_table.items():    # Each Record

        sensitive_value = record[sensitive_attribute]
        group_id = record["Group ID"]

        # Selecting the EQ Class corresponding to the Record's Group ID
        current_eq_class = new_dict[group_id]

        # Getting all Marital Status in that Equivalence Class
        existing_sensitive_values = getValuesInEq(
            current_eq_class, sensitive_attribute)

        # Adding in temp or new dict
        check = DiseaseParentsCheck(
            sensitive_value, existing_sensitive_values)

        if check:  # Sensitive Value can be added in EQ class

            current_eq_class[record_no] = record    # Storing value in new_dict

        else:   # Sensitive Value cannot be added in EQ class

            record["Group ID"] = "NA"
            # Storing value in temp_dict
            temp_dict[record_no] = record

    """ 2) We have to pick and place values from temp_dict into new_dict to see where it fits. """

    # To store records that do not fit in any eq class
    residue_dict = copy.deepcopy(temp_dict)

    for temp_record_no, temp_record in temp_dict.items():     # Each record in temp_dict

        temp_sensitive_value = temp_record[sensitive_attribute]

        for eq_no, current_eq_class in new_dict.items():      # Each Equivalence Class

            existing_sensitive_values = getValuesInEq(
                current_eq_class, sensitive_attribute)

            # Conditions for records from temp_dict to be added into Modified Microdata Table
            check1 = DiseaseParentsCheck(
                temp_sensitive_value, existing_sensitive_values)

            # No. fo records in EQ Class is < K
            check2 = len(current_eq_class) < K

            if check1 and check2:

                # Updating Group ID of the record to Equivalence Class No.
                temp_record["Group ID"] = eq_no

                # Adding record from temp_dict to eq_class where it fits
                current_eq_class[temp_record_no] = temp_record

                # Deleting record from Residue after giving it to New Dictionary
                del residue_dict[temp_record_no]

                # Exiting inner loop and going for next record
                break

    """ Secondary Sensitive Attribute """

    """ 3) Exchanging Education values > 1 """

    for eq_no in new_dict.copy():  # Each Equivalence Class

        current_eq_class = new_dict[eq_no]

        for record_no in current_eq_class.copy():  # Each Record

            record = current_eq_class[record_no]

            if getValuesInEq(current_eq_class, "Education").count(record["Education"]) > 1:

                # Finding Record in residue_dict with similar Sensitive Value
                for residue_no in residue_dict.copy():

                    residue_record = residue_dict[residue_no]

                    parent1 = getDiseaseParent(
                        residue_record[sensitive_attribute])
                    parent2 = getDiseaseParent(record[sensitive_attribute])

                    check1 = parent1 == parent2    # Not disturbing the Parent values

                    check2 = residue_record["Education"] != record["Education"]

                    if check1 and check2:

                        # Exchanging record

                        residue_record["Group ID"] = eq_no

                        new_dict[eq_no][residue_no] = copy.deepcopy(
                            residue_record)  # Adding in modified dictionary
                        residue_dict[record_no] = copy.deepcopy(record)

                        del new_dict[eq_no][record_no]
                        del residue_dict[residue_no]

                        break   # We have performed the exchange operation

                    else:
                        continue

            else:
                continue

    """ Tertiary Sensitive Attribute """

    """ 4) Exchanging Employment values > 1 """

    for eq_no in new_dict.copy():  # Each Equivalence Class

        current_eq_class = new_dict[eq_no]

        for record_no in current_eq_class.copy():  # Each Record

            record = current_eq_class[record_no]

            if getValuesInEq(current_eq_class, "Employment").count(record["Employment"]) > 1:

                # Finding Record in residue_dict with similar Sensitive Value
                for residue_no in residue_dict.copy():

                    residue_record = residue_dict[residue_no]

                    parent1 = getDiseaseParent(
                        residue_record[sensitive_attribute])
                    parent2 = getDiseaseParent(record[sensitive_attribute])

                    check1 = parent1 == parent2    # Not disturbing the Parent values

                    # Not disturbing Secondary SA
                    check2 = residue_record["Education"] == record["Education"]

                    check3 = residue_record["Employment"] != record["Employment"]

                    if check1 and check2 and check3:

                        # Exchanging record

                        residue_record["Group ID"] = eq_no

                        new_dict[eq_no][residue_no] = copy.deepcopy(
                            residue_record)  # Adding in modified dictionary
                        residue_dict[record_no] = copy.deepcopy(record)

                        del new_dict[eq_no][record_no]
                        del residue_dict[residue_no]

                        break   # We have performed the exchange operation

                    else:
                        continue

            else:
                continue

    """ Quaternary Sensitive Attribute """

    """ 5) Exchanging Race values > 1 """

    for eq_no in new_dict.copy():  # Each Equivalence Class

        current_eq_class = new_dict[eq_no]

        for record_no in current_eq_class.copy():  # Each Record

            record = current_eq_class[record_no]

            if getValuesInEq(current_eq_class, "Race").count(record["Race"]) > 1:

                # Finding Record in residue_dict with similar Sensitive Value
                for residue_no in residue_dict.copy():

                    residue_record = residue_dict[residue_no]

                    parent1 = getDiseaseParent(
                        residue_record[sensitive_attribute])
                    parent2 = getDiseaseParent(record[sensitive_attribute])

                    check1 = parent1 == parent2    # Not disturbing the Parent values

                    # Not disturbing Secondary SA
                    check2 = residue_record["Education"] == record["Education"]

                    # Not disturbing Tertiary SA
                    check3 = residue_record["Employment"] == record["Employment"]

                    check4 = residue_record["Race"] != record["Race"]

                    if check1 and check2 and check3 and check4:

                        # Exchanging record

                        residue_record["Group ID"] = eq_no

                        new_dict[eq_no][residue_no] = copy.deepcopy(
                            residue_record)  # Adding in modified dictionary
                        residue_dict[record_no] = copy.deepcopy(record)

                        del new_dict[eq_no][record_no]
                        del residue_dict[residue_no]

                        break   # We have performed the exchange operation

                    else:
                        continue

            else:
                continue

    """ 6) Converting the format of New Dictionary to the same as that of Original Dictionary """

    latest_dict = {}

    for eq_no, current_eq_class in new_dict.items():  # Each Equivalence Class

        for record_no, record in current_eq_class.items():  # Each Record

            latest_dict[record_no] = record     # Adding records in latest_dict

    """ 7) Returning the Modified Microdata Table and the Residue Dictionary """

    return latest_dict, residue_dict


def getTwoTables(diction, sensitive_attribute):
    """ Segregates the Microdata Table into QIT and ST """

    qit_table = {}
    st_table = {}

    for no, record in diction.items():  # Each Record

        qit_table[no] = {}  # Each Record in QIT
        st_table[no] = {}   # Each Record in ST

        for attribute_name, value in record.items():   # Each Attribute

            if attribute_name == sensitive_attribute:  # Storing in Sensitive Table
                st_table[no][attribute_name] = value

            else:   # Storing in QIT Table
                qit_table[no][attribute_name] = value

        # Storing Group ID in both ST and QIT
        qit_table[no]["Group ID"] = record["Group ID"]
        st_table[no]["Group ID"] = record["Group ID"]

    return qit_table, st_table


def getSensitiveCount(st_table, no_of_records, K, sensitive_attribute):
    """ Returns a dictionary as {1:{"pneumonia":2, "flu":2}, 2:{...}} where 1,2 are Group IDs """

    """ OR {"pneumonia":{"Count":2,"Group ID":1}, "flu":{...}} """  # This won't work for disease present in different Group IDs

    """ We have chosen the former approach """

    sensitive_count_dict = {}

    max_group_id = math.ceil(no_of_records/K)

    # Creating Group IDs nested structure
    for i in range(1, max_group_id+1):

        sensitive_count_dict[i] = {}      # Stores as {1:{}, 2:{}}

    for record in st_table.values():  # Each Record

        # Particular Equivalence Class corresponding to record's Group ID
        current_eq_class = sensitive_count_dict[record["Group ID"]]

        sensitive_value = record[sensitive_attribute]

        # Checking if Sensitive Attribute already exists in the eq class
        if sensitive_value in current_eq_class.keys():

            current_eq_class[sensitive_value] += 1

        else:   # Creating "sensitive_attribute":<count> pair

            current_eq_class[sensitive_value] = 1

    return sensitive_count_dict


def maskData(attribute_name, value, group_id):

    if attribute_name == "Age":

        """ Based on Group ID.
            Three Ranges: 1:10, 2:20, 3:30 """

        age = int(value)

        factor = (group_id-1) % 3 + 1

        lower = age - age % 10
        upper = lower + 10*factor - 1

        return f"({lower} - {upper})"
        # return "({} - {})".format(lower, upper)

    elif attribute_name == "Gender":

        return "M/F"

    elif attribute_name == "Zip Code":

        zip_code = str(value)

        return zip_code[:-3] + "*"*3

    elif attribute_name == "Employment":

        return "*"

    elif attribute_name == "Race":

        return "*"

    elif attribute_name == "Salary":

        return "*"

    else:

        raise Exception(
            f"MASKING not yet defined for attribute: {attribute_name}")


def getMaskedDictionary(microdata, attributes_to_mask):
    """ Returns the Masked Dictionary """

    mask_dict = copy.deepcopy(microdata)

    for record in mask_dict.values():  # Each Record

        for attribute_name in attributes_to_mask:   # Each Attribute to Mask

            # Updating with masked value
            record[attribute_name] = maskData(
                attribute_name, record[attribute_name], record["Group ID"])

    return mask_dict


def NestedDictionaryToDataFrame(masked_microdata):

    diction = copy.deepcopy(masked_microdata)

    # Initialising Columns
    columns = None
    for no in diction:  # Running loop only once because we need attribute names only
        columns = diction[no].keys()
        break

    # Initialising Final Nested Data List
    data_list = [record.values() for record in diction.values()]

    df = pd.DataFrame(data_list, columns=columns)

    return df, columns


def addLowerAndUpperAge(table):

    output = copy.deepcopy(table)

    for record in output.values():
        age = record["Age"].replace(" ", "")  # Removing Spaces
        age = age[1:-1]  # Removing Parentheses
        record["Lower Age"], record["Upper Age"] = age.split("-")

    return output


def main(K):

    # Determining Sensitive Attribute according to Algorithm chosen
    sensitive_attribute = "Disease"

    # 1) Getting Microdata

    original_table, no_of_records = getMicrodata(sensitive_attribute)

    # 2) Diversify Records

    new_original_table = None
    residue_dict = None

    new_original_table, residue_dict = diversifyRecords(
        original_table, no_of_records, K, sensitive_attribute)

    # 3) Getting QIT and ST Tables

    qit_table, st_table = getTwoTables(new_original_table, sensitive_attribute)
    sensitive_count_dict = getSensitiveCount(
        st_table, no_of_records, K, sensitive_attribute)

    # 4) Masking

    attributes_to_mask = ["Gender", "Age", "Zip Code"]

    masked_microdata = getMaskedDictionary(
        new_original_table, attributes_to_mask)

    # 5) Adding Lower Age and Upper Age

    masked_microdata = addLowerAndUpperAge(masked_microdata)

    df, columns = NestedDictionaryToDataFrame(original_table)
    df.to_csv(
        f"Test_Anonymise/OutputFile/original_microdata_Records_{no_of_records}_k_{K}.csv", index=False)

    # 7) Converting to Pandas Dataframe
    masked_df, columns = NestedDictionaryToDataFrame(masked_microdata)

    masked_df.to_csv(
        f"Test_Anonymise/OutputFile/masked_microdata_Records_{no_of_records}_k_{K}.csv", index=False)

    return no_of_records


# TOP LEVEL STATEMENTS

# # ? Receive data from node js
# received_data = sys.stdin.readline()

# # ? Convert data from json to python dictionary
# received_data = json.loads(received_data)

# # ? Convert each ascii value to character and join them to a string
# return_data = "".join(map(chr, received_data["data"]["data"]))


# Global Variables
no_of_records = None
K = 3
mode = 4

# string_file = copy.deepcopy(return_data)

no_of_records = main(K)

# # ? Write string to csv file and read it
# with open("./OutputFile/Anonymised_Table.csv", "w+", newline="") as f:
#     f.write(return_data)
