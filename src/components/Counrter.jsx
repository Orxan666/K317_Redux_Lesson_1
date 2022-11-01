import React from "react";

import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";

const Counrter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer);

  return (
    <div>
      <button onClick={() => dispatch(Actions.sayiAksiyon.sayiArttir())}>
        Arttir(+)
      </button>
      <button onClick={()=>dispatch(Actions.sayiAksiyon.sayiAzalt())}>Azalt(-)</button>
      <p>{count}</p>
    </div>
  );
};

export default Counrter;
