import React from 'react'
import Card from '../Components/Card'

function Home() {
  return (
    <div>


      <Card age={25} url={' https://lh5.googleusercontent.com/-m5B5SyBYOtA/AAAAAAAAAAI/AAAAAAAAAAA/__nMOh8X0_4/s900-c-k-no/photo.jpg'} title={'This is title'} lastName={'learnMore'} />
      <Card age={33} title={'This is title'} lastName={'learnMore'} />

      <Card />
      <Card />


    </div>
  )
}

export default Home
