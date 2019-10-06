import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Test } from 'supertest';

export const createQueryTester = (app: INestApplication) => (
  query: string
): Test =>
  request(app.getHttpServer())
    .post('/graphql')
    .send({
      query
    });

export type QueryTester = ReturnType<typeof createQueryTester>;
