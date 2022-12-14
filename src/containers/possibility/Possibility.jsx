import React from 'react'

import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />

      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Chatbots use AI to understand customer problems faster and provide more efficient answers
Intelligent assistants use AI to parse critical information from large free-text datasets to improve scheduling
Recommendation engines can provide automated recommendations for TV shows based on users’ viewing habits</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility