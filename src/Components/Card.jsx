import React from 'react'
import Button from './Button'

function Card({ title, age, url }) {
  return (
    <div className='w-[400px] space-y-5 px-4 py-4 shadow-2xl text-lg font-semibold'>
      <div>
        <img src={url} alt="" />
      </div>
      <div>
        <h1>age</h1>
        <p>
          {title}
        </p>
        <Button className />
        <Button className />
        <Button className />
      </div>

    </div>
  )

}

export default Card
