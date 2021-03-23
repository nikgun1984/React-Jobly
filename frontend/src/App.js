import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import UserContext from "./UserContext";
import useLocalStorageState from "./hooks/useLocalStorageState";
import useCurrUserInfoState from "./hooks/useCurrUserInfoState";

function App() {
	const [token, setToken] = useLocalStorageState("token", "");
	const [currUser, setCurrUser] = useLocalStorageState("username", "");
	const [currUserInfo, setCurrUserInfo] = useCurrUserInfoState(currUser, token);
	return (
		<div
			className="App"
		>
			<BrowserRouter>
				<UserContext.Provider
					value={{
						token,
						setToken,
						currUser,
						setCurrUser,
						currUserInfo,
						setCurrUserInfo,
					}}
				>
					<NavBar />
					<Routes />
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
