import { Routes, Route, Navigate, Link } from "react-router-dom";

function CreateItem({ children }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Submit form");
  };

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Nuevo</h1>
        <Link className="btn btn-dark" to="/categories">
          Volver
        </Link>
      </div>

      {/* <!-- New Item Form --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Detalles</h6>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default CreateItem;
