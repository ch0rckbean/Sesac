import { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title; // 정리 함수를 위해 이전 값 저장
    document.title = title;
    console.log(prevTitle); //React App
    console.log(document.title); //React Hooks 연습중입니당
    // 정리 함수
    // - useEffect 에서 쓰이며, 값 변경 시 이전 효과 '정리' 해주는 함수
    // - return을 통해 예약
    // - 컴포넌트가 언마운트 될 때 이전 값으로 돌아가게 함
    // - [] 안의 값(여기선 title)이 변경될 때, 정리 함수 실행
    return () => (document.title = prevTitle);
  }, [title]);
}
