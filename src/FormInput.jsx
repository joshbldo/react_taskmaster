import React, { Fragment } from "react";

const FormInput = ({ label, type, rows }) => {
  return (
    <Fragment>
      <label className='block font-bold'>{label}</label>
      <input
        type={type}
        rows={rows}
        className='w-full border rounded border-slate-200 placeholder-slate-400 p-4'
      ></input>
    </Fragment>
  );
};

export default FormInput;
