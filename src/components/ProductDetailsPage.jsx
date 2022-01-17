import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetails from "../../Pages/ProductDetails"


function ProductDetailsPage (props){
    const param = useParams()
    const [product, setProduct] = useState(null)
    function getProductFromServer(){
        fetch(`http://localhost:3000/products/${param.id}`).then(resp =>resp.json()).then(productFromServer=> setProduct(productFromServer))
    }
    useEffect(getProductFromServer , [])
    if(product === null){
        return <main>...</main>
    }
    if(product.title===undefined){
        return <main>Not Found</main>
    }
    return (
        <main>
            <ProductDetails product={product} basket={props.basket} setBasket={props.setBasket}  updateQuantityOfProduct={props.updateQuantityOfProduct}/>
        </main>
    )
}
export default ProductDetailsPage