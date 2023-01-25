import React from 'react'
import "./WhyCards.css"
import { whyData } from './WhyData'

const WhyCards = () => {
  return (
    <div className='AllCardsContainer'>
      {whyData.map((reason) => {
        return (
            <div key={reason.id} className='WhyCard'>
                <h6 className='WhyHeader'>{reason.reason}</h6>
                <p className='WhyDescription'>{reason.description}</p>
            </div>
        )
      })}
    </div>
  )
}

export default WhyCards
