import data from '../mock-data/mock-data'
import { useState, useEffect } from "react"
import ItemList from "../itemlist/itemList";
import ItemCount from "../itemcount/ItemCount";


const ItemListContainer =  ({saludo, miNombre}) =>{

    const onAdd = (quantity) =>{
        console.log(`compraste ${quantity} unidades`);
    }

    const [items, setItem] = useState([]);

    const getData = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
                resolve(data)
            },2000)
    })

        useEffect(() =>{
            getData.then((result) =>{
                setItem(result)
                // console.log (result)
            })
        }, [])
    return(
        <div className="Container">
            <div>
                <h1>{saludo}</h1>
                <h2>{miNombre}</h2>
            </div>
            <div>
                <ItemCount inicial={0} stock={5} onAdd={onAdd}/>
            </div>
            <div>
                {
                    items.length > 0 ? (
                        <ItemList productos={items}/>
                    ) :  (
                        <div> Cargando.....</div>
                    )
                }
            </div>
        </div>
        )
}


export default ItemListContainer