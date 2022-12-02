function getQueries() {
  let queries = [
    {
      id: 1,
      title: "State-gov Bachelors",
      statement:
        "SELECT Age,Gender,Zip_Code,Education,Employment FROM `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3` WHERE Education='Bachelors' AND Employment='State-gov' ORDER BY Group_ID LIMIT 1000",
      image: require("./images/Query1_Table.png"),
      caption: "Fig 1: Bachelors with State-gov Employment Masked Table",
      explanation:
        "The Age, Gender, Zip Code, and Employment of people with a Bachelors degree who work for the State government is shown in the table above. It can be observed that most of the people are between the ages of 30 and 50.",
      link: "https://console.cloud.google.com/bigquery?sq=566051837684:765c52a7f1e94bf48ffea5d02c6ef657",
    },
    {
      id: 2,
      title: "Divorcee Details",
      statement:
        "SELECT Age,Relationship,Race,Disease FROM `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3` WHERE Marital_Status='Divorced' ORDER BY Group_ID LIMIT 1000",
      image: require("./images/Query2_Table.png"),
      caption: "Fig 2: Divorcee Masked Table",
      explanation:
        "The Age, Relationship, Race and Disease of people who are divorced is shown in the table above. The inference can be made that most of the people are white, currently not-in-family, and lie in the age group 40-69.",
      link: "https://console.cloud.google.com/bigquery?sq=566051837684:6d15e018fb0741f5a47fe11a1a6597c0",
    },
  ];

  return queries;
}

export default getQueries;
