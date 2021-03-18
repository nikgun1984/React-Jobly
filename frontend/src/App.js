import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes />
			</BrowserRouter>
		</div>
	);
}

export default App;
