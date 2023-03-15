import React from "react";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

const Modal = ({
  isVisible,
  actionType,
  handleAddOnSubmit,
  handleEditOnSubmit,
}) => {
  if (!isVisible) return null;
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] flex flex-col m-2'>
          <button className='place-self-end'></button>
          <div className='bg-white rounded-lg'>
            {actionType ? (
              <AddForm handleAddOnSubmit={handleAddOnSubmit} />
            ) : (
              <EditForm handleEditOnSubmit={handleEditOnSubmit} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
