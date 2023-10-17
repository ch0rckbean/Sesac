import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductdetailPage() {
  // const data = useParams();
  // console.log(data); // 객체 형태, 문자형으로 찍힘

  const { productId } = useParams();
  // console.log(productId); //n

  const navigate = useNavigate();

  const targetProduct = productInfos[productId - 1];
  const { id, name, email, body } = targetProduct;
  return (
    <div>
      <h1>ProductdetailPage</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        {/* string에서 빼도 js는 유연하기에 동작 */}
        <li>상품번호:{id} </li>
        <li>상품명:{name} </li>
        <li>판매자:{email} </li>
        <li>상세설명:{body} </li>
      </ul>
    </div>
  );
}
