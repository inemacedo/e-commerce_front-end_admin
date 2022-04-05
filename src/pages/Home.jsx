import React, { useEffect, useState } from "react";

import ContentRow from "../components/ContentRow";
import Row2 from "../components/Row2";
import Row3 from "../components/Row3";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";

function Home() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link className="btn btn-primary" to="">
          <BsDownload />
          <span className="p-2">Generate Report</span>
        </Link>
      </div>

      {/* <!-- Content Row --> */}
      <ContentRow />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default Home;
