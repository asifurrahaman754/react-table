import PropTypes from "prop-types";

export default function TableBody({ tableData, config }) {
  return (
    <tbody>
      {tableData.map((row, i) => (
        <tr key={i}>
          {config.map(({ col_name }) => {
            const columnValue = row[col_name];
            if (typeof columnValue === "object" && col_name === "person") {
              const { name, avatar } = columnValue;
              return (
                <td key={col_name}>
                  <img className="avatar" src={`/assets/img/${avatar}`} />
                  {name}
                </td>
              );
            }

            return (
              <td
                key={col_name}
                className={col_name === "email" ? "data-email" : null}
              >
                {columnValue}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  tableData: PropTypes.array.isRequired,
  config: PropTypes.array.isRequired,
};
