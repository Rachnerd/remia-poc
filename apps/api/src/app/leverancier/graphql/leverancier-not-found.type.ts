import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class LeverancierNotFound {
  @Field(returns => Int)
  id: number;

  @Field()
  reason: string;
}
