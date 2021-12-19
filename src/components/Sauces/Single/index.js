import React, { useContext, useEffect } from 'react'
import SauceContext from '../../../context/Sauce/SauceContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Single() {
    
    const ctx = useContext(SauceContext)
	const { getSauce, singleSauce } = ctx
	
    
    const params = useParams()
	const id = params.id
	
    
    useEffect(() => {
		getSauce(id)
	}, [])
    
    
    
    
    return (
        <div>
            
            Pagina individual de mi salsa 

            <p>{singleSauce.name}</p>
            <p>{singleSauce.content}</p>
            <p>{singleSauce.description}</p>
            <p>{singleSauce.precio}</p>
            <img src={singleSauce.image} alt="salsa"/>
            <p>{singleSauce.ml}</p>

            <p>Add to cart</p>
            
            
        </div>
    )
}
