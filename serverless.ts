import type { AWS } from "@serverless/typescript";

// import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
  service: "serverless-dataset-manager-api",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-offline",
    // "serverless-dynamodb-local",
  ],
  provider: {
    name: "aws",
    stage: "dev",
    region: "eu-central-1",
    runtime: "nodejs14.x",
    tags: {
      project: "serverless-dataset-manager-api",
    },
    logs: {
      httpApi: true, // log API Gateway calls to CloudWatch
    },
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
    // iam: {
    //   role: {
    //     statements: [
    //       {
    //         Effect: "Allow",
    //         Action: [
    //           "dynamodb:DescribeTable",
    //           "dynamodb:Query",
    //           "dynamodb:Scan",
    //           "dynamodb:GetItem",
    //           "dynamodb:PutItem",
    //           "dynamodb:UpdateItem",
    //           "dynamodb:DeleteItem",
    //         ],
    //         Resource: "arn:aws:dynamodb:eu-central-1:*:table/TodosTable",
    //       },
    //     ],
    //   },
    // },
  },
  // import the function via paths
  // functions: { hello },
  functions: {
    hello: {
      handler: "src/hello.hello",
      events: [
        {
          httpApi: {
            path: "/hello",
            method: "get",
          },
        },
      ],
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    // dynamodb: {
    //   start: {
    //     port: 5000,
    //     inMemory: true,
    //     migrate: true,
    //   },
    //   stages: "dev",
    // },
  },
  // resources: {
  //   Resources: {
  //     TodosTable: {
  //       Type: "AWS::DynamoDB::Table",
  //       Properties: {
  //         TableName: "TodosTable",
  //         AttributeDefinitions: [
  //           {
  //             AttributeName: "todosId",
  //             AttributeType: "S",
  //           },
  //         ],
  //         KeySchema: [
  //           {
  //             AttributeName: "todosId",
  //             KeyType: "HASH",
  //           },
  //         ],
  //         BillingMode: "PAY_PER_REQUEST",
  //         // ProvisionedThroughput: {
  //         //   ReadCapacityUnits: 1,
  //         //   WriteCapacityUnits: 1,
  //         // },
  //       },
  //     },
  //   },
  // },
};

module.exports = serverlessConfiguration;
