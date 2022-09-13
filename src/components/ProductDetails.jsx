import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import CartIcon from './CartIcon';
const ProductDetails = (producto) => {
    const [cantidad, setCantidad] = useState(1);
    const agregarAlCarrito = (producto,cantidad) => {
        const productoCarrito = {id: producto.id,cantidad: cantidad}
        console.log(productoCarrito)
    }

    const cantidadProductos = (operacion) => {
        if(operacion == "+") {
            if(cantidad < producto.stock)
                setCantidad(cantidad +1)
        } else {
            if(cantidad > 1) {
                setCantidad(cantidad -1)
            }
        }
    }

    return (
        <>
            <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Marca: {producto.marca} </p>
                    <p className="card-text">Marca: {producto.detalle} </p>
                    <p className="card-text">Modelo: {producto.modelo} </p>
                    <p className="card-text">Precio: ${producto.precio} </p>
                    <p className="card-text">Stock: {producto.stock} </p>
                    <button className='btn btn-dark' onClick={() => agregarAlCarrito(producto, cantidad)}>Comprar </button>
                    <button className='btn btn-primary' onClick= {() => cantidadProductos("+")}>
                        +
                    </button>
                    <button className='btn btn-primary' onClick= {() => cantidadProductos("-")}>
                        -
                    </button>
                    <p>{cantidad}</p>
                    <button id="carrito-boton" className='btn btn-dark'>Agregar al Carrito  <CartIcon/></button>
        </>
    );
}

export default ProductDetails;
