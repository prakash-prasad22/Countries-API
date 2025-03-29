import React , { useState } from 'react'
import SearchBar from "./SearchBar.jsx"
import SelectMenu from "./SelectMenu"
import CountriesContainer from "./CountriesContainer.jsx"
import { useTheme } from '../hooks/useTheme.js'

function Home() {

  const [query , setQuery] = useState("")
  const [isDark] = useTheme()
  
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
        <div className="search-filter-container">
            <SearchBar setQuery={setQuery} />
            <SelectMenu setQuery={setQuery} />
        </div>
        
        <CountriesContainer query={query}/>
    </main>
  )
}

export default Home