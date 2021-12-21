import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from '../../../context/User/UserContext'


export default function EditProfiles() {

	// 1. ESTADO GLOBAL
	const params = useParams()
	const idUser = params.id

	const ctx = useContext(UserContext)

    console.log(ctx);

	const {
		currentUser,
		updateUser
		
	} = ctx

    console.log(currentUser);

	// 2. ESTADO LOCAL
	const [userData, setUserData] = useState({
		name: "",
		lastname: "",
		country: "",
        adress: ""
	})


	// USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
	useEffect(() => {

		const {
			name,
			lastname,
			country,
			adress,
		} = ctx.currentUser

		setUserData({
			name: name,
			lastname: lastname,
			country: country,
			adress: adress
		})
	}, [currentUser])


	const handleChange = (e) => {
		e.preventDefault()

		setUserData({
			...userData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		updateUser(userData, currentUser._id)

	}

    console.log(userData);
    console.log(currentUser._id);

	return (
		<>
			<form onSubmit={ (event) => { handleSubmit(event) } }>
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 class="text-lg leading-6 font-medium text-gray-900">Edit User</h3>
							<p class="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
						</div>

						<div class="grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label for="first-name" class="block text-sm font-medium text-gray-700">Name</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="name"  
									value={userData.name}
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="lastname" 
									value={userData.lastname}
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

                        

                            
							<div class="col-span-6 sm:col-span-6 lg:col-span-4">
								<label for="city" class="block text-sm font-medium text-gray-700">Adress</label>
								<textarea 
									onChange={ (event) => { handleChange(event) } } 
									type="text"
									value={userData.adress} 
									name="adress" 
									class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

						</div>
					</div>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Guardar User
						</button>
					</div>
				</div>
			</form>
		</>
	)
}
