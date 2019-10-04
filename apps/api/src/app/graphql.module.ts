import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    /**
     * Schema-first approach.
     */
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/api/graphql.ts'),
        outputAs: 'interface'
      }
    })
  ]
})
export class GraphqlModule {}
