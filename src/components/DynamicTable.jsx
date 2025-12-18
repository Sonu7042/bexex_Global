import "../Css/dynamicTable.css";

const DynamicTable = ({ config, data }) => {
  const { heading, columns, theme } = config;

  return (
    <div className={`table-container ${theme}`}>
      <h2 className="table-heading">{heading}</h2>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col) => (
                  <td key={col.key} data-label={col.label}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
