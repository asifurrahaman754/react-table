import { useState } from "react";

import PropTypes from "prop-types";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./Table.css";

export default function Table({ data, config }) {
  const [tableData, setTableData] = useState(data);

  const handleSorting = (sortColumn, sortOrder) => {
    const sorted = tableData.sort((a, b) => {
      const sortOrderValue = sortOrder === "asc" ? 1 : -1;

      //if the object value is another object then go inside that object and compare object values
      if (typeof a[sortColumn] === "object" && sortColumn === "person") {
        return (
          a[sortColumn].name.localeCompare(b[sortColumn].name) * sortOrderValue
        );
      }
      return (
        //compare one object value with another and return the -1/1 based on the sort order
        a[sortColumn].toString().localeCompare(b[sortColumn].toString(), {
          numeric: true,
        }) * sortOrderValue
      );
    });

    const newSortedData = [...sorted];
    setTableData(newSortedData);
  };

  return (
    <div className="table_container">
      <table className="table">
        <TableHead {...{ config, handleSorting }} />
        <TableBody {...{ tableData, config }} />
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  config: PropTypes.array.isRequired,
};
