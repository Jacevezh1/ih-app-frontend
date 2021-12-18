import React, { useEffect, useContext } from 'react'
import SauceContext from './../../context/Sauce/SauceContext'
import { Link } from 'react-router-dom'



export default function Sauces() {


    // 1. Estado Global
	const ctx = useContext(SauceContext)

    console.log(ctx);
    const { sauces, getSauces } = ctx


	// 2. ESTADO LOCAL

    // El momento en que se ejecuta USE EFFECT es despues del RETURN
   /*  useEffect(() => {
		getSauces()
	}, []) // Cuando hay un arreglo vacio, solo se ejecuta un vez
 */



    return (
        <>

            <p> Mis SALSAS </p>

            <button onClick={() => { getSauces() } }>
                Listar Salsas
            </button>


            <div>
                <h2>Listado de Salsas</h2>

                <ul>
                    {
                        sauces.map((element) => {
                            return (
                                <li key={element._id}>

                                    <p>{element.name}</p>
                                    <p>{element.content}</p>
                                    <p>{element.description}</p>
                                    <p>{element.precio}</p>
                                    <img src={element.image} alt="salsa"/>
                                    <p>{element.ml}</p>


                                
                                </li>
                            )




                        })




                    }
                </ul>
            
            
            
            </div>



        </>
    )
}
