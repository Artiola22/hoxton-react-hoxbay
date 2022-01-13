function ProductDetails(props){
    return (
        <section className="product-detail main-wrapper">
        <img
          src={props.product.image}
          alt={props.product.title}
        />
        <div className="product-detail__side" style="border-color: var(--yellow);">
          <h3></h3>
          <h2>{props.product.title}</h2>
          <p>
            {props.product.description}
          </p>
          <p>£{props.product.price}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <button>Add to basket</button>
        </div>
      </section>
    )
}
export default ProductDetails