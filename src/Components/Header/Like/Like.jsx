import React, { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(0);
  function increment() {
    setLike((prevState) => prevState + 1);
  }
  function decrement() {
    setLike((prevState) => prevState - 1);
  }
  return (
    <div>
      <p onClick={increment}>{like}</p>
    </div>
  );
};

export default Like;
