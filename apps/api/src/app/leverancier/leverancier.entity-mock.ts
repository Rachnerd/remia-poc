import { LeverancierEntity } from './leverancier.entity';
import { ValutaCode } from './graphql/valuta-code.enum';
import { TaalCode } from './graphql/taal-code.enum';
import { Leverancier } from './graphql/leverancier.type';

/**
 * Function that generates a customized leverancier entity for unit tests.
 */
export const mockLeverancierEntity = ({
  id,
  naam,
  telefoon,
  plaats,
  postcode,
  valutacode,
  taalcode
}: Partial<LeverancierEntity>): LeverancierEntity => {
  const entity = new LeverancierEntity();
  entity.id = id || 1;
  entity.naam = naam || 'naam';
  entity.telefoon = telefoon || 'telefoon';
  entity.plaats = plaats || 'plaats';
  entity.postcode = postcode || 'postcode';
  entity.valutacode = valutacode || ValutaCode.EUR;
  entity.taalcode = taalcode || TaalCode.NL;
  return entity;
};

/**
 * Default mock leverancier for unit tests.
 */
export const MOCK_LEVERANCIER_ENTITY: Readonly<
  LeverancierEntity
> = mockLeverancierEntity({});

export const MOCK_LEVERANCIER: Readonly<Leverancier> = {
  id: MOCK_LEVERANCIER_ENTITY.id,
  naam: MOCK_LEVERANCIER_ENTITY.naam,
  plaats: MOCK_LEVERANCIER_ENTITY.plaats,
  postcode: MOCK_LEVERANCIER_ENTITY.postcode,
  taalcode: MOCK_LEVERANCIER_ENTITY.taalcode,
  telefoon: MOCK_LEVERANCIER_ENTITY.telefoon,
  valutacode: MOCK_LEVERANCIER_ENTITY.valutacode
};
