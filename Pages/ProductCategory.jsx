import { useParams } from "react-router-dom"
import ProductItems from "../src/components/ProductItems"

function ProductCategory (props){
const params = useParams()
console.log('Params:', params)

let productCategory = props.products.filter(product => product.categoryId === Number(params.id))

    return (
   
        <section className="products-container main-wrapper">
    <ul className="products-container__list">
  {productCategory.map(product => <ProductItems  key={product.id} product={product}/>)}
    </ul>
  </section>
 
    )
}
export  default ProductCategory