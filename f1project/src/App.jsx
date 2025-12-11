import { useState } from 'react'
import TeamContainer from './TeamContainer/TeamContainer.jsx' //Sajat component
import { TEAM_NAMES_LOGOS } from './data.js'  //tartalmazza  a neveket és logókat
import {DRIVERS_DATA} from './drivers.js'
import DriverData from './DriverData/DriverData.jsx'


function App() {

  const [selectedTeam, setSelectedTeam] = useState();

  function handleSelect(clickedTeam) {
    setSelectedTeam(clickedTeam)
  }

    let sample_text = <h2 className='temp'>  Adatok:  </h2>;

    if (selectedTeam) {

    sample_text = <div>
    <DriverData {...DRIVERS_DATA[selectedTeam][0]}/>
    <DriverData {...DRIVERS_DATA[selectedTeam][1]}/>
    </div>
    }


  return (
    <>
          <h1 className='main-title'>2025 F1 Constructors</h1>

      <div className='teams'>
          <TeamContainer image={TEAM_NAMES_LOGOS[0].image} name={TEAM_NAMES_LOGOS[0].name} onSelect={() => handleSelect("redbull")}/> {/*props */}
          <TeamContainer {...TEAM_NAMES_LOGOS[1]} onSelect={() => handleSelect("ferrari")}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[2]} onSelect={() => handleSelect("mercedes")}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[3]} onSelect={() => handleSelect("mclaren")}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[4]} onSelect={() => handleSelect("aston")}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[5]} onSelect={() => handleSelect("visa")}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[6]} onSelect={() => handleSelect("williams")}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[7]} onSelect={() => handleSelect("haas")}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[8]} onSelect={() => handleSelect("sauber")}/>
          <TeamContainer {...TEAM_NAMES_LOGOS[9]} onSelect={() => handleSelect("alpine")}/>
      </div>

      <div>
        {/* <DriverData name={DRIVERS_DATA[0].name} image={DRIVERS_DATA[0].image} car_number={DRIVERS_DATA[0].car_number} entries={DRIVERS_DATA[0].entries} 
        carrer_points={DRIVERS_DATA[0].carrer_points} podiums={DRIVERS_DATA[0].podiums} wins={DRIVERS_DATA[0].wins} fact={DRIVERS_DATA[0].fact}/> */}
        {/* <DriverData {...DRIVERS_DATA["redbull"][0]}/>
        <DriverData {...DRIVERS_DATA["redbull"][1]}/>
        <DriverData {...DRIVERS_DATA["ferrari"][0]}/>
        <DriverData {...DRIVERS_DATA["ferrari"][1]}/> */}
        {sample_text}
      </div>


    </>
  )
}

export default App
