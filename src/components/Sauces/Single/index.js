import React, { useContext, useEffect } from 'react'
import SauceContext from '../../../context/Sauce/SauceContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/User/UserContext'


export default function Single() {
    
	// Sauce CTX
    const ctx = useContext(SauceContext)
	const { getSauce, singleSauce, deleteSauce } = ctx
	
    
    const params = useParams()
	const id = params.id
	
    
    useEffect(() => {
		getSauce(id)
	}, [])


	// User CTX
	const ctxUser = useContext(UserContext);

	const { currentUser, verifyingToken } = ctxUser; 
    
    
    return (
       <>
			{ currentUser.admin ? (

				<>

				<div class="mt-4 flex md:mt-0">
					<Link to={`/sauces/${id}/editar`}>
						<button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Editar Sauce
						</button>
					</Link>
				</div>

				<div class="mt-4 flex md:mt-0">
					<button onClick={() => deleteSauce(id)} type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Delete Sauce
					</button>
				</div>

				</>

			) : (

				<>

              	</>


			)}
			<div>
				<div className="bg-white">
					<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
						<div className="lg:max-w-lg lg:self-end">
							<nav aria-label="Breadcrumb">
								<ol role="list" className="flex items-center space-x-2">
									<li>
										<div className="flex items-center text-sm">
											<Link to="/sauces" className="font-medium text-gray-500 hover:text-gray-900">
												Sauces
											</Link>
											<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300">
												<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
											</svg>
										</div>
									</li>
									<li>
										<div className="flex items-center text-sm">
											<Link to="/sauces" className="font-medium text-gray-500 hover:text-gray-900">
												Hot Sauces
											</Link>
										</div>
									</li>
								</ol>
							</nav>
							<div className="mt-4">
								<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{singleSauce.name}</h1>
							</div>
							<section aria-labelledby="information-heading" className="mt-4">
								<h2 id="information-heading" className="sr-only">Product information</h2>
								<div className="flex items-center">
									<p className="text-lg text-gray-900 sm:text-xl">USD ${singleSauce.price}</p>
									<div className="ml-4 pl-4 border-l border-gray-300">
										<h2 className="sr-only">Reviews</h2>
										<div className="flex items-center">
											<div>
												<div className="flex items-center">
													<svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg className="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>
												<p className="sr-only">4 out of 5 stars</p>
											</div>
											<p className="ml-2 text-sm text-gray-500">1624 reviews</p>
										</div>
									</div>
								</div>
								<div className="mt-4 space-y-6">
									<p className="text-base text-gray-500">{singleSauce.description}</p>
								</div>
								<div className="mt-6 flex items-center">
									<svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
								</div>
							</section>
						</div>
						<div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
							<div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
								<img src={singleSauce.image} alt="Imagen de guitarra" className="w-full h-full object-center object-cover" />
							</div>
						</div>
						<div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
							<section aria-labelledby="options-heading">
								<h2 id="options-heading" className="sr-only"></h2>
							</section>
						</div>
						<div className="mt-6 space-y-6">
						

						

						
						<Link to="//buy.stripe.com/test_dR64ji8Gk5xQ0zm8wx" className="font-medium text-green-500 hover:text-red-900">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
							</svg>
						</Link>
						

						
						</div>
					</div>
				</div>
			</div>
		</>
    )
}

/* 
<Link to="//buy.stripe.com/test_dR64ji8Gk5xQ0zm8wx" className="font-medium text-gray-500 hover:text-gray-900">
							<p className="text-base text-gray-500">Buy Now</p>
						</Link> */