import { Link } from "react-router-dom"

const Products = ()=>{
    return <section>
        <h2>Products:</h2>
        <ul>
            <li><Link to="/products/book" >Book</Link></li>
            <li><Link to="/products/car" >Car</Link></li>
            <li><Link to="/products/course" >Course</Link></li>
        </ul>
    </section>
}

export default Products