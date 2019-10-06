import { EntityRepository, Repository } from 'typeorm';
import { LeverancierEntity } from './leverancier.entity';

@EntityRepository(LeverancierEntity)
export class LeverancierRepository extends Repository<
  Readonly<LeverancierEntity>
> {}
