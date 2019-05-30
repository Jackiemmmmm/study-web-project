import React, { useEffect, useState } from 'react';
import { useDebounce } from 'utils/use-effect';

export default function Demo() {
  const [value, setValue] = useState('');
  const [text, setText] = useState('');
  const debouncedValue = useDebounce(value, 300);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('title is: ', debouncedValue);
    document.title = `${debouncedValue} :Input Value`;
  }, [debouncedValue]);
  return (
    <div>
      <input placeholder="请输入文字" value={value} onChange={e => setValue(e.target.value)} />
      <br />
      <input
        placeholder="输入文字修改页面文字"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}
