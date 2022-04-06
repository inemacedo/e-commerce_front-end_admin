import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { FiUsers, FiShoppingCart } from "react-icons/fi";

function SideBar() {
  const { pathname } = useLocation();

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
          <span className="p-2">Resumen</span>
        </Link>
      </li>

      {/*Divider*/}
      <hr className="sidebar-divider" />

      {/*Heading*/}
      <div className="sidebar-heading">Interfaz</div>

      {/*Nav Item - Admin CRUD*/}
      <li
        className={`nav-item ${
          pathname === "/admins" || pathname === "/admins/new" ? "active" : ""
        }`}
      >
        <Link className="nav-link" to="/admins">
          <RiAdminLine />
          <span className="p-2">Administradores</span>
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
        <Link className="nav-link" to="/categorias">
          <BiCategoryAlt />
          <span className="p-2">Categorías</span>
        </Link>
      </li>

      {/*Nav Item - Products*/}
      <li className={`nav-item ${pathname === "/productos" ? "active" : ""}`}>
        <Link className="nav-link" to="/productos">
          <RiProductHuntLine />
          <span className="p-2">Productos</span>
        </Link>
      </li>

      {/*Nav Item - Users*/}
      <li className={`nav-item ${pathname === "/usuarios" ? "active" : ""}`}>
        <Link className="nav-link" to="/usuarios">
          <FiUsers />
          <span className="p-2">Usuarios</span>
        </Link>
      </li>

      {/*Nav Item - Orders*/}
      <li className={`nav-item ${pathname === "/pedidos" ? "active" : ""}`}>
        <Link className="nav-link" to="/pedidos">
          <FiShoppingCart />
          <span className="p-2">Pedidos</span>
        </Link>
      </li>

      {/*Divider*/}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* End of Sidebar */}
    </ul>
  );
}

export default SideBar;
