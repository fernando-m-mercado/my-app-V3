import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './App.css'
import CartIcon from './CartIcon';
const ItemDetailContainer = () => {
    const [producto, setProductoCard] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch("../json/products.json")
        .then(response => response.json())
        .then(data => {
            const producto1 = data.find(producto => producto.id == id)
            setProductoCard(producto1)
        })
     
    }, []);

    return (
       
        <>
         <div id="detalles-card" className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"../img/"+ producto.img} className="img-fluid rounded-start" alt="..." />
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Marca: {producto.marca} </p>
                    <p className="card-text">Marca: {producto.detalle} </p>
                    <p className="card-text">Modelo: {producto.modelo} </p>
                    <p className="card-text">Precio: ${producto.precio} </p>
                    <p className="card-text">Stock: ${producto.stock} </p>
                    <button className='btn btn-dark'>Comprar </button>
                    <button id="carrito-boton" className='btn btn-dark'>Agregar al Carrito  <CartIcon/></button>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default ItemDetailContainer;
