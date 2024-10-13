import React from 'react'
import CardComponent from './cardComponent'
import swasthyaImage from '../assets/swasthya.jpg';
const CardDisplay = () => {
  return (
    <div>
      <CardComponent img={swasthyaImage}/>
    </div>
  )
}

export default CardDisplay
