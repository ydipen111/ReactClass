import React, { useState } from 'react';
import ReactCom from './ReactCom';

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIson] = useState(false);



  const toggleLight = () => {
    setIson(!isOn);
  };
  const incre = () => {
    setCount((initValue) => initValue + 1);
  }

  const decre = () => {
    setCount((initiValue) => initiValue - 1);
  }




  return (
    <div className='px-7 grid grid-cols-2 place-items-center space-y-3 py-2 sm:place-items-start font-normal shadow-lg text-xl'>
      <div>
        <p>The light is {isOn ? 'on' : 'off'}</p>
        <button onClick={toggleLight}>
          {isOn ? 'Turn Off' : 'Turn On'}
        </button>
      </div>

      <h1 className='col-span-2 shadow-lg px-2 py-2 hover:translate-x-2 hover:duration-150 bg-slate-200 rounded-md'>
        Hooks - Hooks in React are special functions that let you use features like state and other React features in functional components. Before hooks were introduced, only class components could manage state and side effects, but hooks allow you to do this in functional components, making them more powerful and flexible.
      </h1>

      <div className='sm:col-span-2 hover:translate-x-2 hover:duration-150 bg-slate-200 rounded-md'>
        <ReactCom
          title={'useState'}
          define={`useState is a special tool in React called a "hook" that lets you add state to your components. State is like a memory for your components, allowing them to "remember" information between re-renders (when the component refreshes).`}
          example={` `}
        />
        <div className={`px-2 py-2 space-x-2 space-y-2 '}`}>
          <h1>count:{count}</h1>
          <button onClick={incre}>Adding</button>

          <button onClick={decre}>Subtactin</button>
        </div>
      </div>
      <div className='sm:col-span-2'></div>
      <div className='sm:col-span-2'>useState</div>
      <div className='sm:col-span-2'>useState</div>
    </div>
  );
};

export default Hooks;