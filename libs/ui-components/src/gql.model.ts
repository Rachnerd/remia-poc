export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Leverancier = {
   __typename?: 'Leverancier',
  id: Scalars['Int'],
  naam: Scalars['String'],
  plaats: Scalars['String'],
  postcode: Scalars['String'],
  taalcode: TaalCode,
  telefoon: Scalars['String'],
  valutacode: ValutaCode,
};

export type LeverancierNotFound = {
   __typename?: 'LeverancierNotFound',
  id: Scalars['Int'],
  reason: Scalars['String'],
};

export type LeverancierResult = Leverancier | LeverancierNotFound;

export type Query = {
   __typename?: 'Query',
  leverancier: LeverancierResult,
};


export type QueryLeverancierArgs = {
  id: Scalars['Int']
};

/** Language code */
export enum TaalCode {
  Nl = 'NL',
  Us = 'US',
  Unknown = 'UNKNOWN'
}

/** Currency code */
export enum ValutaCode {
  Eur = 'EUR',
  Usd = 'USD',
  Unknown = 'UNKNOWN'
}

export type UiTestComponentQueryVariables = {};


export type UiTestComponentQuery = { __typename?: 'Query', leverancier: { __typename?: 'Leverancier', postcode: string } | { __typename?: 'LeverancierNotFound' } };
