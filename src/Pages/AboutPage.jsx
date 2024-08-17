import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-[url('https://th.bing.com/th/id/OIP.nvuu8O7yYCtoLrSHW4ou2wHaEK?w=315&h=180&c=7&r=0&o=5&pid=1.7')] w-full bg h-screen grid grid-cols-2 py-4 px-4 object-cover bg-no-repeat bg-cover">
      < div className='text-white flex flex-col justify-between  col-span-1 md:col-span-2 py-8 px-8' >
        <div>
          <h2 className='text-xl px-3'>Tutorial TailwindCSS</h2>
          <h1 className='text-5xl  md:text-2xl font-bold p4-4'>How to create a Simple & Modern Profile Card using Tailwind CSS</h1>
        </div >
        <div>

          tailwindCSS
        </div>

      </div >
      <div className='col-span-1 md:col-span-2 flex flex-col justify-center mx-auto'>

        <div className=' bg-white px-16 h-[360px] w-[410px] rounded-sm items-end flex flex-col'>
          <div className='w-[360px] h-[50px]'>
            <img src="http://ts2.mm.bing.net/th?id=OIP.D6v0pyJvyEeym9wwF4yPdQHaEK&pid=15.1   object-cover bg-no-repeat bg-cover pt-10" alt="" />

          </div>

          <div></div>
        </div>
      </div>


    </div >
  );
}

export default AboutPage;
