import React, { useEffect, useState } from 'react';
import { useExchangeRates } from '~utils/use-effect';

export default function Demo() {
  const [value, setValue] = useState('');
  const getRates = useExchangeRates();
  useEffect(() => {
    setValue(getRates);
  }, [getRates]);
  if (!value) return null;
  switch (value) {
    case 'loading':
      return <div>Hooks Loading...</div>;
    case 'error':
      return <div>Hooks Error...</div>;
    default:
      return (
        value.rates &&
        value.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>{`${currency}: ${rate}`}</p>
          </div>
        ))
      );
  }
}
