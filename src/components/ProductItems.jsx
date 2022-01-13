import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function ProductItems (props){
    return (
        <li>
        <Link to={`/products/${props.product.id}`}
          ><article className="product-item">
            <img
              src={props.product.image}
              alt={props.product.title}
            />
            <h3>{props.product.title}</h3>
          </article></Link>
      </li>
    )
}
export default ProductItems