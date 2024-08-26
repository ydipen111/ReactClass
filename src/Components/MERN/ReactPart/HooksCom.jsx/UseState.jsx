import React, { useState } from 'react';
import { faker } from '@faker-js/faker';


const UseState = () => {
  const [data, setData] = useState([]);
  const addSome = () => {
    const obj = {

      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.urlLoremFlickr(),
    };
    setData((prev => [...prev, obj]));
  }
  const deleteUser = (i) => {
    data.splice(i, 1);
    setData((prev) => [...prev]);
  }


  return (
    <div className='space-y-4 '>
      <h1 className='bg-gray-700 px-2 py-2 rounded-sm'>If you want to generate a random names then click down</h1>
      <button onClick={addSome}>Click here</button>

      {
        data.map((person, i) => {
          return <div className=''> <div key={person.userId}>
            <img src={person.avatar} className='h-[100px] w-[100px] object-cover rounded-full' alt="" />
            <h1>{person.username}</h1>
            <h1>{person.email}</h1>
            <button onClick={() => deleteUser(i)} className='px-2 py-2 bg-slate-400 rounded-md'>Delete user</button>
          </div>
          </div>
        })


      }


    </div>
  );
}

export default UseState;
