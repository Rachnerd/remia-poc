import { Module } from '@nestjs/common';
import { LeverancierModule } from './leverancier/leverancier.module';
import { DatabaseModule } from './database.module';
import { GraphqlModule } from './graphql.module';

@Module({
  imports: [DatabaseModule, GraphqlModule, LeverancierModule],
  controllers: [],
  providers: []
})
export class AppModule {}
