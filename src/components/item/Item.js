import './item.css'

const Item = ({id, name, description, precio, imagen, cantidad  }) =>{
    return(
        <div className="tarjetas">
            <h3>{name}</h3>
            <img src={imagen} alt={name}/>
            {/* <p>{description}</p> */}
            <p>{precio}</p>
            <a href={id}><button>ver detalles</button></a>
        </div>
    )
}

export default Item