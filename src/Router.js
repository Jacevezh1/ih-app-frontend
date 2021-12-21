// 1. Importaciones
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Recipes from './components/Recipes'
import Profile from './components/User/Profile'

import Layout from './components/Layout'
import Sauces from './components/Sauces'
import Single from './components/Sauces/Single'

import CreateSauce from './components/Sauces/Create'
import EditSauce from './components/Sauces/Single/Edit'

import SauceState from './context/Sauce/SauceState'
import UserState from './context/User/UserState'
import EditProfiles from './components/User/Single/EditUser'


import Auth from './routes/Auth'
import Private from './routes/Private'

// 2. Funcion

const Router = () => {

    return (
		<>
		

		<UserState>
			<SauceState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							
							{/* localhost:3000/ */}
							<Route index element={<Home />} />

								{/* localhost:3000/registro */}
							<Route path="registro" element={<Auth component={Register} />} />

							{/* localhost:3000/iniciar-sesion */}
							<Route path="iniciar-sesion" element={<Auth component={Login} />} />
							
							{/* localhost:3000/about */}
							<Route path="about" element={<About />} />
							
							{/* localhost:3000/contact */}
							<Route path="contact" element={<Contact />} />

							{/* localhost:3000/recipes */}
							<Route path="recipes" element={<Recipes />} />

							{/* localhost:3000/sauces */}
							<Route path="sauces" element={<Sauces />}/>

							{/* localhost:3000/sauces/crear */}
							<Route path="sauces/crear" element={<CreateSauce />} />

							{/* localhost:3000/guitarras/:id/editar */}
							<Route path="sauces/:id/editar" element={<EditSauce />} />

							{/* localhost:3000/sauces/:id */}
							<Route path="sauces/:id" element={<Single />} />


							{/* localhost:3000/profile */}
							<Route path="profile" element={<Private component={Profile} />} />
							
							{/* localhost:3000/editprofile */}
							<Route path="editprofile" element={<Private component={EditProfiles} />} />
							
							
						</Route>
					</Routes>
				</BrowserRouter>
			</SauceState>
		</UserState>
			
		
		</>
	)
}




// 3. Exportacion
export default Router