import { Routes, Route, Navigate, Link } from "react-router-dom";

function CreateItem({ children }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">New Category</h1>
        <Link className="btn btn-dark" to="/categories">
          Volver
        </Link>
      </div>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables.
      </p>

      {/* <!-- New Item Form --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            New Admin details
          </h6>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default CreateItem;
