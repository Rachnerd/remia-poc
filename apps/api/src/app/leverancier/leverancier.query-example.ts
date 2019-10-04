import gql from 'graphql-tag';

export const LEVERANCIER_QUERY_EXAMPLE = gql`
  {
    leverancier(id: 1) {
      __typename
      ... on Leverancier {
        id
        naam
        plaats
        postcode
        taalcode
        telefoon
        valutacode
      }
      ... on LeverancierNotFound {
        id
        reason
      }
    }
  }
`;

// -------------- Output id: 1 --------------
// {
//   "data": {
//     "leverancier": {
//       "__typename": "Leverancier",
//       "id": 1,
//       "naam": "John Doe",
//       "plaats": "Ergens",
//       "postcode": "1234AB",
//       "taalcode": "NL",
//       "telefoon": "06123456",
//       "valutacode": "EUR"
//     }
//   }
// }

// -------------- Output id: 2 --------------
// {
//   "data": {
//     "leverancier": {
//       "__typename": "LeverancierNotFound",
//         "id": 2,
//         "reason": "Leverancier does not exist."
//     }
//   }
// }
