import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

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

function EditButton({ onClick }) {
  const user = useSelector((state) => state.user);

  const handleUpdate = async (adminId) => {
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/admins/${adminId}`,
      method: "PATCH",
      token: user.token,
    });
  };

  return (
    <div>
      <button onClick={onClick} className="btn btn-sm">
        <FaRegEdit size={17} />
      </button>
    </div>
  );
}

export default EditButton;
