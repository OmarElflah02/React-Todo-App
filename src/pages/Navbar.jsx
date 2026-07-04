import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
	return (
		<header className="flex items-center justify-between mb-8">
			<div>
				<h1 className="text-3xl font-bold">Todo App</h1>
				<p className="text-muted-foreground">Manage your daily tasks</p>
			</div>
			<ThemeToggle />
		</header>
	);
}
