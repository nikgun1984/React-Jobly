import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import useLocalStorageState from "../hooks/useLocalStorageState";
import { useContext } from "react";
import UserContext from "../UserContext";

const useStyles = makeStyles(() => ({
	link: {
		marginRight: "10px",
		color: "white",
		fontSize: "1rem",
		textDecoration: "none",
		"&:hover": {
			color: "#FFCCE5",
			textDecoration: "none",
		},
	},
	active: {
		fontWeight: "bolder",
		color: "white",
	},
	title: {
		flexGrow: 1,
		textAlign: "left",
		fontSize: "1.5rem",
	},
	linkTitle: {
		color: "white",
		"&:hover": {
			color: "#FFCCE5",
			textDecoration: "none",
		},
	},
}));

export default function NavBar() {
	const classes = useStyles();
	const { token, setToken } = useContext(UserContext);

	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<NavLink exact to="/" className={classes.linkTitle}>
							Jobly
						</NavLink>
					</Typography>
					{!token ? (
						<>
							<NavLink
								exact
								to="/login"
								activeClassName={classes.active}
								className={classes.link}
							>
								Login
							</NavLink>
							<NavLink
								exact
								to="/register"
								activeClassName={classes.active}
								className={classes.link}
							>
								Sign Up
							</NavLink>
						</>
					) : (
						<NavLink
							exact
							to="/"
							activeClassName={classes.active}
							className={classes.link}
							onClick={() => setToken("")}
						>
							Sign Out
						</NavLink>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
