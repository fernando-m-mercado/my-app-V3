import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './App.css'
import CartIcon from './CartIcon';
import ProductDetails from './ProductDetails';


const ItemDetailContainer = () => {
    const [producto, setProductoCard] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    const {id} = useParams()
    useEffect(() => {
        fetch("../json/products.json")
        .then(response => response.json())
        .then(data => {
            const producto1 = data.find(producto => producto.id == id)
            setProductoCard(producto1)
        })
     
    }, []);


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
         <div id="detalles-card" className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"../img/"+ producto.img} className="img-fluid rounded-start" alt="..." />
                </div>
            <div className="col-md-8">
                <div className="card-body">
                    <ProductDetails producto={producto} />
                    
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default ItemDetailContainer; 
