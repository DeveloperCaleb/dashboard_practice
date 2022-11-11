import React from "react";
import "./Sidebar.scss";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Iamadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color Picker</div>
    </div>
  );
}

export default Sidebar;
