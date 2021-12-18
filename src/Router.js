// 1. Importaciones
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Layout from './components/Layout'
import Sauces from './components/Sauces'




// 2. Funcion

const Router = () => {

    return (
		<>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						
                        {/* localhost:3000/ */}
						<Route index element={<Home />} />

						{/* localhost:3000/registro */}
						<Route path="registro" element={<Register />} />

						{/* localhost:3000/iniciar-sesion */}
						<Route path="iniciar-sesion" element={<Login />} />

						{/* localhost:3000/sauces */}
						<Route path="sauces" element={<Sauces />} />

					</Route>
				</Routes>
			</BrowserRouter>
		
		</>
	)
}




// 3. Exportacion
export default Router