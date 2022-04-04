import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";

function DeleteButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className="btn btn-sm">
        <FaRegTrashAlt size={15} />
      </button>
    </div>
  );
}

export default DeleteButton;
