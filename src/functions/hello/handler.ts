import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import middyfy from '@libs/lambda';
import validator from '@middy/validator';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => formatJSONResponse({
  message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
  event,
});

// export const main = middyfy(hello).use(validator({ inputSchema: schema }));

export const main = middyfy(hello);
