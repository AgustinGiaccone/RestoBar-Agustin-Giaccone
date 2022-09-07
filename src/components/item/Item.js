import './item.css'

const Item = ({id, name, description, precio, imagen, cantidad  }) =>{
    return(
        <div className="tarjetas">
            <h3>{name}</h3>
            <img src={imagen} alt={name}/>
            <p>{description}</p>
            <p>{precio}</p>
            <button>ver detalles</button>
        </div>
    )
}

export default Item