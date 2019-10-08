import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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

export type LeverancierByIdQueryVariables = {
  id: Scalars['Int']
};


export type LeverancierByIdQuery = { __typename?: 'Query', leverancier: { __typename?: 'Leverancier', id: number, naam: string } | { __typename?: 'LeverancierNotFound', id: number, reason: string } };


export const LeverancierByIdDocument = gql`
    query LeverancierById($id: Int!) {
  leverancier(id: $id) {
    __typename
    ... on Leverancier {
      id
      naam
    }
    ... on LeverancierNotFound {
      id
      reason
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LeverancierByIdGQL extends Apollo.Query<LeverancierByIdQuery, LeverancierByIdQueryVariables> {
    document = LeverancierByIdDocument;
    
  }