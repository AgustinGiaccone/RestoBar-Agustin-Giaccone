

const ItemDetail =({productos}) =>{
    return (
        <div className="ItemDetail">
            <img src={productos.imagen}/>
            <h1>{productos.name}</h1>
        </div>
    )
}

export default ItemDetail;