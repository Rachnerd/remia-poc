import { ResolveProperty, Resolver } from '@nestjs/graphql';
import { Leverancier, LeverancierResult } from '../../../../graphql';

@Resolver('LeverancierResult')
export class LeverancierResultResolver {
  /**
   * Resolver for "LeverancierResult" union.
   */
  @ResolveProperty()
  async __resolveType(leverancierResult: LeverancierResult) {
    /**
     * If we detect the `naam` field we can say with certainty that it's a Leverancier.
     */
    if ((leverancierResult as Leverancier).naam !== undefined) {
      return 'Leverancier';
    } else {
      /**
       * Else we assume it is not found.
       */
      return 'LeverancierNotFound';
    }
  }
}
