import { APIGatewayProxyEventV2, Handler } from "aws-lambda";

export const hello: Handler<APIGatewayProxyEventV2> = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event.headers,
      },
      null,
      2
    ),
  };

  return response;
};

export default hello;
