export const Stock = [
    {
        id: "1",
        nombre: 'Remera',
        precio: 8000,
        imagen: '../img/remera.JPG',
        categoria: "1"
    },
    {
        id: "2",
        nombre: 'Short',
        precio: 12000,
        imagen: '../img/short.JPG',
        categoria: "2"
    },
    {
        id: "3",
        nombre: 'Hoodies',
        precio: 20000,
        imagen: '../img/hoodie.JPG',
        categoria: "1"
    },
    {
        id: "4",
        nombre: 'Casacas',
        precio: 17000,
        imagen: '../img/casaca.JPG',
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
    return new promise (resolve => {
        setTimeout(()=>{
            const producto = Stock.find(prod => prod.id === id);
        }, 250)
    })
}

export const getCategoria = (idCategoria) =>{
    return new promise (resolve => {
        setTimeout(()=>{
            const productosCategoria = Stock.filter(prod => prod.categoria === idCategoria);
            resolve(productosCategoria);
            },250)
    })
}