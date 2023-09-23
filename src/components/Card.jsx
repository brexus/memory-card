import '../styles/Card.css';

// eslint-disable-next-line react/prop-types
export default function Card({imgURL, title}) {
    
    return (
        <div 
            className="card"
            
        >
            <img src={imgURL} alt="" className="card-img"/>
            <h1 className="card-title">{title}</h1>
        </div>
    );
}
