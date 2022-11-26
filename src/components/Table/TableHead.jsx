import { useState } from "react";

import PropTypes from "prop-types";

export default function TableHead({ config, handleSorting }) {
  const [sortType, setSortType] = useState("asc");

  //change the sort type between ascending and descending
  const changeSortType = (col_name) => {
    handleSorting(col_name, sortType);
    const newSortType = sortType === "asc" ? "desc" : "asc";
    setSortType(newSortType);
  };

  return (
    <thead>
      <tr>
        {config.map(({ label, isSortable, col_name }) => (
          <th
            key={label}
            onClick={isSortable ? () => changeSortType(col_name) : null}
          >
            {label}
            {isSortable && (
              <img src="/assets/img/ArrowsDownUp.svg" className="sortIcon" />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHead.propTypes = {
  config: PropTypes.array.isRequired,
  handleSorting: PropTypes.func.isRequired,
};
