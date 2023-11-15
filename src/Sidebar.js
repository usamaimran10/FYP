import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Sidebar = () => {
  const gotoCart = () => {
    window.location.href = "/cart";
  };
  return (
    <Router>
      <div
        style={{
          marginLeft: "-30px",
          height: "100%",
          overflow: "scroll initial",
        }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#393E46">
          <CDBSidebarHeader>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              E-Construct
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem style={{ fontSize: "2rem" }}>
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem
                  style={{ fontSize: "2rem" }}
                  onClick={gotoCart}
                >
                  Cart
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem style={{ fontSize: "2rem" }}>
                  Order
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem style={{ fontSize: "2rem" }}>
                  Messages
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem style={{ fontSize: "2rem" }}>
                  Support
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}></CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </Router>
  );
};

export default Sidebar;
