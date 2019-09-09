import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      person(personID: 5) {
        name
        birthYear
        created
        filmConnection {
          films {
            title
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading...!</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>{`${currency}: ${rate}`}</p>
    </div>
  ));
}
