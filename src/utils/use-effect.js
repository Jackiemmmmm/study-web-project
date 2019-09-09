import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const useDebounce = (value, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handle);
    };
  });
  return debounceValue;
};

export const useCheck = value => {
  const debouncedValue = useDebounce(value, 300);
  if (debouncedValue !== 'jackie') return true;
  return false;
};

export const useExchangeRates = () => {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);
  if (loading) return 'loading';
  if (error) return 'error';
  return data;
};

// export const useChunk = (array, size = 1) => {
//   const [chunkValue, setChunkValue] = useState(array);

// };

export default useDebounce;
