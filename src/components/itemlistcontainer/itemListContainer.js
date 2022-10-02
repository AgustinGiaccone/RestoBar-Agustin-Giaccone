import React,{ useState, useEffect } from "react"
import './itemListContainer.css'
import ItemList from "../itemlist/itemList";
import {useParams} from 'react-router-dom';
import {db} from "../../utils/firebase";
import {collection, getDocs, query, where} from "firebase/firestore"


const ItemListContainer =  ({saludo, miNombre}) =>{
    const{categoryId}= useParams();
    // const onAdd = (quantity) =>{
    //     console.log(`compraste ${quantity} unidades`);
    // }

    const [items, setItem] = useState([]);

    // const getData = new Promise ((resolve, reject) =>{
    //     setTimeout(() =>{
    //             resolve(data)
    //         },100)
    // })

    //     useEffect(() =>{
    //         getData.then((result) =>{
    //             if(categoryId){
    //                 const productoPorCategoria = result.filter(item=>item.categoria === categoryId )
    //                 setItem(productoPorCategoria)
    //             }else {
    //                 setItem(result)
    //             }
    //             // console.log (result)
    //         })
    //     }, [categoryId])

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
            {/* <div>
                <ItemCount inicial={0} stock={5} onAdd={onAdd}/>
            </div> */}
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