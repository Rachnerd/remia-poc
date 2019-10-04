import { createUnionType } from 'type-graphql';
import { Leverancier } from './leverancier.type';
import { LeverancierNotFound } from './leverancier-not-found.type';

export const LeverancierResultUnion = createUnionType({
  name: 'LeverancierResult',
  types: () => [Leverancier, LeverancierNotFound],
  resolveType: value => {
    if ('naam' in value) {
      return Leverancier;
    }
    return LeverancierNotFound;
  }
});
