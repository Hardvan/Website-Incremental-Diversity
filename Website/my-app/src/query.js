function getQueries() {
  // Only two objects for now
  let queries = [
    {
      id: 1,
      title: "State-gov Bachelors",
      statement:
        "SELECT * FROM `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3` WHERE Education='Bachelors' AND Employment='State-gov' ORDER BY Group_ID LIMIT 1000",
      image:
        "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/5f484fc61c2008cac8934cde_logo.png",
      caption: "Fig 1: Caption",
      explanation:
        "It can be a lot of fun simply learning interesting facts and that's exactly what this online tool will allow you to do. If you spend even a little time, you're going to quickly expand your knowledge with a lot of random fun facts. Even if you never share them with others (which you likely will at some point), it's fun to know you have that knowledge in your head.",
      link: "https://console.cloud.google.com/bigquery?sq=566051837684:765c52a7f1e94bf48ffea5d02c6ef657",
    },
    {
      id: 2,
      title: "Divorcee Details",
      statement:
        "SELECT * FROM `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3` WHERE Marital_Status='Divorced' ORDER BY Group_ID LIMIT 1000",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.8SKH5IQ1zavH76joiw0VJwHaHa&pid=Api&P=0",
      caption: "Fig 2: Caption",
      explanation:
        "She sat down with her notebook in her hand, her mind wandering to faraway places. She paused and considered all that had happened. It hadn't gone as expected. When the day began she thought it was going to be a bad one, but as she sat recalling the day's events to write them down, she had to admit, it had been a rather marvelous day.",
      link: "https://console.cloud.google.com/bigquery?sq=566051837684:6d15e018fb0741f5a47fe11a1a6597c0",
    },
  ];

  return queries;
}

export default getQueries;
