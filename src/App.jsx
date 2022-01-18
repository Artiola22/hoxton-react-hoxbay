import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Categories from '../Pages/Categories'
import Header from './components/Header'
import NotFound from '../Pages/NotFound'

import ProductItems from './components/ProductItems'
import Basket from '../Pages/Basket'
import Products from '../Pages/Products'
import ProductDetailsPage from '../Pages/ProductDetailsPage'
import ProductCategory from '../Pages/ProductCategory'




function App() {
  
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  function getProductsFromserver(){
    fetch(`http://localhost:3000/products`).then(resp => resp.json()).then(productFromServer => setProducts(productFromServer))
  }
  useEffect(getProductsFromserver, [])

  function updateQuantityOfProduct(product , newQuantity){
  const updatedBasket = JSON.parse(JSON.stringify(basket))
  const match = updatedBasket.find(productInBasket => productInBasket.id === product.id)
    match.quantity = newQuantity
    setBasket(updatedBasket)
  }

  return (

    <>
      <Header />
      <main>
        {
        <Routes>
          <Route  index element={<Navigate replace to="/products"/>}/>
          <Route path='/products/:id' element={<ProductDetailsPage  updateQuantityOfProduct={updateQuantityOfProduct}  basket={basket} setBasket={setBasket}/>}/>
          <Route path='/products' element={<Products products={products} />} />
          <Route path='/categories' element={<Categories  />}/>
          <Route path='/categories/:id' element={<ProductCategory  products={products}/> }/>
          <Route path='/productItem' element={<ProductItems products={products} />}/>
          <Route path='/basket' element={<Basket  basket={basket} setbasket={setBasket} updateQuantityOfProduct={updateQuantityOfProduct}/>}/>
          <Route path='*' element={<NotFound />}/>

        </Routes> 
        
        }
      </main>
    </>
  )
}

export default App
