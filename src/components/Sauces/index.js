import React, { useEffect, useContext } from 'react'
import SauceContext from './../../context/Sauce/SauceContext'
import { Link } from 'react-router-dom'



export default function Sauces() {


    // 1. Estado Global
	const ctx = useContext(SauceContext)

    
    const { sauces, getSauces } = ctx


	// 2. ESTADO LOCAL

    // El momento en que se ejecuta USE EFFECT es despues del RETURN
    useEffect(() => {
		getSauces()
	}, []) // Cuando hay un arreglo vacio, solo se ejecuta un vez
 

    return (
        <>

            <h1> PRODUCTS </h1>

           


            <div>
                

                <div class="bg-white">
                    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 id="products-heading" class="sr-only">Products</h2>
                        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                            {
                                sauces.map((element) => {
                                    return (
                                    <>
                                    
                                    <div class="group">
                                        <div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                                           <Link to={`/sauces/${element._id}`} >
												<img src={element.image} alt="salsa" class="w-full h-full object-center object-cover" />
											</Link>
                                        </div>
                                        <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <Link to={`/sauces/${element._id}`} >
                                                {element.name}
                                            </Link>
                                        </h3>
                                        <p>
                                            {element.precio}
                                        </p>
                                        </div>
                                        <p class="mt-1 text-sm italic text-gray-500">
                                            {element.description}
                                        </p>

                                        <p class="mt-1 text-sm italic text-gray-500">
                                            {element.ml}
                                        </p>

                                        <p class="mt-1 text-sm italic text-gray-500">
                                            {element.content}
                                        </p>

                
                                    </div>

                                    </>

                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>   
            </div>

        </>
    )
}







