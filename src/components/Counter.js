function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <div>{number}</div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Counter;
