import { ReactComponent as CheckIcon } from "./assets/checkicon.svg";
import { ReactComponent as EditIcon } from "./assets/gear.svg";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Item = ({
  title,
  description,
  date,
  showEdit,
  listIndex,
  handleComplete,
}) => {
  return (
    <>
      <div className='flex flex-col sm:flex-row my-4'>
        <div className='transition ease-in duration-300 w-full sm:px-8 sm:py-4 sm:my-4 px-4 py-4 my-0 rounded border bg-white drop-shadow-sm hover:drop-shadow-lg'>
          <h2 className='text-2xl font-semibold my-1'>{title}</h2>
          {description ? (
            <div className='my-2'>
              <span className='text-xs uppercase font-bold text-slate-300	'>
                Description
              </span>
              <p>{description}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <span className='sm:block flex justify-end py-2 sm:w-1/12 w-full mx-1 text-slate-400 '>
          <Tooltip place='right' className='text-slate-300' id='check' />
          <CheckIcon
            onClick={() => handleComplete(listIndex)}
            data-tooltip-id='check'
            data-tooltip-content='Complete!'
            className=' w-7 m-2 hover:text-green-500'
          />
          <EditIcon
            onClick={() => showEdit(listIndex)}
            className=' w-7 m-2 hover:text-sky-900'
            data-tooltip-content='Edit'
            data-tooltip-id='check'
          />
        </span>
      </div>
    </>
  );
};

export default Item;
