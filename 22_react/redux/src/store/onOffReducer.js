const ON = 'light/ON';
const OFF = 'light/OFF';

export const on = () => ({
  type: ON,
});
export const off = () => ({
  type: OFF,
});
const initVal = {
  light: OFF,
  bgColor: '#000',
  fontColor: '#FFF',
};

const onOffReducer = (state = initVal, action) => {
  switch (action.type) {
    case ON:
      return { light: state.light, bgColor: 'yellow', fontColor: 'aqua' };
    case OFF:
      return { light: state.light, bgColor: '#000', fontColor: '#FFF' };
    default:
      return state;
  }
};

export default onOffReducer;
