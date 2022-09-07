import data from "./mock-data"
import { useState, useEffect } from "react"
import ItemList from "../itemlist/itemList";


const ItemListContainer =  ({saludo, miNombre}) =>{
    const [items, setItem] = useState([]);

    const getData = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
                resolve(data)
            },2000)
    })

        useEffect(() =>{
            getData.then((result) =>{
                setItem(result)
                console.log (result)
            })
        }, [])
    return(
        <div className="Container">
            <div>
                <h1>{saludo}</h1>
                <h2>{miNombre}</h2>
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