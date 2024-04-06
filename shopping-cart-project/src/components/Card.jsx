/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../styles/card.css'

export const Card = ({ image, title, description, price }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        setAdded(true)
        // handleAgregar()
    }
    const clickQuitar = () => {
        setAdded(false)
        // handleQuitar()
    }


    return (
        <div className="tarjeta">
            <img src={image} alt="Imagen del producto" className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{title}</h3>
                <p className="tarjeta-descripcion">{description}</p>
                <p className="tarjeta-precio">{price}€</p>

                {added
                    ?
                    <button
                        type="button"
                        className="boton-quitar"
                        onClick={clickQuitar}
                    >Quitar del Carrito</button>
                    :
                    <button
                        type="button"
                        className="boton-agregar"
                        onClick={clickAgregar}
                    >Agregar al Carrito</button>

                }
            </div>
        </div>
    )
}