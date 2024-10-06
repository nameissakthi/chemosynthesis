import React from 'react'
import './Definition.css'
import assets from '../../assets/assets'

const Definition = () => {
  return (
    <div className='definition'>
        <h1>Definition</h1>
        <div className='paragraph'>
            Chemosynthesis is a process used by some organisms to produce food without sunlight. Instead of using sunlight like plants do in photosynthesis, these organisms get energy by breaking down chemicals, often from substances like hydrogen sulfide or methane. This usually happens in environments where sunlight can't reach, like deep-sea vents, where bacteria and other microorganisms use chemosynthesis to survive and support ecosystems.
        </div>
        <div className='image'>
            <img src={assets.chemosynthesis} alt="chemosynthesis" />
            <p> Giant tube worms and bivalves from hydrothermal vents at the East Pacific Rise at 2500 m depth. Each individual in the photo exceeds one meter in length. </p>
        </div>
    </div>
  )
}

export default Definition