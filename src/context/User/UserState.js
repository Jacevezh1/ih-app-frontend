import { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axiosClient from './../../config/axios'


const UserState = (props) => {

	// 1. INITIAL STATE
	const initialState = {
		currentUser: {
			name: "",
			lastname: "",
			country: "",
			adress: "",
			email: "",
			password: ""
		}	
	}


    // 2. CONFIGURACIÓN DEL REDUCER
	const [globalState, dispatch] = useReducer(UserReducer, initialState)

	
    // 3. FUNCIONES
	const registerUser = async (form) => {

		const res = await axiosClient.post("users/create", form)
		
		console.log(res)

        console.log(form);

		const token = res.data.data

		dispatch({
			type: "REGISTRO_EXITOSO",
			payload: token
		})
	}






    // 4. RETORNO
	return (
		<UserContext.Provider
			value={{
				currentUser: globalState.currentUser,
				registerUser
				
			}}
		>

			{props.children}

		</UserContext.Provider>

	)
}






export default UserState