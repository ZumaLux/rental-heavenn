import React from "react";
import "./SortBar.css";

const SortBar = ({ sortOptions, sortValue, setSortValue }) => {
  return (
    <div className="filter-bar">
      <select value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
        <option value="default" disabled>
          SORT BY...
        </option>
        {sortOptions &&
          sortOptions.map((opt, i) => (
            <optgroup key={i}>
              <option
                value={opt.toLocaleLowerCase() + " ascending"}
                onClick={(e) => e.target.value}
              >
                {opt} Ascending
              </option>
              <option value={opt.toLocaleLowerCase() + " descending"}>{opt} Descending</option>
            </optgroup>
          ))}
      </select>
    </div>
  );
};

export default SortBar;
