import { Args, Query, Resolver } from '@nestjs/graphql';
import { LeverancierService } from '../leverancier.service';
import { GraphQLError } from 'graphql';
import { EntityNotFoundException } from '../../exceptions/entity-not-found.exception';
import { Leverancier } from './leverancier.type';
import { LeverancierResultUnion } from './leverancier-result.union';
import { Int } from 'type-graphql';
import { LeverancierEntity } from '../leverancier.entity';
import { TaalCode } from './taal-code.enum';
import { ValutaCode } from './valuta-code.enum';

/**
 * This is a "Controller"
 */
@Resolver(Leverancier)
export class LeverancierResolver {
  constructor(private leverancierService: LeverancierService) {}

  /**
   * Resolver for:
   * type Query {
   *   leverancier(id: Int!): LeverancierResult!
   * }
   * Query: "./leverancier.query.example.ts"
   */
  @Query(returns => LeverancierResultUnion)
  async leverancier(
    @Args({
      name: 'id',
      type: () => Int
    })
    id: number
  ): Promise<typeof LeverancierResultUnion> {
    /**
     * Attempt to get a leverancier by id.
     */
    try {
      /**
       * We ask a service to get a leverancier by id.
       */
      const leverancierEntity = await this.leverancierService.getById(id);
      /**
       * "LeverancierEntity" is transformed to "Leverancier" (DTO).
       */
      return LeverancierResolver.convertToDto(leverancierEntity);
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

  /**
   * It's important to decouple the GraphQL types from the database entities
   * so that potential database changes don't directly affect the GraphQL
   * schema (contract for all fontends).
   */
  private static convertToDto({
    id,
    naam,
    postcode,
    plaats,
    telefoon,
    valutacode,
    taalcode
  }: LeverancierEntity): Leverancier {
    const leverancierDto = new Leverancier();
    /**
     * Here we whitelist all values that are allowed to be shipped to the client.
     */
    leverancierDto.id = id;
    leverancierDto.naam = naam;
    leverancierDto.postcode = postcode;

    if (!TaalCode[taalcode]) {
      console.warn(
        `GQL Leverancier: Unsupported taalcode detected: ${taalcode}`
      );
      /**
       * Falling back on UNKNOWN makes sure GraphQL doesn't throw an error.
       */
      leverancierDto.taalcode = TaalCode.UNKNOWN;
    } else {
      leverancierDto.taalcode = taalcode;
    }

    if (!ValutaCode[valutacode]) {
      console.warn(
        `GQL Leverancier: Unsupported valutacode detected: ${valutacode}`
      );
      leverancierDto.valutacode = ValutaCode.UNKNOWN;
    } else {
      leverancierDto.valutacode = valutacode;
    }

    leverancierDto.plaats = plaats;
    leverancierDto.telefoon = telefoon;
    return leverancierDto;
  }
}
