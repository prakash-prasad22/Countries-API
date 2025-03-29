import React, { useEffect, useState } from 'react'
import CountryCard from "./CountriesCard"
import CountriesListShimmer from './CountriesListShimmer';

function CountriesContainer({query}) {

  const [countriesData,setCountriesData] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{
    setCountriesData(data)
  })
  },[])
  

  let filteredData = countriesData.filter((country)=>
    country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
  )

  return (
    <>
    {!countriesData.length ? <CountriesListShimmer/> : <div className="countries-container">
      {filteredData.map((country) => {
        return (
          <CountryCard 
            key={country.name.common}
            name={country.name.common} 
            flag={country.flags.svg}
            population={country.population.toLocaleString('en-IN')}
            region={country.region}
            capital={country.capital?.[0]}
            country={country}
          />
        )
      })}
    </div>}
    </>
  )
}

export default CountriesContainer