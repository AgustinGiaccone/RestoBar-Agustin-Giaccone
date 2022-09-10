import './item.css'
import {Link} from 'react-router-dom'

const Item = ({id, name, description, precio, imagen, cantidad  }) =>{
    return(
        <div className="tarjetas">
            <h3>{name}</h3>
            <img src={imagen} alt={name}/>
            {/* <p>{description}</p> */}
            <p>{precio}</p>
            <Link to={`/item/${id}`}>
            <button>ver detalles</button>
            </Link>
        </div>
    )
}

export default Item