import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"

//Lazy loading, para que cargue los componentes segun se necesiten, si hago build con todos los imports se me crea un unico archivo 
  //y eso hace que la carga inicial sea pesada y que tenga informacion que el usuario no usará y el lazy me lo evita
const FavoritesPage = lazy(()=> import('./views/FavoritesPage')) 
const IndexPage = lazy(()=> import('./views/IndexPage')) 




export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}> 
            <Route path='/' element={
              <Suspense fallback='Cargando'> 
                <IndexPage/>
              </Suspense>
            } index/>
            
            <Route path='/favoritos' element={ //Parte del lazy loading, fallback puede tomar incluso otro componente, y es lo que se mostrará mientras carga el componente Favorite
              <Suspense fallback='Cargando'> 
                <FavoritesPage/>
              </Suspense>
            }/>
          </Route>
        </Routes>
    
    </BrowserRouter>
  )
}
