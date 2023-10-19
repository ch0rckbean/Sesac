import Pr_Bank from '../Pr_Bank';
const ADD = 'money/ADD';
const SUB = 'money/SUB';

export const add = () => ({ type: ADD, payload: Pr_Bank.howMuch });
export const sub = () => ({ type: SUB, payload: Pr_Bank.howMuch });

const initialState = {
  money: 0,
};

const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { money: state.money + action.payload };
    case SUB:
      return { money: state.money - action.payload };
    default:
      return state;
  }
};

export default moneyReducer;
