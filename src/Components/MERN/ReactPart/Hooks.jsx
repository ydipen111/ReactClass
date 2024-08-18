import React, { useState } from 'react';
import ReactCom from './ReactCom';



const Hooks = () => {
  const [count, setCount] = useState(0);
  const [bgRed, setBgred] = useState(false)
  const adding = () => {
    setCount(count + 1);
    setBgred(true);
  };
  const subtract = () => {
    setCount(count - 1);
    setBgred(true);
  }
  return (
    <div className='px-7 grid grid-cols-2 place-items-center space-y-3 py-2 sm:place-items-start font-normal shadow-lg text-xl'>
      <h1 className='col-span-2  shadow-lg px-2 py-2 hover:translate-x-2 hover:duration-150 bg-slate-200 rounded-md'>Hooks - Hooks in React are special functions that let you use features like state and other React features in functional components. Before hooks were introduced, only class components could manage state and side effects, but hooks allow you to do this in functional components, making them more powerful and flexible.</h1>
      <div className='sm:col-span-2 hover:translate-x-2 hover:duration-150 bg-slate-200 rounded-md'>
        <ReactCom
          title={'useState'}
          define={` useState is a special tool in React called a "hook" that lets you add state to your components. State is like a memory for your components, allowing them to "remember" information between re-renders (when the component refreshes).`}
          example={` `}
        />
        <div className={`px-2 py-2 space-x-2 space-y-2 ${bgRed ? 'bg-red-500' : 'bg-slate-50'}`}>
          <h1 className={`${!bgRed ? 'text-red-500' : ''}`}>Count: {count}</h1>
          <button className='px-2 py-2 bg-slate-400 rounded-md' onClick={adding}>Adding</button>
          <button className='px-2 py-2 bg-slate-400 rounded-md' onClick={subtract}>Subtract</button>
        </div>



      </div>
      <div className='sm:col-span-2'></div>
      <div className='sm:col-span-2'>useState</div>
      <div className='sm:col-span-2'>useState</div>



    </div>
  );
}

export default Hooks;
