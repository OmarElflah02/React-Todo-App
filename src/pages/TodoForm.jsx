import { useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TodoContext } from "@/context/TodoContext";
import toast from "react-hot-toast";

export default function TodoForm() {
	const [text, setText] = useState("");
	const { dispatch } = useContext(TodoContext);

	function addTodo() {
		if (!text.trim()) return;

		dispatch({
			type: "ADD_TODO",
			payload: {
				id: Date.now(),
				text,
			},
		});
		setText("");
		toast.success("Task added successfully!", {
			style: {
				border: "1px solid #006400",
				padding: "16px",
				color: "#006400",
			},
			iconTheme: {
				primary: "#006400",
				secondary: "#FFFAEE",
			},
		});
	}

	return (
		<div className="flex gap-3 mb-8">
			<Input
				placeholder="Write your task..."
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") addTodo();
				}}
			/>

			<Button onClick={addTodo}>
				<Plus className="mr-2 h-4 w-4" />
				Add
			</Button>
		</div>
	);
}
