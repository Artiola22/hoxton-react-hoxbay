import { Link } from "react-router-dom"

function Categories (props){
    return(
       
      <li>
        {/* <!-- Use the Link component from React Router to create 
              the anchor tags
        --> */}
        <Link to={`/categories/${props.categories.id}`}>{props.categories.name}</Link>
      </li>
     
   
    )
}
export default Categories