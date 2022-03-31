import { getDatabase, ref, push, onValue } from "firebase/database"
// import firebase from "firebase/app"
// EXAMPLE REDUCER

const initialState = {
	allIds: [],
	byIds: {},
}

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_TODO": {
			const { id, content } = action.payload
			return {
				...state,
				allIds: [...state.allIds, id],
				byIds: {
					...state.byIds,
					[id]: {
						content,
						completed: false,
					},
				},
			}
		}
		case "TOGGLE_TODO": {
			const { id } = action.payload
			return {
				...state,
				byIds: {
					...state.byIds,
					[id]: {
						...state.byIds[id],
						completed: !state.byIds[id].completed,
					},
				},
			}
		}
		case "RESET_TODOS": {
			const { todos } = action.payload
			const allIds = Object.keys(todos)
			const byIds = Object.fromEntries(
				allIds.map((id) => [
					id,
					{
						content: todos[id].content,
						completed: todos[id].completed ?? false,
					},
				])
			)
			return {
				allIds,
				byIds,
			}
		}
		default:
			return state
	}
}

// Thunk reducer
export async function fetchTodos(dispatch, getState) {
	const db = getDatabase()
	const todosRef = ref(db, "todos")
	// Will update the todos in the reducer everytime there is a change
	// Can be used for example for updating the form in the profile
	// but it is not a good idea to do this with the rest, since we will only fetch on demand
	// using the search presenters
	onValue(todosRef, (snapshot) => {
		const data = snapshot.val()
		console.log(data)
		dispatch({
			type: "RESET_TODOS",
			payload: { todos: data },
		})
	})
}

export function saveNewTodo(content) {
	return async function saveNewTodoThunk(dispatch, getState) {
		const initialTodo = { content, completed: false }
		const db = getDatabase()
		const todoRef = await push(ref(db, "todos"), initialTodo)
		dispatch({
			type: "ADD_TODO",
			payload: { id: todoRef.key, content },
		})
	}
}
