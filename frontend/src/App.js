import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserLoginForm from "./UserLoginForm";
import UserRegisterForm from "./UserRegisterForm";
import { makeStyles } from "@material-ui/core/styles";
import MainPage from "./MainPage";

const useStyles = makeStyles((theme) => ({
	space: {
		marginTop: "4rem",
	},
	center: {
		marginTop: "30vh",
		marginBottom: "4rem",
		color: "#0000FF",
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div className="App">
			{/* <header className="App-header"> */}
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/login">
						<h1 className={classes.space}>Login</h1>
						<UserLoginForm />
					</Route>
					<Route exact path="/register">
						<h1 className={classes.space}>Sign Up</h1>
						<UserRegisterForm />
					</Route>
					<Route exact path="/">
						<h1 className={classes.center}>Welcome to Jobly Home Page</h1>
						<h4>Keep Searching and You Find it</h4>
						<MainPage />
					</Route>
				</Switch>
			</BrowserRouter>
			{/* </header> */}
		</div>
	);
}

export default App;
