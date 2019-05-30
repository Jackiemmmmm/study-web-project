import { useState, useEffect } from 'react';

export const useDebounce = (value, delay = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handle);
    };
  }, [value]);
  return debounceValue;
};

// export const useChunk = (array, size = 1) => {
//   const [chunkValue, setChunkValue] = useState(array);

// };

export default useDebounce;
