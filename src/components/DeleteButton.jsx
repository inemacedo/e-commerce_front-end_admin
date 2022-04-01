import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

async function fetchData({ url, method, token }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
}

function DeleteButton({ itemId }) {
  const user = useSelector((state) => state.user);

  const handleDelete = async () => {
    const data = await fetchData({
      url: process.env.REACT_APP_API_URL + `/products/${itemId}`,
      method: "DELETE",
      token: user.token,
    });
  };

  return (
    <div>
      <form action="">
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-danger btn-circle"
        >
          <i className="fas fa-trash"></i>
        </button>
      </form>
    </div>
  );
}

export default DeleteButton;
