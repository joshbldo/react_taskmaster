import React from "react";
import Item from "./Item";

const List = ({ list, showEdit, handleComplete }) => {
  return (
    <div className='my-12'>
      {list.map((item) => {
        return (
          <Item
            key={list.indexOf(item)}
            {...item}
            showEdit={showEdit}
            listIndex={list.indexOf(item)}
            handleComplete={handleComplete}
          />
        );
      })}
    </div>
  );
};

export default List;
