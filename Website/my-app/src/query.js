function getQueries() {
  let queries = [
    {
      title: "Query 1",
      statement:
        "SELECT * FROM `plenary-chalice-369413.Incremental_Diversity_Dataset.Masked_Table_1000_Records_k_3` WHERE Education='Bachelors' AND Employment='State-gov' ORDER BY Group_ID LIMIT 1000",
      image:
        "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/5f484fc61c2008cac8934cde_logo.png",
      caption: "Fig 1: Caption",
      explanation:
        "It can be a lot of fun simply learning interesting facts and that's exactly what this online tool will allow you to do. If you spend even a little time, you're going to quickly expand your knowledge with a lot of random fun facts. Even if you never share them with others (which you likely will at some point), it's fun to know you have that knowledge in your head.",
    },
  ];

  return queries;
}

export default getQueries;
