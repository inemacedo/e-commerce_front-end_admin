import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

async function fetchData({ url, method }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return { status: response.status, data };
}

function TopBar() {
  const params = useParams();
  const dispatch = useDispatch();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowProfileMenu(false);
  }, [params]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const resetDB = async () => {
    await fetch(process.env.REACT_APP_API_URL + `/db/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reset: true
      })
    });
    console.log(JSON.stringify(
      { reset: true }
    ));
    handleLogout();
  }

  // <!------ Topbar Navbar*/}

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* < !--Sidebar Toggle(Topbar)-- > */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* <!--Topbar Search-- > */}
      {/* <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form> */}

      <ul className="navbar-nav ml-auto">
        {/*Nav Item - Search Dropdown (Visible Only XS)*/}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-search fa-fw"></i>
          </a>
          {/*Dropdown - Messages*/}
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        {/*Nav Item - Alerts*/}
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-bell fa-fw"></i>
            {/*Counter - Alerts*/}
            <span className="badge badge-danger badge-counter">3+</span>
          </a>
          {/*Dropdown - Alerts*/}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="alertsDropdown"
          >
            <h6 className="dropdown-header">Alerts Center</h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-file-alt text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">
                  Un nuevo reporte mensual est?? pronto para descargar!
                </span>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-success">
                  <i className="fas fa-donate text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 7, 2019</div>
                $290.29 has been deposited into your account!
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-warning">
                  <i className="fas fa-exclamation-triangle text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 2, 2019</div>
                Spending Alert: We've noticed unusually high spending for your
                account.
              </div>
            </a>
            <a
              className="dropdown-item text-center small text-gray-500"
              href="#"
            >
              Show All Alerts
            </a>
          </div>
        </li>

        {/*Nav Item - Messages*/}
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-envelope fa-fw"></i>
            {/*Counter - Messages*/}
            <span className="badge badge-danger badge-counter">7</span>
          </a>
          {/*Dropdown - Messages*/}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="messagesDropdown"
          >
            <h6 className="dropdown-header">Message Center</h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="./img/undraw_profile_1.svg"
                  alt="..."
                />
                <div className="status-indicator bg-success"></div>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">
                  Hi there! I am wondering if you can help me with a problem
                  I've been having.
                </div>
                <div className="small text-gray-500">Emily Fowler ?? 58m</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="./img/undraw_profile_2.svg"
                  alt="..."
                />
                <div className="status-indicator"></div>
              </div>
              <div>
                <div className="text-truncate">
                  I have the photos that you ordered last month, how would you
                  like them sent to you?
                </div>
                <div className="small text-gray-500">Jae Chun ?? 1d</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="./img/undraw_profile_3.svg"
                  alt="..."
                />
                <div className="status-indicator bg-warning"></div>
              </div>
              <div>
                <div className="text-truncate">
                  Last month's report looks great, I am very happy with the
                  progress so far, keep up the good work!
                </div>
                <div className="small text-gray-500">Morgan Alvarez ?? 2d</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                  alt="..."
                />
                <div className="status-indicator bg-success"></div>
              </div>
              <div>
                <div className="text-truncate">
                  Am I a good boy? The reason I ask is because someone told me
                  that people say this to all dogs, even if they aren't good...
                </div>
                <div className="small text-gray-500">Chicken the Dog ?? 2w</div>
              </div>
            </a>
            <a
              className="dropdown-item text-center small text-gray-500"
              href="#"
            >
              Read More Messages
            </a>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        {/*Nav Item - User Information*/}
        <li className="nav-item dropdown no-arrow">
          <button
            className="nav-link dropdown-toggle border-0 bg-white"
            onClick={() => setShowProfileMenu((prev) => !prev)}
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Admin
            </span>
            <img
              className="img-profile rounded-circle"
              src="./img/undraw_profile.svg"
            />
          </button>
          {/*Dropdown - User Information*/}
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${showProfileMenu ? "show" : ""
              }`}
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to="/profile">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Perfil
            </Link>
            <button
              className="dropdown-item"
              onClick={() => setShowModal({
                title: "Ready to Reset DataBase?",
                description: "Select 'Reset DataBase' below if you are ready to end your current session.",
                function: "Reset DataBase"
              })}
            >
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Resetear Base de Datos
            </button>
            <Link className="dropdown-item" to="/">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Registros
            </Link>
            <div className="dropdown-divider"></div>
            <button
              className="dropdown-item"
              onClick={() => setShowModal({
                title: "Ready to Leave?",
                description: "Select 'Logout' below if you are ready to end your current session.",
                function: "Logout"
              })}
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </button>
          </div>
        </li>
      </ul>

      {/* <!-- Logout Modal--> */}
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className={`modal-dialog`}
          role="document"
        >
          <div
            className={`modal-content`}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {showModal.title}
              </h5>
            </div>
            <div className="modal-body">
              {showModal.description}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={() => showModal.function === "Logout" ? handleLogout() : resetDB()}>
                {showModal.function}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </nav>
  );
}

export default TopBar;
