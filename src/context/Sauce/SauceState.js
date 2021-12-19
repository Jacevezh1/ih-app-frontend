// Estado Global (Store) con FLUX
// La arquitectura que se utiliza para generar el estado gloal se le conoce como FLUX.

import { useReducer } from 'react'


import SauceContext from './SauceContext'
import SauceReducer from './SauceReducer'
import axiosClient from "./../../config/axios"


const SauceState = (props) => {

    // 1. Initial State 
	const initialState = {
		sauces: [],
		singleSauce: {
			_id: "",
			name: "",
			price: "",
			content: "",
			image: "",
			description: "",
            ml: ""
		},
	}


    
    // 2. Configuracion del REDUCER y creacion del ESTADO GLOBAL ( Reducer son funciones que alteran el ESTADO GLOBAL)

	const [globalState, dispatch] = useReducer(SauceReducer, initialState)


    // 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
	 const getSauces = async () => {

		const res = await axiosClient.get("sauces/readall")

        // ELIMINAR
		console.log("Obteniendo sauces...")
        
		
		const list = res.data.data

		dispatch({
			type: "GET_SAUCES",
			payload: list
		})

	} 


	const getSauce = async (sauceId) => {
		
		const res = await axiosClient.get(`sauces/readone/${sauceId}`)

		const selectedSauce = res.data.data

		dispatch({
			type: "GET_SAUCE",
			payload: selectedSauce
		})

		return "Listo"

	}






    // 4. Retorno
	return (
		<SauceContext.Provider
			value={{
				sauces: globalState.sauces,
				singleSauce: globalState.singleSauce,
                getSauces,
				getSauce
	
			}}
		>
			{props.children}
		</SauceContext.Provider>
	)






}


export default SauceState