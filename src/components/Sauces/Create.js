import React, { useState, useContext } from 'react'
import SauceContext from './../../context/Sauce/SauceContext'

export default function CreateSauce() {

	// 1. ESTADO GLOBAL
	const ctx = useContext(SauceContext)
	const {
		createSauce
	} = ctx

    

	// 2. ESTADO LOCAL
	const [newSauce, setNewSauce] = useState({
		name: "",
		price: "",
		content: "",
		image: "",
		description: "",
        ml: ""
	})


	// 3. FUNCIONES
	const handleChange = (e) => {
		e.preventDefault()

		setNewSauce({
			...newSauce,
			[e.target.name]: e.target.value
		})		
	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		createSauce(newSauce)

	}

	return (
		<>
			<form onSubmit={ (event) => { handleSubmit(event) } }>
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
							<p class="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
						</div>

						<div class="grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label for="salsa" class="block text-sm font-medium text-gray-700">Nombre</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="name"  
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="costo" class="block text-sm font-medium text-gray-700">Precio (USD)</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="number" 
									name="price" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
							
							<div class="col-span-6 sm:col-span-3">
								<label for="costo" class="block text-sm font-medium text-gray-700">Ml</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="number" 
									name="ml" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-4">
								<label for="sauceimage" class="block text-sm font-medium text-gray-700">Imagen</label>
								<input 
									type="text" 
									name="image" 
									onChange={ (event) => { handleChange(event) } } 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

                            <div class="col-span-6 sm:col-span-3">
								<label for="contenido" class="block text-sm font-medium text-gray-700">Contenido</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="content" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							

							<div class="col-span-6 sm:col-span-6 lg:col-span-4">
								<label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción</label>
								<textarea 
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="description" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

						</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Guardar Sauce
						</button>
					</div>
				</div>
			</form>
		</>
	)
}