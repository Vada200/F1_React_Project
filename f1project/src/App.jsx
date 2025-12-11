import { useState } from 'react'
import TeamContainer from './TeamContainer/TeamContainer.jsx' //Sajat component
import { TEAM_NAMES_LOGOS } from './data.js'  //tartalmazza  a neveket és logókat



function App() {


  return (
    <>
          <h1 className='main-title'>2025 F1 Constructors</h1>

          <TeamContainer image={TEAM_NAMES_LOGOS[0].image} name={TEAM_NAMES_LOGOS[0].name} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
    </>
  )
}

export default App
