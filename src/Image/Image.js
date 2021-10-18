import './Image.css';

function Image(props) {
    return (
        <div className="image">
            <div className="image__container">
            
             {(props.image === "") ? <p className="image__message">{props.message}</p> : <img className="image__cat" src={props.image}/>}
             </div>
        </div>
    );
}

export default Image