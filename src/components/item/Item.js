// import './item.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Buttonn from "../../button/butoon"
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const Item = ({id, name, description, precio, imagen, cantidad  }) =>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            ${precio}
            </Card.Text>
            <Link to={`/item/${id}`}>
                <Buttonn/>
            </Link>
            </Card.Body>
        </Card>




        // <div className="tarjetas">
        //     <h3>{name}</h3>
        //     <img src={imagen} alt={name}/>
        //     <p>${precio}</p>
        //     <Link to={`/item/${id}`}>
        //         <Buttonn/>
        //     </Link>
        // </div>
    )
}

export default Item