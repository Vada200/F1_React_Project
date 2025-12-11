import "./TeamContainer.css";

export default function  TeamContainer({image, name, onSelect}){
    return(
        <>
        <div className='container'>
        <img src={image} alt="teamname"/>
        <p>{name}</p>
      </div>
      </>
    );
}