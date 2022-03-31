
import { Link, useLocation } from "react-router-dom";


function SideBar() {

    const { pathname } = useLocation();
    console.log(pathname);
  
  // Sidebar

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/*Sidebar - Brand*/}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </Link>

        {/*Divider*/}
        <hr className="sidebar-divider my-0" />

        {/*Nav Item - Dashboard*/}
        <li className={`nav-item ${pathname==="/"?"active":""}`} >
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></Link>
        </li>

        {/*Divider*/}
        <hr className="sidebar-divider" />

        {/*Heading*/}
        <div className="sidebar-heading">
            Interface
        </div>

        {/*Nav Item - Pages Collapse Menu*/}
        <li className={`nav-item ${pathname==="/components"?"active":""}`} >
            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog"></i>
                <span>Components</span>
            </Link>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <Link className="collapse-item" to="buttons">Buttons</Link>
                    <Link className="collapse-item" to="cards">Cards</Link>
                </div>
            </div>
        </li>

        {/*Nav Item - Utilities Collapse Menu*/}
        <li className={`nav-item ${pathname==="/utilities"?"active":""}`} >
            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </Link>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <Link className="collapse-item" to="utilities-color">Colors</Link>
                    <Link className="collapse-item" to="utilities-border">Borders</Link>
                    <Link className="collapse-item" to="utilities-animation">Animations</Link>
                    <Link className="collapse-item" to="utilities-other">Other</Link>
                </div>
            </div>
        </li>

        {/*Divider*/}
        <hr className="sidebar-divider" />

        {/*Heading*/}
        <div className="sidebar-heading">
            Addons
        </div>

        {/*Nav Item - Pages Collapse Menu*/}
        <li className={`nav-item ${pathname==="/pages"?"active":""}`} >
            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </Link>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <Link className="collapse-item" to="login">Login</Link>
                    <Link className="collapse-item" to="register">Register</Link>
                    <Link className="collapse-item" to="forgot-password">Forgot Password</Link>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <Link className="collapse-item" to="404">404 Page</Link>
                    <Link className="collapse-item" to="blank">Blank Page</Link>
                </div>
            </div>
        </li>

        {/*Nav Item - Admin CRUD*/}
        <li className={`nav-item ${pathname==="/admins"||pathname==="/admins/new"?"active":""}`} >
            <Link className="nav-link" to="/admins">
                <i className="fas fa-fw fa-wrench"></i>
                <span>Admins</span></Link>
        </li>

        {/*Nav Item - Categories*/}
        <li className={`nav-item ${pathname==="/categories"||pathname==="/categories/new"?"active":""}`} >
            <Link className="nav-link" to="/categories">
                <i className="fas fa-fw fa-table"></i>
                <span>Categories</span></Link>
        </li>

        {/*Nav Item - Products*/}
        <li className={`nav-item ${pathname==="/products"?"active":""}`} >
            <Link className="nav-link" to="/products">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Products</span></Link>
        </li>

        {/*Nav Item - Users*/}
        <li className={`nav-item ${pathname==="/users"?"active":""}`} >
            <Link className="nav-link" to="/users">
                <i className="fas fa-fw fa-table"></i>
                <span>Users</span></Link>
        </li>

        {/*Divider*/}
        <hr className="sidebar-divider d-none d-md-block" />

        {/*Sidebar Toggler (Sidebar)*/}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      {/* End of Sidebar */}
    </ul>
  )
}


export default SideBar;