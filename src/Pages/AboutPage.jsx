import React from 'react';
import { VscVerifiedFilled } from "react-icons/vsc";
import { SiTailwindcss } from "react-icons/si";
const AboutPage = () => {
  return (
    <div className="bg-[url('https://th.bing.com/th/id/OIP.nvuu8O7yYCtoLrSHW4ou2wHaEK?w=315&h=180&c=7&r=0&o=5&pid=1.7')] w-full bg h-screen grid grid-cols-2 py-4 px-4 object-cover bg-no-repeat bg-cover">
      < div className='text-white flex flex-col justify-between  col-span-1 md:col-span-2 py-8 px-8' >
        <div>
          <h2 className='text-xl px-3'>Tutorial TailwindCSS</h2>
          <h1 className='text-5xl  md:text-2xl font-bold p4-4'>How to create a Simple & Modern Profile Card using Tailwind CSS</h1>
        </div >
        <div className='flex text-lg gap-2'>

          <p className='py-1 text-xl'> <SiTailwindcss /> </p>tailwindCSS
        </div>

      </div >
      <div className='col-span-1 md:col-span-2 flex flex-col justify-center mx-auto'>

        <div className=' bg-white h-[330px] w-[410px] rounded-md  py-4 '>
          <div className="bg-[url('http://ts2.mm.bing.net/th?id=OIP.D6v0pyJvyEeym9wwF4yPdQHaEK&pid=15.1')]  object-cover bg-no-repeat bg-cover h-[90px] mx-auto w-[360px] rounded-lg flex flex-row justify-center">
            <div className='flex flex-col  absolute mt-[50px]  '>
              <div>
                <img src="https://th.bing.com/th?id=OIP.Fp7sFol83az5vls4n9eWtwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className='w-[70px] h-[70px] rounded-full object-cover ring-4 ring-gray-200' alt="" /></div>
            </div>

            <div>
            </div>
          </div>
          <div className='flex flex-col items-center pt-11  '>
            <h1 className='text-xl font-bold text-sky-950 flex '>Adelana Parkson <p className='pt-1  pl-1 text-sky-500'><VscVerifiedFilled /></p></h1>
            <p className='font-semibold text-slate-500'>Product Designer</p>
            <div className='flex flex-row justify-between space-x-20 py-10 text-xl font-bold text-sky-950'>
              <h1>17   <p className='text-sm text-slate-500 font-normal'>Posts</p> </h1>  <br />
              <h1>9.7K <p className='text-sm text-slate-500 font-normal'>Followers</p></h1> <br />
              <h1> 274 <p className='text-sm text-slate-500 font-normal'>Following</p></h1> <br />

            </div>
          </div>



        </div>

      </div>


    </div >
  );
}

export default AboutPage;
