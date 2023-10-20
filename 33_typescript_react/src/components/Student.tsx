import React from 'react';

// 둘 다 가능
interface StudentInfo {
  name: string;
  grade: number;
  part?: string;
  handleClick: (name: string, grade: number) => void;
}
// type StudentInfo= {
//   name: string;
//   grade: number;
// }

const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <li>이름:{name}</li>
      <li>학년:{grade}</li>
      <li>전공:{part || '자유전공'}</li>
      <br></br>
    </div>
  );
};

// FC: Functional Component
// React.FC를 사용할 때는 Generic을 이용해서 Props 타입 표현

// const Student:React.FC<StudentInfo>=({name,grade})=>{
//   return <div>Student</div>
// }
export default Student;
