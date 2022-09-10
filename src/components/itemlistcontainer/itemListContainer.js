import data from '../mock-data/mock-data'
import { useState, useEffect } from "react"
import ItemList from "../itemlist/itemList";
import ItemCount from "../itemcount/ItemCount";
import {useParams} from 'react-router-dom';

const ItemListContainer =  ({saludo, miNombre}) =>{
    const{categoryId}= useParams();
    const onAdd = (quantity) =>{
        console.log(`compraste ${quantity} unidades`);
    }

    const [items, setItem] = useState([]);

    const getData = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
                resolve(data)
            },200)
    })

        useEffect(() =>{
            getData.then((result) =>{
                if(categoryId){
                    const productoPorCategoria = result.filter(item=>item.categoria === categoryId )
                    setItem(productoPorCategoria)
                }else {
                    setItem(result)
                }
                // console.log (result)
            })
        }, [categoryId])
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