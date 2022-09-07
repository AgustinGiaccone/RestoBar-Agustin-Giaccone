const Item = ({id, name, description, precio, imagen, cantidad  }) =>{
    return(
        <div>
            <h3>{name}</h3>
            <img src={imagen} alt={name}/>
            <p>{description}</p>
            <p>{precio}</p>
        </div>
    )
}

export default Item