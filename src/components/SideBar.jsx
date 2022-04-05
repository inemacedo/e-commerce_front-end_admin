import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { FiUsers, FiShoppingCart } from "react-icons/fi";

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
          <AiOutlineDashboard />
          <span className="p-2">Dashboard</span>
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
          <RiAdminLine />
          <span className="p-2">Admins</span>
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
          <BiCategoryAlt />
          <span className="p-2">Categories</span>
        </Link>
      </li>

      {/*Nav Item - Products*/}
      <li className={`nav-item ${pathname === "/products" ? "active" : ""}`}>
        <Link className="nav-link" to="/products">
          <RiProductHuntLine />
          <span className="p-2">Products</span>
        </Link>
      </li>

      {/*Nav Item - Users*/}
      <li className={`nav-item ${pathname === "/users" ? "active" : ""}`}>
        <Link className="nav-link" to="/users">
          <FiUsers />
          <span className="p-2">Users</span>
        </Link>
      </li>

      {/*Nav Item - Orders*/}
      <li className={`nav-item ${pathname === "/users" ? "active" : ""}`}>
        <Link className="nav-link" to="/users">
          <FiShoppingCart />
          <span className="p-2">Orders</span>
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
