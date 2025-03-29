import React from 'react'
import './countryDetailShimmer.css'

function CountryDetailsShimmer() {
  return (
    <main>
        <div className="country-details-container">
            <div className="country-details">
                <div className='country-image-shimmer'></div>
                <div className="details-text-container">
                    <div className='country-name-shimmer'></div>
                    <div className="details-text">
                        {Array.from({length:9}).map((el,id)=>{
                            return <div key={id} className='details-text-shimmer'></div>
                        })}
                    </div> 
                </div>
            </div>
        </div>
    </main>
  )
}

export default CountryDetailsShimmer