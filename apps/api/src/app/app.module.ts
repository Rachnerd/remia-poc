import { Module } from '@nestjs/common';
import { LeverancierModule } from './leverancier/leverancier.module';
import { DatabaseModule } from './database.module';
import { RemiaGraphqlModule } from './graphql.module';

@Module({
  imports: [DatabaseModule, RemiaGraphqlModule, LeverancierModule, ],
  controllers: [],
  providers: []
})
export class AppModule {}
