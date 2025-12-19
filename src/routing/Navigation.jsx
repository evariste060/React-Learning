import { Link } from "react-router-dom"
export default function Navigation(){
    return (
        <nav className="flex justify-around my-8">
        <Link className=" px-2 text-lg text-blue-700  hover:text-red-500 " to="/">Home</Link>
        <Link className=" px-2 text-lg text-blue-700  hover:text-red-500 " to="/about">About</Link>
        <Link className=" px-2 text-lg text-blue-700  hover:text-red-500 " to="/contact">Contact</Link>
        <Link className=" px-2 text-lg text-blue-700  hover:text-red-500 " to="/products/1">Product</Link>
      </nav>
    )
}