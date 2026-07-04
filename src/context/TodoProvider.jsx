import { useEffect, useReducer } from "react";
import { TodoContext } from "@/context/TodoContext";
import { reducer, initialState } from "@/context/reducer";

export default function TodoProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(state.todos));
	}, [state.todos]);

	useEffect(() => {
		localStorage.setItem("theme", state.theme);
	}, [state.theme]);

	return (
		<TodoContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}
