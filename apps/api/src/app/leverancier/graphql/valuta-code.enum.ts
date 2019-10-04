import { registerEnumType } from 'type-graphql';

export enum ValutaCode {
  EUR = 'EUR',
  USD = 'USD',
  UNKNOWN = 'UNKNOWN'
}

registerEnumType(ValutaCode, {
  name: 'ValutaCode',
  description: 'Currency code'
});
