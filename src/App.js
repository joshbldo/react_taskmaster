import { Fragment, React, useState, useCallback } from "react";
import List from "./List";
import Modal from "./Modal";

import { ReactComponent as Plus } from "./assets/plus.svg";

function App() {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [addAction, setAddAction] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const handleAddOnSubmit = useCallback(
    (taskData) => {
      setList(list.concat(taskData));
      setShowModal(false);
    },
    [list]
  );

  const handleEditOnSubmit = (taskData) => {
    const tempData = list;
    tempData[editIndex] = taskData;
    setList(tempData);
    setShowModal(false);
  };

  const handleComplete = (taskIndex) => {
    const tempData = list.filter((_, index) => index !== taskIndex);
    setList(tempData);
  };

  const showAdd = () => {
    setAddAction(true);
    setShowModal(true);
  };

  const showEdit = (taskIndex) => {
    setEditIndex(taskIndex);
    setShowModal(true);
    setAddAction(false);
  };

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
      <main className='container mx-auto flex justify-center p-8'>
        <div className='lg:w-2/3 w-full'>
          <div className='text-center'>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white'>
              {" "}
              <mark className='px-2 text-white bg-blue-600 rounded bg-gradient-to-r from-cyan-500 to-blue-500'>
                Task
              </mark>{" "}
              Master{" "}
            </h1>
          </div>
          {list.length > 0 ? (
            <List
              list={list}
              showEdit={showEdit}
              handleComplete={handleComplete}
            />
          ) : (
            <div className='w-full text-center p-12'>
              <h2
                onClick={showAdd}
                className='text-slate-400 italic cursor-pointer'
              >
                Add a task...
              </h2>
            </div>
          )}
        </div>
      </main>
      <Modal
        onRequestClose={onClose}
        isVisible={showModal}
        actionType={addAction}
        handleAddOnSubmit={handleAddOnSubmit}
        handleEditOnSubmit={handleEditOnSubmit}
      />
      <button
        className={`transition ease-in duration-200 fixed p-4 bottom-6 text-white right-6 rounded-full drop-shadow-lg 
        ${
          showModal
            ? "bg-red-500"
            : "bg-gradient-to-r from-cyan-500 to-blue-500"
        }
        hover:-translate-y-2`}
      >
        {showModal ? (
          <Plus
            onClick={() => setShowModal(false)}
            className='transition ease-in duration-200 w-10 rotate-45'
          />
        ) : (
          <Plus
            onClick={showAdd}
            className='transition ease-in duration-200 w-10'
          />
        )}
      </button>
    </Fragment>
  );
}

export default App;
