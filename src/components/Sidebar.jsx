import React from "react";
import "./Sidebar.css";

const Sidebar = ({ btnList }) => {
  return (
    <div className="sidebar">
      {btnList.map((btn) => (
        <button className={btn.color} key={btn.label} onClick={btn.onClick}>
          {btn.label}
          {btn.icon}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
