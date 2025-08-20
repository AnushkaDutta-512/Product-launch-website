import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";


export default function LoginForm() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();


const handleSubmit = async (e) => {
e.preventDefault();
const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
dispatch(loginSuccess(res.data));
};


return (
<form onSubmit={handleSubmit} className="p-4 flex flex-col">
<input className="border p-2 mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<input type="password" className="border p-2 mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<button className="bg-blue-500 text-white p-2" type="submit">Login</button>
</form>
);
}