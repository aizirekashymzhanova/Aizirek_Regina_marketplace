import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src="https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg"
        alt=""
        width="100%"
      />
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Error;
