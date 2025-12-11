import { useState } from 'react'
import TeamContainer from './TeamContainer/TeamContainer.jsx' //Sajat component
import { TEAM_NAMES_LOGOS } from './data.js'  //tartalmazza  a neveket és logókat



function App() {


  return (
    <>
          <h1 className='main-title'>2025 F1 Constructors</h1>

      <div className='teams'>
          <TeamContainer image={TEAM_NAMES_LOGOS[0].image} name={TEAM_NAMES_LOGOS[0].name} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[1]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[2]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[3]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[4]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[5]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[6]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[7]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[8]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[9]} onSelect={() => console.log("Kiválasztott csapat:", TEAM_NAMES_LOGOS[0].name)}/>
      </div>



    </>
  )
}

export default App
