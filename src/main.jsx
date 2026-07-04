import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import TodoProvider from "@/context/TodoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<TodoProvider>
			<App />
		</TodoProvider>
	</StrictMode>,
);
