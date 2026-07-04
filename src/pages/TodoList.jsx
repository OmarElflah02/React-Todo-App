import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import TodoItem from "@/components/TodoItem";
import EmptyState from "@/components/EmptyState";

export default function TodoList() {
	const { state } = useContext(TodoContext);

	if (state.todos.length === 0) {
		return <EmptyState />;
	}

	return (
		<div className="space-y-4">
			{state.todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</div>
	);
}
