import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  btnList = [
    {
      label: "",
      onClick: () => {},
      show: Boolean,
      icon: React.Component,
      color: "",
    },
  ],
}) => {
  return (
    <div className="sidebar">
      {btnList?.map(
        (btn) =>
          btn?.show && (
            <button className={btn?.color} key={btn?.label} onClick={btn?.onClick}>
              {btn?.label}
              {btn?.icon}
            </button>
          )
      )}
    </div>
  );
};

export default Sidebar;
