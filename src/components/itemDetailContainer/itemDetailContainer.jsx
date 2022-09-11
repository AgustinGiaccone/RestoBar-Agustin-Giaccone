import ItemDetail from '../itemdetail/itemDetail'
import data from '../mock-data/mock-data'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

const ItemDetailContainer =() =>{

    const {productId} = useParams();
    console.log(productId)

    const [items, setItem] = useState([]);

    const getData = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
                resolve(data)
            },100)
    })


        useEffect(() =>{
            getData.then((result) =>{
                setItem(result)
                console.log (result)
            })
        }, [])
    return (
        <div className="ItemDetail">
            <ItemDetail productos={items} buttonId={productId} />
        </div>
    )
}

export default ItemDetailContainer;