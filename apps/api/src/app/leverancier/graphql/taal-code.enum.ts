import { registerEnumType } from 'type-graphql';

export enum TaalCode {
  NL = 'NL',
  US = 'US',
  UNKNOWN = 'UNKNOWN'
}

registerEnumType(TaalCode, {
  name: 'TaalCode',
  description: 'Language code'
});
