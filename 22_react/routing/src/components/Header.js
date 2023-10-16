import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ background: 'pink', fontWeight: 'bold' }}>
      <span
        style={{
          fontWeight: 'bold',
          fontSize: '50px',
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        Router Tutorial
      </span>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <li style={{ margin: '20px' }}>
          <Link to="/">HOME</Link>
        </li>
        <li style={{ margin: '20px' }}>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li style={{ margin: '20px' }}>
          <Link to="/photo">PHOTO</Link>
        </li>
      </ul>
    </header>
  );
}
