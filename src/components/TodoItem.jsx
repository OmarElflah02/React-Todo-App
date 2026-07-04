import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import toast from "react-hot-toast";

export default function TodoItem({ todo }) {
	const { dispatch } = useContext(TodoContext);

	return (
		<Card className="p-2">
			<div className="px-4 flex items-center justify-between">
				<span className="font-medium">{todo.text}</span>
				<Button
					variant="destructive"
					size="icon"
					onClick={() => {
						dispatch({
							type: "DELETE_TODO",
							payload: todo.id,
						});
						toast.success("Task deleted successfully!", {
							style: {
								border: "1px solid #A30000",
								padding: "16px",
								color: "#A30000",
							},
							iconTheme: {
								primary: "#A30000",
								secondary: "#FFFAEE",
							},
						});
					}}
				>
					<Trash2 size={18} />
				</Button>
			</div>
		</Card>
	);
}
