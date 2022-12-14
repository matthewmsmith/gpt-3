import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [ 
  {
    title: 'Educational Programs',
    text: 'Learn about our company through internships and volunteer programs. '
  },
  {
    title: 'Become aResearcher or Engineer at GPT-3 ',
    text: 'We host career fairs on the 15th of every month. '
  },
 
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>Step Into the Future Today.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>

    </div>
  )
}

export default Features