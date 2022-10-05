import React,{ useState, useEffect } from "react"
import './itemListContainer.css'
import ItemList from "../itemlist/itemList";
import {useParams} from 'react-router-dom';
import {db} from "../../utils/firebase";
import {collection, getDocs, query, where} from "firebase/firestore"


const ItemListContainer =  ({saludo, miNombre}) =>{
    const{categoryId}= useParams();
    const [items, setItem] = useState([]);
    useEffect(() =>{
        //creamos la referencia para  traer todos los productos de firebase
        const queryRef = ! categoryId ? collection(db,"items") :
        query (collection(db, "items"),where("categoria", "==",categoryId))
        getDocs(queryRef).then(response=>{
            const productos = response.docs.map(documentofb =>{
                const nuevoProducto ={
                    id:documentofb.id,
                    ...documentofb.data(),
                }
                return nuevoProducto
            })
            console.log(productos)
            setItem(productos)
        })
    }, [categoryId])

    return(
        <div className="Container">
            <div className="presentacion">
                <h1>{saludo}</h1>
                <h2>{miNombre}</h2>
            </div>
            <div>
                {
                    items.length > 0 ? (
                        <ItemList productos={items}/>
                    ) :  (
                        <div className="Cargando"> Cargando.....</div>
                    )
                }
            </div>
        </div>
        )
}

export default ItemListContainer
