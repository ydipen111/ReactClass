import React from 'react';

const Display = () => {
  return (
    <div className='grid grid-cols-3 items-center px-4 py-3'>
      <div className='col-span-2 sm:col-span-3'>
        <dotlottie-player src="https://lottie.host/b27fcd0b-f126-43f5-8637-7aeda07f6958/tOOmdjCsQj.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>
      <div className='col-span-1 md:col-span-3 bg-cs text-xl space-y-1 px-3 md:text-lg'>
        <h1 className='text-3xl font-bold'>Hi, I am john.</h1>
        <p className='text-pink-700 italic underline decoration-red-800 underline-offset-4'>I am full stack web developer</p>
        <p className='text-cs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nihil velit culpa corporis consectetur vel temporibus ipsa fugiat quidem possimus omnis, hic aspernatur ut dignissimos quam, molestias placeat ducimus obcaecati.</p>
      </div>


    </div>
    // <div className='grid grid-cols-3'
    // >
    //   <div className='bg-zinc-600 col-span-1'>hie</div>
    //   <div className='bg-zinc-600 col-span-1'>da</div>
    //   <div className='bg-zinc-600 col-span-1'>adsf</div>
    // </div>
  );
}

export default Display;
