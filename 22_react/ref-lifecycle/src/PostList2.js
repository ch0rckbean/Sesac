import React, { useEffect, useState } from 'react';
import PostItem2 from './PostItem2';
import axios from 'axios';

export default function PostList2() {
  const [state, setState] = useState([]);
  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/albums',
  }).then((res) => {
    // console.log(res.data);
    setState(res.data);
  });

  return (
    <div>
      <div
        style={{
          background: 'blue',
          color: 'beige',
          fontSize: '60px',
          textAlign: 'center',
        }}
      >
        Post List
      </div>
      <PostItem2 state={state} />
    </div>
  );
}
