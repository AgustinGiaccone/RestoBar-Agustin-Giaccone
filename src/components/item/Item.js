import './item.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import React from 'react';

const Item = ({id, name, description, precio, imagen, cantidad  }) =>{
    return(
        <Card style={{ width: '18rem',margin:'2%'}}>
            <Link to={`/item/${id}`}  className="link-item">
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                ${precio}
                </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default Item