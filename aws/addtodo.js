var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Todos2";

var customerID = 4;

var params = {
  TableName: table,
  Item: {
    customerID: customerID,
    priority: ["Feed the cat", "Water the rocks", "Free the cows"],
    focus: [
      "Retire evil in the universe",
      "Save for planetary weapon",
      "Find star mate from across galaxy"
    ],
    delegate: [
      "Take out the trash",
      "Fill out tax forms",
      "Research dog kennels"
    ],
    ignore: ["Answer telemarketers", "Do crossword puzzles"]
  }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Added item:", JSON.stringify(data, null, 2));
  }
});
