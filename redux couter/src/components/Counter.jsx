import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/slices/CounterSlice";
const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const dispath = useDispatch();

  return (
    <div className="bg-[#344151] w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-3xl">
        {" "}
        Increment && Decrement{" "}
      </div>

      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={() => dispath(decrement())}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-4xl">{count}</div>
        <button
          onClick={() => dispath(increment())}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>

      <div>
        <button
          onClick={() => dispath(reset())}
          className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
