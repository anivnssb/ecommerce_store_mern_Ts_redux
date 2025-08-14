import { useTable, type Column, type TableOptions } from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string
) {
  return function HOC() {
    const options: TableOptions<T> = { columns, data };
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(options);
    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key, ...headRowProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...headRowProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...headProps } = column.getHeaderProps();
                    return (
                      <th key={key} {...headProps}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const { key, ...rowProps } = row.getRowProps();
              return (
                <tr key={key} {...rowProps}>
                  {row.cells.map((cell) => {
                    const { key, ...cellProps } = cell.getCellProps();
                    return (
                      <td key={key} {...cellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;
