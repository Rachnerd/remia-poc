import { Args, Query, Resolver } from '@nestjs/graphql';
import { IQuery, Leverancier, LeverancierResult } from '../../../graphql';
import { LeverancierService } from './leverancier.service';
import { GraphQLError } from 'graphql';
import { EntityNotFoundException } from '../exceptions/entity-not-found.exception';

/**
 * This is a "Controller"
 */
@Resolver('Leverancier')
export class LeverancierResolver implements Pick<IQuery, 'leverancier'> {
  constructor(private leverancierService: LeverancierService) {}

  /**
   * Resolver for:
   * type Query {
   *   leverancier(id: Int!): LeverancierResult!
   * }
   * Query: "./leverancier.query.example.ts"
   */
  @Query()
  async leverancier(@Args('id') id: number): Promise<LeverancierResult> {
    /**
     * Attempt to get a leverancier by id.
     */
    try {
      /**
       * We ask a service to get a leverancier by id.
       */
      const leverancierEntity = await this.leverancierService.getById(id);
      /**
       * Leverancier is successfully returned as "Leverancier"
       */
      return leverancierEntity;
    } catch (exception) {
      /**
       * Here we catch all expected exceptions and map them to a GraphQL defined
       * type so we don't break the request.
       */
      if (exception instanceof EntityNotFoundException) {
        return { id, reason: 'Leverancier does not exist.' };
      } else {
        /**
         * Unexpected exceptions occur when code is broken or edge cases are
         * missed. These throw a GraphQLError that WILL break the request.
         */
        console.error(exception);
        throw new GraphQLError(`Something went wrong.`);
      }
    }
  }
}
