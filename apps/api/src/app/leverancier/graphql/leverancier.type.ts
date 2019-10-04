import { Field, Int, ObjectType } from 'type-graphql';
import { TaalCode } from './taal-code.enum';
import { ValutaCode } from './valuta-code.enum';
import { LeverancierEntity } from '../leverancier.entity';

@ObjectType()
export class Leverancier {
  @Field(returns => Int)
  id: number;

  @Field()
  naam: string;

  @Field()
  plaats: string;

  @Field()
  postcode: string;

  @Field(returns => TaalCode)
  taalcode: TaalCode;

  @Field()
  telefoon: string;

  @Field(returns => ValutaCode)
  valutacode: ValutaCode;
}
