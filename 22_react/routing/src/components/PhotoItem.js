import React from 'react';

export default function PhotoItem({ photos }) {
  return (
    <div>
      <ul>
        {photos.map((photos) => {
          return (
            <li key={photos.id}>
              <p>사진 제목 : {photos.title} </p>
              <img
                src={photos.url}
                alt="img"
                style={{ width: '200px', height: '200px' }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
