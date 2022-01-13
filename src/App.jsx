import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BasketItem from './components/BasketItem'
import Categories from './components/Category'
import Header from './components/Header'
import ProductDetails from './components/ProductDetails'
import ProductItems from './components/ProductItems'



function App() {
  
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  function getProductsFromserver(){
    fetch(`http://localhost:3000/products`).then(resp => resp.json()).then(productFromServer => setProducts(productFromServer))
  }
  useEffect(getProductsFromserver, [])

  return (

    <>
      <Header />
      <main>
        {
        <Routes>
          <Route path='/products' element={<ProductDetails />}/>
          <Route path='/categories' element={<Categories  categories={Categories}/>}/>
          <Route path='/productItem' element={<ProductItems products={products} />}/>
          <Route path='/basketItem' element={<BasketItem  basket={basket}/>}/>

        </Routes> 
        
        }
      </main>
    </>
  )
}

export default App
