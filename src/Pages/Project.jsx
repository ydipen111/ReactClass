
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListCard from './../Components/Form'

const Project = () => {
  const [c, setC] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setC(response.data);

    } catch (error) {

    }
  }



  useEffect(() => {
    getData();
    console.log('Helo world');

  }, []);

  console.log('sello');



  return (
    <div>
      {c && <h1>helllo world</h1>}
      {c && <ListCard categories={c.categories} />}


    </div>
  );
}

export default Project;