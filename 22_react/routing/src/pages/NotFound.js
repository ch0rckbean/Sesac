import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="NotFoundDiv">
      <h1>NotFound</h1>
      <Link to="/">홈으로 이동하기</Link>
    </div>
  );
}
