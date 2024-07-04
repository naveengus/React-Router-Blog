import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Topbar() {
  const location = useLocation();
  const pagename = location.pathname.split("/").pop();
  return (
    <>
      <div className="topbar">
        <h1 className="guvi">GUVI</h1>
        <div className="topnav">
          <ul>
            <li>
              <NavLink to="" className={pagename === "" ? "activelink" : ""}>
                ALL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Full-Stack-Development"
                className={
                  pagename === "Full-Stack-Development" ? "activelink" : ""
                }
              >
                FULL STACK DEVELOPMENT
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Data-Science"}
                className={pagename === "Data-Science" ? "activelink" : ""}
              >
                DATA SCIENCE
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Cyber-Security"}
                className={pagename === "Cyber-Security" ? "activelink" : ""}
              >
                CYBER SECURITY
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Career"}
                className={pagename === "Career" ? "activelink" : ""}
              >
                CAREER
              </NavLink>
            </li>
          </ul>
        </div>
        <br></br>

        <hr></hr>
      </div>
    </>
  );
}

export default Topbar;
