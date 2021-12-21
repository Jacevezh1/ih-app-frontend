//
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

            
            <div class="bg-white">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div class="text-center">
                <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Products</h2>
                <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">All Sauces</p>
                <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
                </div>
            </div>
            </div>


           


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
                                           Ml: {element.ml} Oz.
                                        </p>

                                        <p class="mt-1 text-sm italic text-gray-500">
                                           Content: {element.content}
                                        </p>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                         </svg>

                
                                    </div>

                                    </>

                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>   
            </div>
            
            <div class="bg-gray-50">
            <div class="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
                <div class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
                <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div class="sm:flex-shrink-0">
                    <div class="flow-root">
                        <img class="w-28 h-24 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg" alt=""/>
                    </div>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                    <h3 class="text-sm font-medium text-gray-900">
                        Free Shipping
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                        It&#039;s not actually free we just price it into the products. Someone&#039;s paying for it, and it&#039;s not us.
                    </p>
                    </div>
                </div>

                <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div class="sm:flex-shrink-0">
                    <div class="flow-root">
                        <img class="w-28 h-24 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg" alt=""/>
                    </div>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                    <h3 class="text-sm font-medium text-gray-900">
                        24/7 Customer Support
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                        Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.
                    </p>
                    </div>
                </div>

                <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div class="sm:flex-shrink-0">
                    <div class="flow-root">
                        <img class="w-28 h-24 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg" alt=""/>
                    </div>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                    <h3 class="text-sm font-medium text-gray-900">
                        Fast Shopping Cart
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                        Look how fast that cart is going. What does this mean for the actual experience? I don&#039;t know.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>


        </>
    )
}







