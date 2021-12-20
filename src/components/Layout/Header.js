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
        <header class="bg-lime-300">
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
                  Tu perfil
                </Link>
                <a
                  onClick={() => logoutUser()}
                  href="/"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  Log Out
                </a>
              </>
            ) : (
              <>
                 <Link to="/registro" class="inline-block bg-red-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-800">Sign in</Link>
                 <Link to="/iniciar-sesion" class="inline-block bg-red-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-800">Sign up</Link>
              </>
            )}
                
                {/* <Link to="/registro" class="inline-block bg-red-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-800">Sign in</Link>
                <Link to="/iniciar-sesion" class="inline-block bg-red-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-blue-800">Sign up</Link> */}
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



        


