import { useEffect, useState } from "react";
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

function Tables() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getAdmins = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + "/users",
        method: "GET",
        token: user.token,
      });
      console.log(data);
      setUsers(data);
    };
    getAdmins();
  }, []);

  // <!-- Page Heading -->

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Users</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables.
      </p>

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
                  <th>id</th>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>
                      <button className="btn btn-sm btn-danger btn-circle">
                        <i className="fas fa-trash"></i>
                      </button>
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

export default Tables;
