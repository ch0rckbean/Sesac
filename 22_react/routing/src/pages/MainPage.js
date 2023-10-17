import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get('mode')); //Dark
  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
      >
        Dark Mode
      </button>
      <p>Standard Mode</p>
    </div>
  );
}
