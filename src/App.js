import React from 'react'
import { useState } from 'react'
import AnimalShow from './Animal'
import './Animal.css'
import './App.css'

function getRandomAnimals() {
  const animals = ["brid", "horse", "cat", "dog", "gator", "cow"]
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() { 
  const [animal,setAnimals]=useState([])

  //const [count, setCount] = useState(0);
  const handleClick = () => {
    //animals.push(getRandomAnimals())
    setAnimals([...animal,getRandomAnimals()])
   // setCount(count + 1)
  }

  const renderedAnimals=animal.map((animals,index)=>{
    return <AnimalShow type={animals} key={index} />

  })

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      {/*<div>Number of animals:{count}</div>*/}
      <div className='animal-list'> {renderedAnimals}</div>
    </div>
  )
  }



export default App


