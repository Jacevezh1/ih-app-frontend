// Inicializacion del CONTEXT, significa que empieza con un valor inicial de null, pero conforme vayamos agregando nuevos valores, ese NULL cambia a un objeto

import { createContext } from 'react'

const SauceContext	= createContext(null)

export default SauceContext
