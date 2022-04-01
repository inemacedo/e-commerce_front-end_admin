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
import Page404 from "./pages/Page404";
import CreateProduct from "./pages/CreateProduct";
import CreateCategory from "./pages/CreateCategory";

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
            <Route path="/categories/*" element={<Categories />} />
            <Route path="/categories/new" element={<CreateCategory />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/products/new" element={<CreateProduct />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>

        {/* <!-- Footer --> */}
        <footer
          className="sticky-footer bg-white"
          onClick={() => setOnTop((prev) => !prev)}
        >
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
        onClick={() => window.scrollTo(0, 0)}
        style={{ display: onTop ? "none" : "inline" }}
      >
        <i className="fas fa-angle-up"></i>
      </button>
    </div>
  );
}

export default App;
