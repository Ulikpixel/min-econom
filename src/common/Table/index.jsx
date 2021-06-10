import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import { STYLES } from "../../constains";
import { getStatus } from "../../utils";

const TableStyled = styled.table`
  font-family: ${STYLES.golos};
  width: 100%;
  border-collapse: collapse;
  border-radius: 15px;
  border-style: hidden;
  box-shadow: 0 0 0 2px ${STYLES.tableBorder};
  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }
  tr {
    border: solid 2px ${STYLES.tableBorder};
  }
  thead {
    th {
      border: 1px solid #ddd;
      padding: 5px 7px;
      font-size: 14px;
      font-weight: 600;
      border: solid 2px ${STYLES.tableBorder};
    }
  }
  tbody {
    td {
      cursor: pointer;
      border: 1px solid #ddd;
      padding: 23px 10px;
      font-size: 14px;
      font-weight: 200;
      border: solid 2px ${STYLES.tableBorder};
      &:nth-last-child(1) {
        text-align: center;
        font-weight: 700;
      }
    }
    tr:hover {
      background-color: rgb(228, 228, 228);
    }
  }
`;

const Table = ({ data, columns, className, onClick }) => {
  const instanceTable = useTable({ data, columns });
  
  const statusColor = (row, j) => {
    return row.cells.length - 1 === j ? getStatus(row.cells[row.cells.length - 1].value) : "" 
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    instanceTable;
  return (
    <TableStyled
      onClick={onClick}
      {...getTableProps()}
      className={"table " + className}
    >
      <thead>
        {headerGroups.map((group, i) => (
          <tr key={i} {...group.getHeaderGroupProps()}>
            {group.headers.map((column, i) => (
              <th key={i} {...column.getHeaderProps}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell, j) => (
                <td
                  data-id={data[i].id}
                  {...cell.getCellProps()}
                  style={{ color: statusColor(row, j) }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};

export default Table;
