import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useComContext } from "../../Context/ComContextProvider";

const ListCom = () => {
  const { prodId } = useParams();

  const { comments, getCom } = useComContext();

  useEffect(() => {
    getCom(prodId);
  }, []);
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((item) => (
          <li key={item.id}>
            {item.title} {item.author}
          </li>
        ))
      ) : (
        <h2>Loading</h2>
      )}{" "}
    </div>
  );
};

export default ListCom;
