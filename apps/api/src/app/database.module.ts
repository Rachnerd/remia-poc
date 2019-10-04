import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    /**
     * Database config
     */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'remia',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target), // https://github.com/nrwl/nx/issues/1393
      synchronize: true
    })
  ]
})
export class DatabaseModule {}
