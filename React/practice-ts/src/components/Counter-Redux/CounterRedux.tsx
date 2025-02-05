import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/actions/couter.slice";
import { RootState } from "../../redux/store";

export const CounterRedux = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between">
      <button
        className="bg-red-500 p-2 rounded-md text-white font-bold"
        onClick={() => dispatch(decrement())}>
        -
      </button>
      <h1 className="text-4xl">{count}</h1>
      <button
        className="bg-green-500 p-2 rounded-md text-white font-bold"
        onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};
