import { useParams } from "react-router-dom"
import ProductItems from "./ProductItems"

function ProductCategory (props){
const params = useParams()
let productCategory = props.product.filter(product => product.categoryId === Number(params.id))

    return (
        <section className="categories-container main-wrapper">
    <ul className="categories-container__list">
  {productCategory.map(product => <ProductItems  key={product.id} product={product}/>)}
    </ul>
  </section>
    )
}
export  default ProductCategory