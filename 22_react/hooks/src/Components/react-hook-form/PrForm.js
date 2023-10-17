import React from 'react';
import { useForm } from 'react-hook-form';

export default function PrForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    watch,
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };
  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  console.log(errors);
  console.log(isSubmitted);
  return (
    <div>
      <h1>react-hook-form 실습</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type='text'
          placeholder='name'
          {...register('name', {
            required: '이름은 필수 항목입니다.',
          })}
        />{' '}
        {errors.name?.message}
        <br></br>
        <input
          type='text'
          placeholder='age'
          {...register('age', {
            validate: {
              useNum: (v) =>
                Number(v) >= 0 || '0이상의 숫자만 입력 가능합니다.',
            },
          })}
        />
        {errors.age?.message}
        <br></br>
        <input
          type='text'
          placeholder='nickname'
          {...register('nickname', {
            minLength: { message: '최소 2글자 이상 작성해주세요', value: 2 },
          })}
        />
        {errors.nickname?.message}
        <br></br>
        <input
          type='email'
          placeholder='email'
          {...register('email', {
            validate: {
              useCom: (v) =>
                v.includes('com') || '올바른 이메일 형식이 아닙니다.',
            },
          })}
        />
        {errors.email?.message}
        <br></br>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}
