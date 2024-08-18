import React from 'react';

const ReactCom = ({ title, define, example }) => {
  return (
    <div className='bg-slate-200 w-full rounded-md px-3 py-3'>
      <h1 className='font-semibold'>{title}</h1>
      <p>{define}</p>
      <p className='bg-white'>

      </p>

    </div>
  );
}

export default ReactCom;
