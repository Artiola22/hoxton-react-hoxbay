import { Link, useParams } from "react-router-dom"


function ProductDetails(props){
 
  function addItemToBasket(item){
    const newBasket = JSON.parse(JSON.stringify(props.basket))
    const match = newBasket.find((productInside)=> productInside.id=== item.id)
    if(match){
      props.updateQuantityOfProduct(item , match.quantity +1)
    }else{
      const itemToAdd = {...item, quantity: 1}
      newBasket.push(itemToAdd)
      props.setBasket(newBasket)
    }

  }
   
    return (
        <section className="product-detail main-wrapper">
        <img
          src={props.product.image}
          alt={props.product.title}
        />
        <div className="product-detail__side" style={{ borderColor: 'var(--yellow)' }}>
          <h3></h3>
          <h2>{props.product.title}</h2>
          <p>
            {props.product.description}
          </p>
          <p>£{props.product.price}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <Link to='/basket'><button onClick={()=> {addItemToBasket(props.product)}}>Add to basket</button></Link>
        </div>
      </section>
    )
}
export default ProductDetails