import ProductItems from "./ProductItems"

function Products(props){
    return(
        <main>
  <section className="products-container main-wrapper">
    <ul className="products-container__list">
      {/* <!-- Single item --> */}
      {
          props.products.map((product)=>{
              return <ProductItems product={product} key={product.id}/>
          })
      }

      {/* <!-- More items here --> */}
    </ul>
  </section>
</main>
    )
}
export default Products