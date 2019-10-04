import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Custom exception for when a service can't find an Entity
 */
export class EntityNotFoundException extends HttpException {
  constructor(entityName: string, id: number) {
    super(`${entityName} with id ${id} not found.`, HttpStatus.NOT_FOUND);
  }
}
