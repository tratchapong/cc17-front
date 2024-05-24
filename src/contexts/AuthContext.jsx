import {createContext, useState} from 'react'

const AuthContext = createContext()


function AuthContextProvider(props) {
	const [user, setUser] = useState(null)
	const logout = () => {
		setUser(null)
		localStorage.removeItem('token')
	}
	return (
		<AuthContext.Provider value={ { user, setUser, logout} }>
			{props.children}
		</AuthContext.Provider>
	)
}

export { AuthContextProvider}
export default AuthContext