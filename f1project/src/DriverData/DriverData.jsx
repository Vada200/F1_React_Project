import './DriverData.css'

export default function DriverData({name, image, car_number, entries, carrer_points, podiums, wins, fact}){
    return(
        <>
              <div className='name-card'>
                <img src={image} alt="driver"/>
                <span>Name: {name} <br /> 
                Car Number: {car_number} <br />
                Entries: {entries} <br /> 
                Podiums: {podiums} <br /> 
                Wins: {wins} <br /> 
                Carrer points: {carrer_points} <br /> 
                Fact: {fact}
                <br /> 
                </span>
              </div>
        </>
    );
}