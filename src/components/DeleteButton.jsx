import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";

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

function DeleteButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="btn btn-sm">
        <FaRegTrashAlt size={16} />
      </button>
    </div>
  );
}

export default DeleteButton;
