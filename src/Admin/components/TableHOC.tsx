import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  useTable,
  useSortBy,
  usePagination,
  type Column,
  type TableOptions,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: { pageSize: 5 },
    };
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageCount,
      state: { pageIndex },
      gotoPage,
    } = useTable(options, useSortBy, usePagination);
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
                  {headerGroup.headers.map((column: any) => {
                    const { key, ...headProps } = column.getHeaderProps(
                      column.getSortByToggleProps()
                    );
                    return (
                      <th key={key} {...headProps}>
                        {column.render("Header")}
                        <span>
                          {" "}
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <AiOutlineSortDescending />
                            ) : (
                              <AiOutlineSortAscending />
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
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
        {showPagination ? (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>
              {pageIndex + 1}of {pageCount}
            </span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };
}

export default TableHOC;
