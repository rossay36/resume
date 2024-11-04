import Resume from "./components/Resume";
const App = () => {
	return (
		<div
			style={{
				display: "flex",
				maxWidth: "100vw",
				minHeight: "100vh",
				justifyContent: "center",
			}}
		>
			<Resume />
		</div>
	);
};

export default App;
