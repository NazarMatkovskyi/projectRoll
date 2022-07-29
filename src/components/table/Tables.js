import React, { useEffect, useMemo, useState } from "react";
import { COLUMNS } from "../../const/TableInfo";
import "../styles/table.css";
import { TableConst } from "../../const/TableConst";
import DropTable from "./DropTable";

const Tables = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TableConst, []);
  const [checkbox, setCheckbox] = useState([]);
  const [columnsOrder, setColumnsOrder] = useState(false);
  const [headers, setHeaders] = useState(columns);
  const [rows, setRows] = useState(data);

  // console.log("columnsOrder", columnsOrder);
  // console.log("checkbox", checkbox);
  // console.log("columns", columns);
  // console.log("data", data);

  useEffect(() => {
    if (columnsOrder) {
      setHeaders(
        headers.map((item) => ({
          ...item,
          order: columnsOrder.find((el) => item.id === el.id).order,
        }))
      );
      setRows(
        rows.map((item) =>
          item.map((item2) => ({
            ...item2,
            order: columnsOrder.find((el) => item2.id === el.id).order,
          }))
        )
      );
    }
    // eslint-disable-next-line
  }, [columnsOrder]);
  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <table>
      <thead>
        <>
          <tr>
            {headers
              .filter((el) => !checkbox.includes(el.id))
              .sort(sortCard)
              .map((item, index) => (
                <th key={index}>{item.Header}</th>
              ))}
          </tr>
          <tr
            className='table_openDrop'
            onClick={() => {
              setOpenDrop(!openDrop);
            }}
          >
            Columns
          </tr>

          {openDrop && (
            <DropTable
              setColumnsOrder={(e) => setColumnsOrder(e)}
              openDrop={openDrop}
              setOpenDrop={setOpenDrop}
              setCheckbox={(e) => setCheckbox(e)}
            />
          )}
        </>
      </thead>
      <tbody>
        {rows.map((item) => (
          <tr>
            {item
              .filter((el) => !checkbox.includes(el.id))
              .sort(sortCard)
              .map((el, index) => (
                <td key={index}>{el.name}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;
