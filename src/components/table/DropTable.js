import React, { useEffect, useState } from "react";
import "../styles/table.css";
import close from "../../assets/close.png";
import drag from "../../assets/drag.png";
import checkbox from "../../assets/Checkbox.png";
import { COLUMNS } from "../../const/TableInfo";

const DropTable = ({ openDrop, setOpenDrop, setCheckbox, setColumnsOrder }) => {
  const [answers, setAnswers] = useState([]);
  const [answersAll, setAnswersAll] = useState(false);
  const [allColumns, setAllColumns] = useState(COLUMNS);
  const [current, setCurrent] = useState(null);

  console.log("allColumns", allColumns);

  const allAnswersKeys = [
    "ad",
    "campaign",
    "total_users",
    "new_users",
    "returning_user",
    "bounce_rate",
    "pages",
    "impressions",
  ];

  useEffect(() => {
    if (answersAll) {
      setAnswers(allAnswersKeys);
      setCheckbox(allAnswersKeys);
    } else {
      setAnswers([]);
      setCheckbox([]);
    }
    // eslint-disable-next-line
  }, [answersAll]);

  console.log("columns", COLUMNS);

  const dragStartHandler = (e, item) => {
    console.log("item", item);
    setCurrent(item);
  };
  const dragEndHandler = (e) => {
    e.target.style.background = "white";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "#F2FCFC";
  };
  const dragHandler = (e, item) => {
    e.preventDefault();
    let data = allColumns.map((el) => {
      if (el.id === item.id) {
        return { ...el, order: current.order };
      }
      if (el.id === current.id) {
        return { ...el, order: item.order };
      }
      return el;
    });
    setAllColumns(data);
    e.target.style.background = "white";
    setColumnsOrder(data);
  };

  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className='dropTable'>
      <div className='dropTable_title'>
        <span>Columns</span>
        <img
          src={close}
          alt='close'
          onClick={() => {
            setOpenDrop(!openDrop);
          }}
        />
      </div>
      <span className='dropTable_search'>Select columns to display</span>
      <div className='dropTable_info_last'>
        <div className='dropTable_info_inner'>
          <div
            className='dropTable_info_inner-active'
            onClick={() => {
              setAnswersAll(!answersAll);
            }}
          >
            {answersAll ? (
              <img
                alt='checkbox'
                src={checkbox}
                className='dropTable_info_checked'
              />
            ) : (
              <div className={"dropTable_info_checkOne"}></div>
            )}
          </div>
        </div>
        <div className='dropTable_nameOne'>Select all</div>
      </div>
      <div>
        <div>
          {allColumns.sort(sortCard).map((item, index) => (
            <div
              className='dropTable_info_last'
              key={index}
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, item)}
              onDragLeave={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dragHandler(e, item)}
            >
              <img src={drag} alt='drag' className='dropTable_drag' />
              <div className='dropTable_info_inner'>
                <div
                  className='dropTable_info_inner-active'
                  onClick={() => {
                    let data = [];
                    // if(item.id === 'all')
                    if (answers.includes(item.id)) {
                      data = answers.filter((el) => el !== item.id);
                    } else {
                      data = [...answers, item.id];
                    }
                    setAnswers(data);
                    setCheckbox(data);
                  }}
                >
                  {answers.includes(item.id) ? (
                    <img
                      alt='checkbox'
                      src={checkbox}
                      className='dropTable_info_checked'
                    />
                  ) : (
                    <div
                      className={
                        item.id === "all"
                          ? "dropTable_info_checkOne"
                          : "dropTable_info_check"
                      }
                    ></div>
                  )}
                </div>
              </div>
              <div
                className={
                  item.id === "all" ? "dropTable_nameOne" : "dropTable_name"
                }
              >
                {item.Header}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropTable;
