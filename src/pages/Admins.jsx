import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";
import { ToastContainer } from "react-bootstrap";

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

/* <Createadmin /> */

function Admins() {
  const user = useSelector((state) => state.user);
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleDelete = async (adminId) => {
    setShow(true);
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/admins/${adminId}`,
      method: "DELETE",
      token: user.token,
    });
    setAdmins((prevAdmins) =>
      prevAdmins.filter((admin) => admin.id !== adminId)
    );
  };

  useEffect(() => {
    const getAdmins = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/admins",
        method: "GET",
        token: user.token,
      });
      console.log(data);
      setAdmins(data);
    };
    getAdmins();
  }, []);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-start justify-content-between my-4">
        <h1 className="h3 mb-2 text-gray-800">Admins</h1>
        <Link className="btn btn-primary" to="/admins/new">
          Crear nuevo Admin
        </Link>
      </div>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
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
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {admins.map((admin) => (
                  <tr key={1}>
                    <td>{admin.firstname}</td>
                    <td>{admin.lastname}</td>
                    <td>{admin.email}</td>
                    <td>
                      <EditButton onClick={() => navigate("/admins/edit")} />
                      <DeleteButton onClick={() => handleDelete(admin.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer
        style={{ transition: "all .15s" }}
        className={`${show ? "opacity-1" : "opacity-0"} bg-white m-2 p-0`}
        position="top-end"
      >
        <Toast
          className="bg-"
          onClose={() => setShow(false)}
          show={show}
          delay={5000}
          autohide
        >
          <Toast.Body className="text-dark">
            Se elimino Administrador correctamente
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Admins;
