import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const { pathname } = useLocation();
  console.log(pathname);

  // Sidebar

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/*Sidebar - Brand*/}
      <Link className="sidebar-brand d-flex align-items-center" to="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3 ">HACK HOME Admin</div>
      </Link>

      {/*Divider*/}
      <hr className="sidebar-divider my-0" />

      {/*Nav Item - Dashboard*/}
      <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/*Divider*/}
      <hr className="sidebar-divider" />

      {/*Heading*/}
      <div className="sidebar-heading">Interface</div>

      {/*Nav Item - Admin CRUD*/}
      <li
        className={`nav-item ${
          pathname === "/admins" || pathname === "/admins/new" ? "active" : ""
        }`}
      >
        <Link className="nav-link" to="/admins">
          <i className="fas fa-fw fa-table"></i>
          <span>Admins</span>
        </Link>
      </li>

      {/*Nav Item - Categories*/}
      <li
        className={`nav-item ${
          pathname === "/categories" || pathname === "/categories/new"
            ? "active"
            : ""
        }`}
      >
        <Link className="nav-link" to="/categories">
          <i className="fas fa-fw fa-table"></i>
          <span>Categories</span>
        </Link>
      </li>

      {/*Nav Item - Products*/}
      <li className={`nav-item ${pathname === "/products" ? "active" : ""}`}>
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-table"></i>
          <span>Products</span>
        </Link>
      </li>

      {/*Nav Item - Users*/}
      <li className={`nav-item ${pathname === "/users" ? "active" : ""}`}>
        <Link className="nav-link" to="/users">
          <i className="fas fa-fw fa-table"></i>
          <span>Users</span>
        </Link>
      </li>

      {/*Divider*/}
      <hr className="sidebar-divider d-none d-md-block" />

      {/*Sidebar Toggler (Sidebar)*/}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      {/* End of Sidebar */}
    </ul>
  );
}

export default SideBar;
