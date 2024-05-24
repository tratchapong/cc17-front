import { useEffect, useState } from 'react'
import axios from 'axios'
import TodoCard from './TodoCard'

export default function UserHome() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const run = async () => {
			try {
				let token = localStorage.getItem('token')
				const rs = await axios.get('http://localhost:8889/todos', {
					headers: { Authorization: `Bearer ${token}` }
				})
				setTodos(rs.data.todos)
			} catch (err) {
				console.log(err)
			}
		}
		run()
	}, [])
	return (
		<div>
			{ todos.map( (el)=>( 
				<TodoCard key={el.id} item={el} />
			 ) )

			}
		</div>
	)
}
