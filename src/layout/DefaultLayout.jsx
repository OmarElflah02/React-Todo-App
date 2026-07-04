import { useContext, useEffect } from "react";
import { TodoContext } from "@/context/TodoContext";
import Navbar from "@/pages/Navbar";
import TodoForm from "@/pages/TodoForm";
import TodoList from "@/pages/TodoList";
import { Card } from "@/components/ui/card";

const DefaultLayout = () => {
	const { state } = useContext(TodoContext);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", state.theme === "dark");
	}, [state.theme]);

	return (
		<Card className="w-full max-w-xl p-8 shadow-2xl">
			<Navbar />
			<TodoForm />
			<TodoList />
		</Card>
	);
};

export default DefaultLayout;
