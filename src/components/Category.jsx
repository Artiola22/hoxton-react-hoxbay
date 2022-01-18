import { Link } from "react-router-dom"

function Category (props){

  console.log(props)
  
        return <li className={`category_${props.category.id}`}>
        {/* <!-- Use the Link component from React Router to create 
              the anchor tags
        --> */}
        <Link to={`/categories/${props.category.id}`}>{props.category.name}</Link>
      </li>
     
   
    
}
export default Category