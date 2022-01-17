import { Link } from "react-router-dom";
import BasketItem from "../src/components/BasketItem"
import ProductDetailsPage from "../src/components/ProductDetailsPage";





function Basket(props){
  
  function totalPrice (){
    let total = 0;
    for(const BasketItem of props.basket){

      total += BasketItem.quantity * BasketItem.price 
    }
    return total.toFixed(2)
  }


    return (
      <main>
  <section className="basket-container">
    <h2>Your Basket</h2>
    <ul>
      {props.basket.map(basketItem =>
      <Link to={`/products/${basketItem.id}`} >
      <BasketItem 
        basketItem={basketItem}
        basket={props.basket}
        setBasket={props.setBasket}
          updateQuantityOfProduct={props.updateQuantityOfProduct}
        />
        </Link>
        )}
      
      {/* <!--  --> */}
    </ul>
    {/* <!-- Basket total is calculated using each item's total from above --> */}
    <h3>Your total: £{totalPrice()}</h3>
  </section>
</main>
    )
}
export default Basket