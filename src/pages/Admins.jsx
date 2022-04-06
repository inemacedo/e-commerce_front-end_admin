import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";
import { ToastContainer } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";

async function fetchData({ url, method, token }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return { status: response.status, data };
}

/* <Createadmin /> */

function Admins() {
  const user = useSelector((state) => state.user);
  const [admins, setAdmins] = useState([]);
  const [showToast, setShowToast] = useState({ show: false, info: "" });

  const handleDelete = async (admin) => {
    const response = await fetchData({
      url: process.env.REACT_APP_API_URL + `/admins/${admin.id}`,
      method: "DELETE",
      token: user.token,
    });
    if (response.status === 200) {
      setShowToast({ show: true, info: admin.email });
    } else {
    }
  };

  useEffect(() => {
    const getAdmins = async () => {
      const response = await fetchData({
        url: process.env.REACT_APP_API_URL + "/admins",
        method: "GET",
        token: user.token,
      });

      setAdmins(response.data);
    };
    getAdmins();
  }, [showToast]);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Administradores</h1>
        <div className="toast-delete d-flex justify-content-center fixed-top">
          <ToastContainer
            style={{ transition: "all .15s" }}
            className={`${
              showToast.show ? "opacity-1" : "opacity-0"
            } bg-dark rounded mt-3 p-0`}
            position="top-end"
          >
            <Toast
              className="bg-dark rounded"
              onClose={() =>
                setShowToast({ show: false, info: showToast.info })
              }
              show={showToast.show}
              delay={5000}
              autohide
            >
              <Toast.Body className="text-light">
                <TiDeleteOutline color="red" size="18" />
                Se eliminó {showToast.info} correctamente
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
        <Link className="btn btn-primary" to="/admins/crear">
          Crear nuevo Admin
        </Link>
      </div>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Lista de administradores
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tfoot className={`${admins.length >= 10 ? "" : "d-none"}`}>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Acciones</th>
                </tr>
              </tfoot>
              <tbody>
                {console.log(admins)}
                {admins &&
                  admins.map((admin) => (
                    <tr key={admin.id}>
                      <td>{admin.firstname}</td>
                      <td>{admin.lastname}</td>
                      <td>{admin.email}</td>
                      <td>
                        <div className="d-flex">
                          <Link to={`/admins/editar/${admin.id}`}>
                            <EditButton />
                          </Link>
                          <DeleteButton onClick={() => handleDelete(admin)} />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admins;
