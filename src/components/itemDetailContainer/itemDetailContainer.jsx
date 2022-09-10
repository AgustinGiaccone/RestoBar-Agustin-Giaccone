import ItemDetail from '../itemDetail/itemDetail'
import data from '../mock-data/mock-data'
import {useState, useEffect} from 'react'



const ItemDetailContainer =() =>{

    const [items, setItem] = useState([]);

    const getData = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
                resolve(data)
            },3000)
    })

        useEffect(() =>{
            getData.then((result) =>{
                setItem(result)
                console.log (result)
            })
        }, [])
    return (
        <div>
            <ItemDetail productos={items}/>
        </div>
    )
}

export default ItemDetailContainer;