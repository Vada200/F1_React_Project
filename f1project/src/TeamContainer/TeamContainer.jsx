import "./TeamContainer.css";

export default function  TeamContainer({image, name, onSelect}){
    return(
        <>
        <div className='container' onClick={onSelect}>
        <img src={image} alt="teamname"/>
        <p>{name}</p>
      </div>
      </>
    );
}