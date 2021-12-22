import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'



export default function Header() {
  
    const ctx = useContext(UserContext);

    const { currentUser, verifyingToken, logoutUser } = ctx;

    useEffect(() => {
        verifyingToken();
    }, []);
    
    
    return (
        <header class="bg-green-600">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                <div class="flex items-center">
                    <Link to="/">
                    <span class="sr-only">Workflow</span>
                    <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt=""/>
                    </Link>
                    <div class="hidden ml-10 space-x-8 lg:block">
                    <Link to="/" class="text-base font-medium text-white hover:text-indigo-50" key="Solution">
                        Home
                    </Link>

                    <Link to="/about" class="text-base font-medium text-white hover:text-indigo-50" key="Pricin">
                        About Us
                    </Link>

                    <Link to="/recipes" class="text-base font-medium text-white hover:text-indigo-50" key="Doc">
                        Recipes
                    </Link>

                    <Link to="/contact" class="text-base font-medium text-white hover:text-indigo-50" key="Compan">
                        Contact
                    </Link>

                    <Link to="/sauces" class="text-base font-medium text-white hover:text-indigo-50" key="Compan">
                        Sauce
                    </Link>
                    </div>            
                </div>


            <div class="ml-10 space-x-4">
            {currentUser.name ? (
              <>
                <Link
                  to="/profile"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
            
                </Link>
                
                <a
                  onClick={() => logoutUser()}
                  href="/"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </a>
              </>
            ) : (
              <>
                 
                  
            
                 <Link to="/registro" class="inline-block bg-red-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-800">Sign in</Link>
                 <Link to="/iniciar-sesion" class="inline-block bg-red-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-800">Sign up</Link>
              </>
            )}
                
               
            </div>
            </div>
            
            
            <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            <Link to="/" class="text-base font-medium text-white hover:text-indigo-50" key="Solutions">
                Home
            </Link>

            <Link to="/about" class="text-base font-medium text-white hover:text-indigo-50" key="Pricing">
                About
            </Link>

            <Link to="/recipes" class="text-base font-medium text-white hover:text-indigo-50" key="Docs">
               Recipes
            </Link>

            <Link to="/contact" class="text-base font-medium text-white hover:text-indigo-50" key="Docs">
               Contact
            </Link>

            <Link to="/sauces" class="text-base font-medium text-white hover:text-indigo-50" key="Company">
               Sauce
            </Link>
            </div>
        </nav>
        </header>



    )
}



        

// DOLAR
{/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


// LOGIN
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
</svg>






// Shoping cart
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg> */}