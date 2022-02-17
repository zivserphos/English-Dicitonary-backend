import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient();
console.log("Connected to DynamoDb");

export default docClient;
