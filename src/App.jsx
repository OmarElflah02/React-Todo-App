import DefaultLayout from "@/layout/DefaultLayout";
import { Toaster } from "react-hot-toast";
function App() {
	return (
		<>
			<div className="min-h-screen transition-all duration-300 flex items-center justify-center p-6">
				<DefaultLayout />
			</div>
			<Toaster position="bottom-right" reverseOrder={false} />
		</>
	);
}

export default App;
