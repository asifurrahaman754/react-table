import PropTypes from "prop-types";

export default function TableBody({ tableData, config }) {
  //find the property from the object with the column-string value
  const findPropertyWithStr = (str, obj) => {
    for (const key in obj) {
      if (key === str) {
        return key;
      }
    }
  };

  return (
    <tbody>
      {tableData.map((row, i) => (
        <tr key={i}>
          {config.map(({ col_name }) => {
            const matchedObjectKey = findPropertyWithStr(col_name, row);
            if (
              typeof row[matchedObjectKey] === "object" &&
              matchedObjectKey === "person"
            ) {
              const { name, avatar } = row[matchedObjectKey];
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
                className={matchedObjectKey === "email" ? "data-email" : null}
              >
                {row[matchedObjectKey]}
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
