import {createBrowserRouter, RouterProvider, Outlet, Navigate} from 'react-router-dom'
import Header from '../layout/Header'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import UserHome from '../layout/UserHome'

const guestRouter = createBrowserRouter([
	{
		path: '/',
		element: <>
			<Header />
			<Outlet />
		</>,
		children: [
			{ index: true, element: <LoginForm /> },
			{ path: '/register', element: <RegisterForm/> },
			{ path: '*', element: <Navigate to='/' />}
		]
	}
])
const userRouter = createBrowserRouter([
	{
		path: '/',
		element: <>
			<Header />
			<Outlet />
		</>,
		children: [
			{ index: true, element: <UserHome /> },
			{ path: 'newtodo', element: <p>New Todo</p>},
			{ path: '*', element: <Navigate to='/' />}
		]
	}
])

export default function AppRouter() {
	const {user} = useAuth()
	const finalRouter = user?.id ? userRouter : guestRouter
	return (
		<RouterProvider router={finalRouter} />
	)
}

