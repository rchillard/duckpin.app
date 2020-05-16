var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "Todos3"
};

console.log("Scanning Todos table.");
docClient.scan(params, onScan);

function onScan(err, data) {
  if (err) {
    console.error(
      "Unable to scan the table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    // print all the movies
    console.log("Scan succeeded.");
    data.Items.forEach(function(todo) {
      console.log(
        todo.customerID + ": ",
        todo.priority,
        todo.focus,
        todo.delegate,
        todo.ignore
      );
    });

    // continue scanning if we have more movies, because
    // scan can retrieve a maximum of 1MB of data
    if (typeof data.LastEvaluatedKey != "undefined") {
      console.log("Scanning for more...");
      params.ExclusiveStartKey = data.LastEvaluatedKey;
      docClient.scan(params, onScan);
    }
  }
}
