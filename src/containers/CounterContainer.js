import { useDispatch, useSelector } from "react-redux";
import Counter from "../Components/Counter";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);

  const dispath = useDispatch();

  const onIncrease = () => dispath(increaseAsync());
  const onDecrease = () => dispath(decreaseAsync());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
