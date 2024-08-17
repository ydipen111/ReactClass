import React from 'react';
import { PiLockKeyOpenFill } from "react-icons/pi";


const Contact = () => {
  return (
    <div className='px-4 py-4'>
      <div className='grid grid-cols-4 px-7 py-8 py-4 border-2 border-slate-300 shadow-md'>
        <div className='col-span-1  '><img className='w-[400px] h-[300px] object-cover' src="
      https://th.bing.com/th/id/OIP.1utXkN_gGKhf3Q58qn76FAHaEK?w=234&h=180&c=7&r=0&o=5&pid=1.7" alt="" /></div>
        <div className='col-span-3   border-2 shadow-2xl px-3 py-3'>

          <p className='flex gap-2 text-slate-500'><i className='mt-1'><  PiLockKeyOpenFill /> </i>Members Only</p>
          <h1 className='text-xl font-semibold py-1'>Can coffe make you a better developer</h1>
          <p className='text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugit asperiores tempora perferendis nemo, quod aliquid expedita ad dolor molestiae libero, beatae quo ab ea deleniti unde odit necessitatibus provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum esse, quia voluptas perspiciatis tempora numquam? Aspernatur cumque illo a temporibus mollitia quas ad unde ratione, laborum ducimus nemo rerum.</p>
          <article className='flex px-2 py-4 gap-2'>
            <div>
              <img className='w-[60px] h-[60px] rounded-full' src="https://th.bing.com/th?id=OIF.JVI38NsKf3sMjV%2ba7ei1Uw&w=162&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>
            <h1 className='text-lg font-medium'>John Cena <br />
              <p className='text-slate-400 text-sm'>
                August 18</p></h1> <br />

          </article>
        </div>
      </div>
    </div>
  );
}

export default Contact;
