import { LeverancierResolver } from './graphql/leverancier.resolver';
import { Module } from '@nestjs/common';
import { LeverancierService } from './leverancier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeverancierEntity } from './leverancier.entity';
import { LeverancierRepository } from './leverancier.repository';
import { TaalCode } from './graphql/taal-code.enum';
import { ValutaCode } from './graphql/valuta-code.enum';

/**
 * This module only contains Leverancier related logic.
 */
@Module({
  imports: [TypeOrmModule.forFeature([LeverancierRepository])],
  providers: [LeverancierResolver, LeverancierService]
})
export class LeverancierModule {
  constructor(private readonly leverancierRepository: LeverancierRepository) {
    this.guaranteeOneUserInDatabase();
  }

  /**
   * This code makes sure there's always at least 1 leverancier when the app starts for demonstration purposes.
   */
  private async guaranteeOneUserInDatabase() {
    const users = await this.leverancierRepository.find();
    if (users.length === 0) {
      const leverancierEntity = new LeverancierEntity();
      leverancierEntity.naam = 'John Doe';
      leverancierEntity.plaats = 'Ergens';
      leverancierEntity.postcode = '1234AB';
      leverancierEntity.taalcode = TaalCode.NL;
      leverancierEntity.telefoon = '06123456';
      leverancierEntity.valutacode = ValutaCode.EUR;
      await this.leverancierRepository.save(leverancierEntity);
      console.log(leverancierEntity);
    } else {
      console.log(users);
    }
  }
}
