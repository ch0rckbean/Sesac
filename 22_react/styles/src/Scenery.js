import React from 'react';
import './styles/Scenery.scss';
export default function Scenery() {
  return (
    <div className='imgContainer'>
      <img
        src={process.env.PUBLIC_URL + '/images/5.jpg'}
        className='img1'
        alt='scenery'
      ></img>
      <img
        src={process.env.PUBLIC_URL + '/images/5.jpg'}
        className='img2'
        alt='scenery'
      ></img>
      <img
        src={process.env.PUBLIC_URL + '/images/5.jpg'}
        className='img3'
        alt='scenery'
      ></img>
      <img
        src={process.env.PUBLIC_URL + '/images/5.jpg'}
        className='img4'
        alt='scenery'
      ></img>
      <img
        src={process.env.PUBLIC_URL + '/images/5.jpg'}
        className='img5'
        alt='scenery'
      ></img>
    </div>
  );
}
