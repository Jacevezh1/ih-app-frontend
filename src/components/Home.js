import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext'

export default function Home() {
    
    const ctx = useContext(UserContext)

    const {
      verifyingToken
    } = ctx
    
    
    
    
    
    return (

        <>
              <div>
            Este es el Home
            <button onClick={() => {
              verifyingToken()
            }}>
              Verificar sesión
            </button>

          </div>

        
        <div class="bg-white">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="text-center">
              <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Salsa De mi Barrio</h2>
              <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Take control of your salsas.</p>
              <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
            </div>
          </div>
        </div>


        
        
       <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div class="absolute inset-0">
            <img class="h-full w-full object-cover" src="https://images.pexels.com/photos/3208323/pexels-photo-3208323.jpeg" alt="People working on laptops"/>
            <div class="absolute inset-0 bg-gradient-to-r from-lime-200 to-lime-200 mix-blend-multiply"></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span class="block text-white">Salsa De mi Barrio</span>
              <span class="block text-indigo-200">Welcome!</span>
            </h1>
            <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                  Sauces
                </a>
                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                  History
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <section class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-workcation">
          <title id="svg-workcation">Salsa de mi Barrio</title>
          <defs>
            <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg>

        <div class="relative">
          <img class="mx-auto h-8" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg" alt="Workcation"/>
          <blockquote class="mt-10">
            <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <footer class="mt-8">
              <div class="md:flex md:items-center md:justify-center">
                <div class="md:flex-shrink-0">
                  <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div class="text-base font-medium text-gray-900">Judith Black</div>

                  <svg class="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div class="text-base font-medium text-gray-500">CEO, Workcation</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>


    </>
  

   

    
    )
}




