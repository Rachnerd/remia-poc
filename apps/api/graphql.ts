
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum TaalCode {
    NL = "NL",
    US = "US"
}

export enum ValutaCode {
    EUR = "EUR",
    USD = "USD"
}

export interface Leverancier {
    id: number;
    naam: string;
    plaats: string;
    postcode: string;
    taalcode: TaalCode;
    telefoon: string;
    valutacode: ValutaCode;
}

export interface LeverancierNotFound {
    id: number;
    reason: string;
}

export interface IQuery {
    leverancier(id: number): LeverancierResult | Promise<LeverancierResult>;
}

export type LeverancierResult = Leverancier | LeverancierNotFound;
