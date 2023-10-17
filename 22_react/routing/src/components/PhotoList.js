import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoItem from './PhotoItem';

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);
  // getPhotos 함수 밖으로 data를 꺼내기 위한 useState 사용

  const getPhotos = async () => {
    const photoData = await axios.get(
      'https://jsonplaceholder.typicode.com/photos '
    );
    const { data } = photoData;
    // console.log('data', data);
    setPhotos(data);
    // console.log('photos', photos);
  };

  useEffect(() => {
    getPhotos();
  }, []); // Mount 될 때만 데이터 요청

  return (
    <div>
      <PhotoItem photos={photos} />
    </div>
  );
}
