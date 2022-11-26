import { useState } from "react";

import PropTypes from "prop-types";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./Table.css";

export default function Table({ data, config }) {
  const [tableData, setTableData] = useState(data);

  const handleSorting = (sortField, sortOrder) => {
    const sorted = tableData.sort((a, b) => {
      //if the object value is another object then compare that two object values
      if (typeof a[sortField] === "object" && sortField === "person") {
        return (
          a[sortField].name.localeCompare(b[sortField].name) *
          (sortOrder === "asc" ? 1 : -1)
        );
      }
      return (
        //compare one object value with another and return the -1/1 based on the sort order
        a[sortField].toString().localeCompare(b[sortField].toString(), {
          numeric: true,
        }) * (sortOrder === "asc" ? 1 : -1)
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
