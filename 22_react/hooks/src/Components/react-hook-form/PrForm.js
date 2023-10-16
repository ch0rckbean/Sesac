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

  console.log(isSubmitted);
  return (
    <div>
      <h1>react-hook-form 실습</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="name"
          {...register('name', {
            required: '이름은 필수 항목입니다.',
          })}
        />{' '}
        <br></br>
        {errors?.name?.message}
        <br></br>
        <input
          type="text"
          placeholder="age"
          {...register('age', {
            validate: {
              useNum: (v) =>
                Number(v) >= 0 || '0이상의 숫자만 입력 가능합니다.',
            },
          })}
        />
        <br></br>
        {errors?.age?.message}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
