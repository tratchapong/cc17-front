import {Link} from 'react-router-dom'

export default function Header() {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<input type="checkbox" value="dark" className="toggle theme-controller"/>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to='/'>Login</Link>
					</li>
					<li>
						<Link to='/register'>Register</Link>
					</li>

				</ul>
			</div>
		</div>
	)
}
