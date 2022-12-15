import sys
import json

# ? Receive data from node js
received_data = sys.stdin.readline()

# ? Convert data from json to python dictionary
received_data = json.loads(received_data)

# ? Convert each ascii value to character and join them to a string
return_data = "".join(map(chr, received_data["data"]["data"]))

# ? Write JSON string to csv file
with open("./OutputFile/TEST.csv", "w+", newline="") as f:
    f.write(return_data)


# Note: If you want to send data to node js, you can use the following code
# # ? Send data to node js as json
# print(json.dumps(return_data))  # Convert string to json
# sys.stdout.flush()  # Flush the output to node js
