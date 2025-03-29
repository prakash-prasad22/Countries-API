import React, { useContext, useEffect, useState } from 'react'
import '../country.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import CountryDetailsShimmer from './CountryDetailsShimmer'
import { useTheme } from '../hooks/useTheme'



function CountryDetail() {

  const params = useParams()
  const { state } = useLocation()
  const [isDark] = useTheme()

  const countryName = params.country

  const [countryData , setCountryData] = useState(null)
  const [notFound , setNotFound ] = useState(false)

  function updateCountryData(data){
    setCountryData({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      languages: Object.values(data.languages || {}).join(', '),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(', '),
      borders: [],
    })

    if(!data.borders){
      data.borders = []
    }
    Promise.all(data.borders.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=>res.json())
      .then(([borderCountry]) => borderCountry.name.common)
    })).then((borders) => {
      setCountryData((prevState) => ({...prevState,borders}))
    })
  }

  useEffect(()=>{

    if(state){
      updateCountryData(state)
      return
    }


    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res)=>res.json())
    .then(([data]) => { 
      updateCountryData(data)
    })
    .catch((err)=>{
      setNotFound(true)
    })
    
  },[countryName])

  if(notFound) {
    return <h1 style={{textAlign:'center'}}>Country Not Found</h1>
  }

  return(
    countryData === null ? (
      <div>
        <h1 style={{textAlign:'center'}}>loading...</h1>
        <CountryDetailsShimmer/>
      </div>
    ) : (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={()=>history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={countryData.name}/>
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name: </b><span className="native-name">{countryData.nativeName}</span></p>
              <p><b>Population: </b><span className="population">{countryData.population}</span></p>
              <p><b>Region: </b><span className="region">{countryData.region}</span></p>
              <p><b>Sub Region: </b><span className="sub-region">{countryData.subregion}</span></p>
              <p><b>Capital: </b><span className="capital">{countryData.capital}</span></p>
              <p>
                <b>Top Level Domain: </b><span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
              <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
            </div>
            {countryData.borders.length !== 0 && <div className="border-countries"><b>Border Countries: </b>&nbsp;
              {countryData.borders.map((border)=>
                <Link to={`/${border}`} key={border}>{border}</Link>
              )}
            </div>}
            
          </div>
        </div>
      </div>
    </main>
    )
  )
}

export default CountryDetail