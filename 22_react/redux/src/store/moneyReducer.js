const ADD = 'money/ADD';
const SUB = 'money/SUB';

export const add = (inputMoney) => ({
  type: ADD,
  payload: inputMoney,
});
export const sub = (inputMoney) => ({
  type: SUB,
  payload: inputMoney,
});
const initVal = {
  money: 0,
};

const moneyReducer = (state = initVal, action) => {
  switch (action.type) {
    case ADD:
      return { money: state.money + Number(action.payload) };
    case SUB:
      return { money: state.money - Number(action.payload) };
    default:
      return state;
  }
};

export default moneyReducer;
