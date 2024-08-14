import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SidebarMenuAdmin = () => {

  const redirect = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    redirect("/login");
  }
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-3 d-md-block sidebar"
    >
      <div className="position-sticky py-4 px-3 sidebar-sticky">
        <ul className="nav flex-column h-100">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/dashboad"
            >
              <i className="bi-house-fill me-2" />
              Tổng quan
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboad">
              <i className="bi-house-fill me-2" />
              Sản phẩm
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboad">
              <i className="bi-house-fill me-2" />
              Cài đặt
            </Link>
          </li>
          <li className="nav-item border-top mt-auto pt-2">
            <div className="nav-link" onClick={handleLogout}>
              <i className="bi-box-arrow-left me-2" />
              Logout
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenuAdmin;
