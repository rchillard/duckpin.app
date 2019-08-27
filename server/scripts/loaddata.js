const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000"
});

const docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing to do lists into DynamoDB.  Please wait.");

var allTodos = JSON.parse(fs.readFileSync("tododata.json", "utf8"));
allTodos.forEach(function(todo) {
  var params = {
    TableName: "Todos3",
    Item: {
      customerID: todo.customerID,
      priority: todo.priority,
      focus: todo.focus,
      delegate: todo.delegate,
      ignore: todo.ignore
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error(
        "unable to add todo",
        todo.customerID,
        ". Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("PutItem succeeded:", todo.customerID);
    }
  });
});
