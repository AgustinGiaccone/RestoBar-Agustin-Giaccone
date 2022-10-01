import ItemDetail from '../itemDetail/itemDetail'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore"
import React from 'react';

const ItemDetailContainer =() =>{

    const {productId} = useParams();
    const [item, setItem] = useState([]);

    useEffect (()=>{
        const getProducto = async ()=>{
            //referencia
            const queryRef = doc(db,"items",productId)
            //solicitud
            const response = await getDoc(queryRef)
            const nuevoProducto ={
                id: response.id,
                ...response.data(),
            }
            // console.log(nuevoProducto)
            setItem(nuevoProducto)
            console.log("nuevoproducto",nuevoProducto)

        }
        getProducto()
    },[productId])
    console.log("item",item)

    // const getData = new Promise ((resolve, reject) =>{
    //     setTimeout(() =>{
    //             resolve(data)
    //         },100)
    // })


    //     useEffect(() =>{
    //         getData.then((result) =>{
    //             setItem(result)
    //             console.log (result)
    //         })
    //     }, [])
    return (
        <div className="ItemDetail">
            <ItemDetail producto={item} buttonId={productId} />
        </div>
    )
}

export default ItemDetailContainer;