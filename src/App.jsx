import "./App.css";
import "./css/sb-admin-2.min.css";
import "./vendor/fontawesome-free/css/all.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Admins from "./pages/Admins";
import Categories from "./pages/Categories";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import InfinityScroll from "./components/utils/InfinityScroll";
import Page404 from "./pages/Page404";
import CreateProduct from "./pages/CreateProduct";
import CreateCategory from "./pages/CreateCategory";
import CreateAdmin from "./pages/CreateAdmin";
import EditAdmin from "./pages/EditAdmin";
import EditProduct from "./pages/EditProduct";
import Orders from "./pages/Orders";

function App() {
  const user = useSelector((state) => state.user);
  const [onTop, setOnTop] = useState(true);

  return !user.token ? (
    <Navigate to="/login" />
  ) : (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admins/*" element={<Admins />} />
            <Route path="/admins/crear" element={<CreateAdmin />} />
            <Route path="/admins/editar/:id" element={<EditAdmin />} />
            <Route path="/categorias/*" element={<Categories />} />
            <Route path="/categorias/crear" element={<CreateCategory />} />
            <Route path="/productos/*" element={<Products />} />
            <Route path="/productos/crear" element={<CreateProduct />} />
            <Route path="/productos/editar/:slug" element={<EditProduct />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/pedidos" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Page404 />} />
          </Routes>

          <InfinityScroll action={setOnTop} />
        </div>

        {/* <!-- Footer --> */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>
        {/* <!-- End of Footer --> */}
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <button
        className="scroll-to-top rounded border-0"
        onClick={() => {
          window.scrollTo(0, 0);
          setTimeout(() => {
            setOnTop(true);
          }, 1000);
        }}
        style={{ display: onTop ? "none" : "inline" }}
      >
        <i className="fas fa-angle-up"></i>
      </button>
    </div>
  );
}

export default App;
