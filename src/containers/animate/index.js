import React, { useState, useEffect } from 'react';
import Filp from '../../components/filp';
// import styles from './styles.css';

export default function() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let i = 0;
      setValue((i += 1));
    }, 1000);
  });
  return (
    <div>
      {value}
      <Filp to={1023} />
    </div>
  );
}
