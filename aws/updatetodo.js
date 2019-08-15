var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Todos3";

var customerID = 3;

// Update the item, unconditionally,

var params = {
  TableName: table,
  Key: {
    customerID: customerID
  },
  UpdateExpression: "set priority=:p, focus=:f, delegate=:d",
  // Beware of 'ignore' keyword here causing issues
  ExpressionAttributeValues: {
    ":p": ["Eat", "Work", "Sleep"],
    ":f": ["Code", "Study", "Exercise"],
    ":d": ["Chores", "Cooking", "Errands"]
  },
  ReturnValues: "UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to update item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
  }
});
