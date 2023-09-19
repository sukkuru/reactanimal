
import { click } from '@testing-library/user-event/dist/click'
import brid from './Images/bird.svg'
import cat from './Images/cat.svg'
import cow from './Images/cow.svg'
import dog from './Images/dog.svg'
import gator from './Images/gator.svg'
import heart from './Images/heart.svg'
import horse from './Images/horse.svg'
import { useState } from 'react'

const svgMap = {
    brid, cat, cow, dog, gator, horse
}


function AnimalShow({ type }) {
    const [click,setClick]=useState(0)
        const handleClick=()=>{
setClick(click+1)
        }   // console.log(type)
    return (
        <div className="animal-show"onClick={handleClick} >
            <img className="animal"alt='animals' src={svgMap[type]} />
            <img className="heart"alt='heart' src={heart} style={{ width: 10 + 10 * click + "px" }} />

        </div>
    )
}


export default AnimalShow;