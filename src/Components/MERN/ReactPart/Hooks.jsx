import React, { useState } from 'react';
import Hookreturn from './Hookreturn';
import UseState from './HooksCom.jsx/UseState';

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
    <div className='px-7 grid grid-cols-2 place-items-center space-y-3 py-2 sm:place-items-start font-normal shadow-lg text-xl gap-3'>
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
        <Hookreturn
          title={'useState'}
          define={`const [data, Setdata]= usestate();           useState is a special tool in React called a "hook" that lets you add state to your components. State is like a memory for your components, allowing them to "remember" information between re-renders (when the component refreshes).`}
          example={` `}
        />
        <div className={`px-2 py-2 space-x-2 space-y-2 '}`}>
          <h1>count:{count}</h1>
          <button onClick={incre}>Adding</button>

          <button onClick={decre}>Subtactin</button>
          <UseState />
        </div>
      </div>

      <div className='sm:col-span-2'>
        <Hookreturn
          title={'What is an Async Funtion ?'}
          define={'An async function in JavaScript is a special kind of function that allows you to write asynchronous code in a way that looks like regular, synchronous code. This makes your code easier to read and manage, especially when dealing with tasks that take time to complete, like fetching data from a server.'
          }
          syntax={
            <pre>
              {`async function functionName(parameters) {
  // Function body
  // You can use await here
}`}
            </pre>
          }


        />


      </div>

      <div className='sm:col-span-2 bg-red-600'>useState<Hookreturn title={''} />

      </div>
      <div className='sm:col-span-2 bg-red-500'>useState</div>


    </div >
  );
};

export default Hooks;