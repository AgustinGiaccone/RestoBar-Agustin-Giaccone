import data from './mock-data'

const getData = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        resolve(data);
    })
})

const getProductoById = async (id,setState)