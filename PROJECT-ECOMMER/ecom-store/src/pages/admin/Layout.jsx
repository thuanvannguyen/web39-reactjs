import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/admin/common/Header";
import SidebarMenuAdmin from "../../components/admin/common/SidebarMenu";
import FooterAdmin from "../../components/admin/common/Footer";

const Layout = () => {
  return (
    <>
      {/* TOP BAR */}
      <HeaderAdmin />
      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR MENU  */}
          <SidebarMenuAdmin />

          {/* MAIN CONTENT */}
          <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
            <Outlet/>

            <FooterAdmin />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
