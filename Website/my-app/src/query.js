function getQueries() {
  let queries = [
    {
      id: 1,
      title: "State-gov Bachelors Details",
      statement: `SELECT
        Age,
        Gender,
        Zip_Code,
        Education,
        Employment
      FROM
        \`plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3\`
      WHERE
        Education='Bachelors'
        AND Employment='State-gov'
      ORDER BY
        Group_ID
      LIMIT
        1000`,
      image: require("./images/Query1_Table.png"),
      caption: "Fig 1: Bachelors with State-gov Employment Masked Table",
      explanation:
        "The Age, Gender, Zip Code, and Employment of people with a Bachelors degree who work for the State government is shown in the table above. It can be observed that most of the people are between the ages of 30 and 50.",
      link: "https://console.cloud.google.com/bigquery?sq=566051837684:765c52a7f1e94bf48ffea5d02c6ef657",
      memory: "50.85 KB",
    },
    {
      id: 2,
      title: "Divorcee Details",
      statement: `SELECT
        Age,
        Relationship,
        Race,
        Disease
      FROM
        \`plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3\`
      WHERE
        Marital_Status='Divorced'
      ORDER BY
        Group_ID
      LIMIT
        1000`,
      image: require("./images/Query2_Table.png"),
      caption: "Fig 2: Divorcee Masked Table",
      explanation:
        "The Age, Relationship, Race and Disease of people who are divorced is shown in the table above. The inference can be made that most of the people are white, currently not-in-family, and lie in the age group 40-69.",
      link: "https://console.cloud.google.com/bigquery?sq=566051837684:6d15e018fb0741f5a47fe11a1a6597c0",
      memory: "64.10 KB",
    },
    {
      id: 3,
      title: "Own-Child-White Details",
      statement: `SELECT
        Age,
        Gender,
        Zip_Code,
        Employment
      FROM
        \`plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3\`
      WHERE
        Relationship='Own-child'
        AND Race='White'
      ORDER BY
        Group_ID
      LIMIT
        1000`,
      image: require("./images/Query3_Table.png"),
      caption: "Fig 3: Own child with White Race Masked Table",
      explanation:
        "The Age, Gender, Zip Code and Employment of people who are white in race and their relationship in the family is own-child is shown in the table above. The conclusion can be drawn that most of the people are between the ages of 20 and 40 and predominantly have Private employment.",
      link: "https://console.cloud.google.com/bigquery?sq=566051837684:4e7e6232337849df8fd4d097f8c8f8ed",
      memory: "58.88 KB",
    },
    {
      id: 4,
      title: "Widowed-Salary>50K Details",
      statement: `SELECT
        Age,
        Gender,
        Zip_Code,
        Education
      FROM
        \`plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3\`
      WHERE
        Marital_Status='Widowed'
        AND Salary='>50K'
      ORDER BY
        Group_ID
      LIMIT
        1000`,
      image: require("./images/Query4_Table.png"),
      caption: "Fig 4: Widowed with Salary>50K Masked Table",
      explanation:
        "The Age, Gender, Zip Code and Education of widows who have their salary greater than 50K is shown in the table above. It can be observed that such a criteria is met by a handful of people who have their highest education as High School Graduate.",
      link: "https://console.cloud.google.com/bigquery?sq=566051837684:5afbe5baac724c1e98c3d79fd7079ff6",
      memory: "63.84 KB",
    },
  ];

  return queries;
}

export default getQueries;
