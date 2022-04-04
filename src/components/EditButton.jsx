import React from "react";
import { FaRegEdit } from "react-icons/fa";

function EditButton() {
  return (
    <div>
      <button className="btn btn-sm">
        <FaRegEdit size={17} />
      </button>
    </div>
  );
}

export default EditButton;
