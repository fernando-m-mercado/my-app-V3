import {React, createContext,useState} from 'react';


const CarritoContext = createContext();

const CarritoProvider= (props) => {

    const [carrito, setCarrito] = useState([]);     //False or true// Lighr o Dark

    const agregarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        auxCarrito.push(producto)
        setCarrito(auxCarrito)
    }

    const QuitarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        let indice = carrito.findIndex(producto => producto.id == producto.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
    }
 

    return (
        <>
            <CarritoContext.Provider value={{carrito,agregarProductoCarrito, QuitarProductoCarrito}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoProvider, CarritoContext};


