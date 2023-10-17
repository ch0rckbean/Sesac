import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // form 상태 객체
    watch, //특정 form 필드의 값을 실시간으로 사용
  } = useForm();

  // handleSubmit(funcA , [funcB]) : 두 개의 함수를 받음
  // - funcA: 필수, 유효할 때 실행
  // - funcB: 선택, 유효하지 않을 때 실행
  const onValid = (data) => {
    console.log('onValid', data);
  };

  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  //   console.log('errors', errors);
  //   console.log('watch', watch('username'));
  return (
    <div>
      <h1>react-hook-form</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type='text'
          placeholder='username'
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: { message: '최소 2글자 이상 작성해주세요.', value: 2 },
          })}
        />
        {errors.username?.message}
        {/* errors에 username 있으면 message 출력 */}
        <br></br>

        <input
          type='email'
          placeholder='email'
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: {
              useGmail: (v) =>
                v.includes('gmail.com') || 'gmail로만 가입 가능합니다.',
            },
          })}
        />
        {errors.email?.message}
        <br></br>
        <input
          type='password'
          placeholder='password'
          {...register('password', {
            minLength: { message: '최소 2글자 이상 작성해주세요.', value: 2 },
          })}
        />
        {errors.password?.message}
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
