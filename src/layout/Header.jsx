import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Header() {
	const { user, logout } = useAuth()
	const navigate = useNavigate()

	const hdlLogout = () => {
		logout()
		navigate('/')
	}
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Hello, {user?.id ? user?.username : 'Guest'}</a>
			</div>
			<input type="checkbox" value="dark" className="toggle theme-controller" />
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					{user?.id ? (
						<>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/newtodo'>New Todo</Link>
							</li>
							<li>
								<Link to='#' onClick={hdlLogout}>Logout</Link>
							</li>
						</>
					) : (
						<>
							<li>
								<Link to='/'>Login</Link>
							</li>
							<li>
								<Link to='/register'>Register</Link>
							</li>
						</>
					)
					}
				</ul>
			</div>
		</div>
	)
}
