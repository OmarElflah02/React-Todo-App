import { ClipboardList } from "lucide-react";

export default function EmptyState() {
	return (
		<div className="flex flex-col items-center justify-center py-16 text-center">
			<ClipboardList size={60} className="text-gray-400 mb-4" />
			<h2 className="text-2xl font-bold">No Todos Yet</h2>
			<p className="text-muted-foreground mt-2">Add your first task to get started.</p>
		</div>
	);
}
