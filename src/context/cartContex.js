import React, { useState } from 'react'


export const CartContext = React.createContext();

export const CartProvider = ({children}) =>{
    const [productCartList, setProductCartList] = useState([])

    const isInCart = (idProducto)=>{
        const productExist = productCartList.some(item=>item.id === idProducto)
        return productExist;
    }

    const addItem = (item, quantity) =>{
        console.log ("producto", item,"cantidad", quantity)
        const newProducto={
            ...item,
            quantity
        }
        console.log("newProducto", newProducto)

        if(isInCart(item.id)){
            const productPosicion = productCartList.findIndex(product=>product.id ===item.id)
            const newArreglo = [...productCartList];
            newArreglo[productPosicion].quantity = newArreglo[productPosicion].quantity + quantity;
            setProductCartList(newArreglo);
        } else{
        const newArreglo = [...productCartList];
        newArreglo.push(newProducto);
        setProductCartList(newArreglo)
        }
    }

    const removerProduct = (id)=>{
        console.log("itemId", id)
        const newArreglo = productCartList.filter(product => product.id !== id)
        setProductCartList(newArreglo)
    }

    const clear =() =>{
        setProductCartList([])
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removerProduct, clear}}>
            {children}
        </CartContext.Provider>
    )
}