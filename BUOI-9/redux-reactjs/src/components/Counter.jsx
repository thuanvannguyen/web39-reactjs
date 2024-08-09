import { useDispatch, useSelector } from "react-redux";
import { downCount, upCount } from "../actions/counterAction";

const Counter = () => {

    // Cach lay du lieu trong store;
    const result = useSelector((state)=> state);

    console.log(result);

    // Cap nhap data tu UI len store
    const dispath = useDispatch();

  const handleIncrement = () => {
    dispath(upCount());
  }

  const handleDecrement = () => {
    dispath(downCount());
  }

  return (
    <>
      <button onClick={handleIncrement}>++</button>
      <h1>{result.count}</h1>
      <button onClick={handleDecrement}>--</button>
    </>
  );
};

export default Counter;


// b1: Tao Store -> reducer
// b2: Phan phat Store -> child Component
// B3: Component child -> Goi inintal data Store

// B4: Tao action -> Gui di thong dispatch
// B5: Cap nhat reducer voi action gui di B4