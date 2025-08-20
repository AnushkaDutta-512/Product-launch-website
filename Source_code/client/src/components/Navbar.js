import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="p-4 bg-blue-500 text-white flex justify-between">
<Link to="/">Matty</Link>
<div>
<Link className="mr-4" to="/login">Login</Link>
<Link to="/dashboard">Dashboard</Link>
</div>
</nav>
);
}