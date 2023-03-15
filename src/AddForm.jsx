import { useState } from "react";

const AddForm = ({ handleAddOnSubmit }) => {
  const [newTaskData, setTaskData] = useState({
    title: "",
    description: "",
  });
  const handleTitleOnChange = (e) => {
    const newData = e.target.value;
    setTaskData({ ...newTaskData, title: newData });
  };

  const handleDescOnChange = (e) => {
    const newData = e.target.value;
    setTaskData({ ...newTaskData, description: newData });
  };
  const submitData = (e) => {
    e.preventDefault();
    if (newTaskData.title !== "") {
      handleAddOnSubmit(newTaskData);
    } else alert("Please enter a value");
  };
  return (
    <div>
      <h2 className='text-xl font-bold p-6 border-b bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-lg'>
        Add New Task
      </h2>
      <form className='p-6' onSubmit={submitData}>
        <label className='block font-bold'>
          Add Task Title
          <span className='text-slate-400 font-light'>(Required)</span>
        </label>
        <input
          onChange={handleTitleOnChange}
          value={newTaskData.title}
          type='text'
          className='w-full border rounded border-slate-200 placeholder-slate-400 p-4 mb-8'
        ></input>
        <label className='block font-bold'>Task Description</label>
        <textarea
          onChange={handleDescOnChange}
          value={newTaskData.description}
          type='text'
          className='w-full border rounded border-slate-200 placeholder-slate-400 p-4'
        ></textarea>
        <button className='w-full font-bold my-4 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded '>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
