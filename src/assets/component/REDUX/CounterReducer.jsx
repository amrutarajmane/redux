import { useSelector, useDispatch } from "react-redux";
import { incrementCountAction, decrementCountAction, resetCountAction, counterFeatureKey } from "./CounterSlice";

const CounterRedux = () => {
    const data = useSelector((store) => store[counterFeatureKey]); // Access counter state properly
    const dispatch = useDispatch();

    return (
        <>
            <p>Counter: {data.count}</p> 
            <button color="blue" onClick={() => dispatch(incrementCountAction())}>++</button>
            <button color='red' onClick={() => dispatch(decrementCountAction())}>--</button>
            <button color='black' onClick={() => dispatch(resetCountAction())}>Reset</button>
        </>
    );
};

export default CounterRedux;
