import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import UserContext from "./UserContext";
import useLocalStorageState from "./hooks/useLocalStorageState";

function App() {
	const [token, setToken] = useLocalStorageState("token", "");
	return (
		<div className="App">
			<BrowserRouter>
				<UserContext.Provider value={{ token, setToken }}>
					<NavBar />
					<Routes />
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
