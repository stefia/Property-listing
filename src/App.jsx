import { useState } from 'react'
import './App.css'
import PropertyCard from './components/PropertyCard.jsx'
import PropertyList from './components/PropertyList.jsx'
import Hero from './components/Hero.jsx'
import FilterBar from './components/FilterBar.jsx'

function App() {
  const [isSuperhost, setIsSuperhost] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(new Set());
  return (
    <>
    <div className="page">
      <Hero />
      <FilterBar setIsSuperhost={setIsSuperhost} isSuperhost={isSuperhost} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <PropertyList selectedCountry={selectedCountry} isSuperhost={isSuperhost} />
    </div>
    </>
  )
}

export default App
