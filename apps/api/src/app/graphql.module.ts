import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';

@Module({
  imports: [
    /**
     * Schema-first approach.
     */
    GraphQLModule.forRoot({
      /**
       * /home/../remia/dist/apps/api (__dirname)
       * to
       * /home/../remia/apps/api/schema.grapqhl
       */
      autoSchemaFile: path.resolve(
        __dirname,
        '../',
        '../',
        '../',
        'apps',
        'api',
        'schema.graphql'
      )
    })
  ]
})
export class GraphqlModule {}
