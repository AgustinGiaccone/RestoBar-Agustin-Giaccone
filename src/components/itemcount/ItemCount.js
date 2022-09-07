import './ItemCount.css'

import { useState, useEffect } from "react"



const ItemCount = ({inicial, stock, onAdd}) => {
    const[count, setCount] = useState (parseInt(inicial));

    const restar =() =>{
        setCount (count - 1);
    }

    const sumar = () => {
        setCount (count + 1);
    }

    useEffect(()=>{
        setCount(parseInt(inicial));
    }, [inicial])

    return (
        <div className="contador">
            <button disabled={count <=0} onClick={restar}>-</button>
            <span>{count}</span>
            <button disabled={count>= stock} onClick={sumar}>+</button>
            <div>
                <button disabled={stock <=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount