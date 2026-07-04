import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TodoContext } from "@/context/TodoContext";

export default function ThemeToggle() {
	const { state, dispatch } = useContext(TodoContext);
	return (
		<Button variant="outline" size="icon" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
			{state.theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
		</Button>
	);
}
