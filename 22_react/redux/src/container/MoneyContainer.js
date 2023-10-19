import { useDispatch, useSelector } from 'react-redux';
import { add, sub } from '../store/moneyReducer';
import Pr_Bank from '../Pr_Bank';

export const MoneyContainer = () => {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.money.money);
  // console.log('money1', money);

  return (
    <Pr_Bank
      money={money}
      onAdd={() => dispatch(add())}
      onSub={() => dispatch(sub())}
    />
  );
};
