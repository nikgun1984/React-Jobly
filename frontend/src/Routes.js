import UserLoginForm from "./components/UserLoginForm";
import UserRegisterForm from "./components/UserRegisterForm";
import { makeStyles } from "@material-ui/core/styles";
import MainPage from "./components/MainPage";
import CompanyList from "./components/CompanyList";
import JobList from "./components/JobList";
import UserPage from "./components/UserPage";
import { Route, Switch } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
	space: {
		marginTop: "8rem",
		marginBottom: "4rem",
	},
	center: {
		marginTop: "30vh",
		marginBottom: "4rem",
		color: "#0000FF",
	},
}));

const Routes = () => {
	const classes = useStyles();
	const { token } = useContext(UserContext);
	return (
		<>
			<Switch>
				<Route exact path="/login">
					<h1 className={classes.space}>Login</h1>
					<UserLoginForm />
				</Route>
				<Route exact path="/register">
					<h1 className={classes.space}>Sign Up</h1>
					<UserRegisterForm />
				</Route>
				<Route exact path="/profile">
					<h1 className={classes.space}>User Profile</h1>
				</Route>
				<Route exact path="/companies/:company">
					<h1 className={classes.space}>Company Blah Blah</h1>
				</Route>
				<Route exact path="/companies">
					<h1 className={classes.space}>Companies</h1>
					<CompanyList />
				</Route>
				<Route exact path="/jobs/:job">
					<h1 className={classes.space}>Job Blah Blah</h1>
				</Route>
				<Route exact path="/jobs">
					<h1 className={classes.space}>Jobs</h1>
					<JobList />
				</Route>
				<Route exact path="/">
					<h1 className={classes.center}>Welcome to Jobly Home Page</h1>
					<h4>Keep Searching and You Find it</h4>
					{token ? <UserPage /> : <MainPage />}
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
