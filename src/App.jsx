import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Product from "./pages/Product";
import Profile from "./pages/Profile";

import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { useState } from "react";

function App() {

  const [onTop, setOnTop] = useState(true);

  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/producto/:id" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        </div>

        {/* <!-- Footer --> */}
        <footer className="sticky-footer bg-white" onClick={() => setOnTop(prev => !prev)} >
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2021</span>
            </div>
          </div>
        </footer>
        {/* <!-- End of Footer --> */}

      </div>

      {/* <!-- Scroll to Top Button--> */}
      <span className="scroll-to-top rounded cursor-pointer" onClick={() => window.scrollTo(0, 0)} style={{ display: onTop ? "none" : "inline" }} >
        <i className="fas fa-angle-up"></i>
      </span>
    </div>
  );
}

export default App;
