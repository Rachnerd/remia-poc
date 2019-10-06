import { Injectable } from '@nestjs/common';
import { LeverancierEntity } from './leverancier.entity';
import { EntityNotFoundException } from '../exceptions/entity-not-found.exception';
import { LeverancierRepository } from './leverancier.repository';

/**
 * This is a "Service".
 */
@Injectable()
export class LeverancierService {
  constructor(private readonly leverancierRepository: LeverancierRepository) {}

  async getById(id: number): Promise<Readonly<LeverancierEntity>> {
    const optionalLeverancier = await this.leverancierRepository.findOne(id);
    if (optionalLeverancier === undefined) {
      throw new EntityNotFoundException('Leverancier', id);
    }
    return optionalLeverancier;
  }
}
