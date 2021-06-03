import React, { useEffect } from 'react';
import { useState } from 'react';
import FakeData from '../../FakeData/Data.json'

const Transport = () => {
  const [transport, setTransport] =useState(FakeData)
   const [salary, setSalary] = useEffect([])

  console.log(FakeData)

  return (
    <div>
      
    </div>
  );
};

export default Transport;