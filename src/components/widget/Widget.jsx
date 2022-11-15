import React from "react";
import "./Widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import GroupIcon from "@mui/icons-material/Group";

function Widget(props) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Users</span>
        <span className="counter">21312</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        <GroupIcon />
      </div>
    </div>
  );
}

export default Widget;
