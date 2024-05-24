import { useState } from "react"
import axios from 'axios'
import useAuth from "../hooks/useAuth"

export default function LoginForm() {
	const {user, setUser} = useAuth()
	const [input, setInput] = useState({
		username: '',
		password: '',
	})

	const hdlChange = e => {
		setInput({...input, [e.target.name] : e.target.value})
	}

	const hdlSubmit = async e => {
		try {
			e.preventDefault()
			// validation
			if(!input.username.trim() || !input.password.trim()){
				return alert('Please fill form')
			}
			// ส่ง input ไป backend
			const rs = await axios.post('http://localhost:8889/auth/login', input)
			localStorage.setItem('token', rs.data.token)
			const rs2 = await axios.get('http://localhost:8889/auth/me', {
				headers : { Authorization: `Bearer ${rs.data.token}`}
			})
			// console.log(rs2)
			setUser(rs2.data.user)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
		<h1 className="text-4xl my-10 text-center">Login Form</h1>
		<form className='border w-3/4 mx-auto p-4 rounded-lg' onSubmit={hdlSubmit}>
			<label className="form-control w-full">
				<div className="label">
					<span className="label-text">Username :</span>
				</div>
				<input type="text" className="input input-bordered w-full" 
					name="username"
					value={input.username}
					onChange={hdlChange}
				/>
			</label>
			<label className="form-control w-full">
				<div className="label">
					<span className="label-text">Password :</span>
				</div>
				<input type="password" className="input input-bordered w-full"
					name="password"
					value={input.password}
					onChange={hdlChange}
				/>
			</label>

			<button className="btn btn-outline btn-primary mt-6 w-full" >Login</button>
		</form>
	</div>
	)
}
