export const Stock = [
    {
        id: "1",
        nombre: 'Remera',
        precio: 8000,
        imagen: '../image/remera.JPG',
        stock: 10,
        categoria: "1"
        
    },
    {
        id: "2",
        nombre: 'Short',
        precio: 12000,
        imagen: '../image/short.JPG',
        stock: 6,
        categoria: "2"
        
    },
    {
        id: "3",
        nombre: 'Hoodies',
        precio: 20000,
        imagen: '../image/hoodie.JPG',
        stock: 7,
        categoria: "1"
        
    },
    {
        id: "4",
        nombre: 'Casacas',
        precio: 17000,
        imagen: '../image/casaca.JPG',
        stock: 20,
        categoria: "1"
        
    }

];

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(Stock)
        }, 250);
    })
}

export const getUnProducto = (id) =>{
    return new Promise (resolve => {
        setTimeout(()=>{
            const productoElegido = Stock.find(prod => prod.id === id);
            resolve(productoElegido);
        }, 250)
    })
}

export const getCategoria = (idCategoria) =>{
    return new Promise (resolve => {
        setTimeout(()=>{
            const productosCategoria = Stock.filter(prod => prod.categoria === idCategoria);
            resolve(productosCategoria);
            },250)
    })
}