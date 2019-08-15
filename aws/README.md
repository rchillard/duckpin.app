# Infrastructure
This application was designed to run in Amazon Web Services.  It utilizes various serverless offerings from AWS to run cheaply, efficiently, and with very little maintenance.

## DynamoDB

### Setup
To make developing locally easy on you, you can run a local instance of [DynamoDB using Docker](https://hub.docker.com/r/amazon/dynamodb-local).

Download the image

`docker pull amazon/dynamodb-local`

Run the container

`docker run -p 8000:8000 amazon/dynamodb-local`

### Resources
The following resources are helpful for reference:
* [Node.js and DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html)
* [DynamoDB API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html)