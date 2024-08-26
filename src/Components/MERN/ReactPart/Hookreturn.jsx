import React from 'react';

const Hookreturn = ({ title, define, syntax, example }) => {
  return (
    <div className='bg-slate-200 w-full rounded-md px-3 py-3'>
      <h1 className='font-semibold'>{title}</h1>
      <p>{define}</p>
      <p className='bg-white rounded-sm px-4 '>
        {syntax} <br />
        {example}

      </p>


    </div>
  );
}

export default Hookreturn;
