import { useState, useEffect } from "react";
import JoblyApi from "../api";

const useCurrUserInfoState = (username) => {
	const INITIAL_VALUES = {
		user: {
			username: username,
			password: "",
			firstName: "",
			lastName: "",
			email: "",
		},
	};
	const [currUser, setCurrUser] = useState(INITIAL_VALUES);

	useEffect(() => {
		async function getUserInfo() {
			const userInfo = await JoblyApi.getUserInfo(username);
			console.log(userInfo);
			setCurrUser((user) => {});
		}
		if (username) getUserInfo();
	}, [currUser]);

	return [currUser, setCurrUser];
};

export default useCurrUserInfoState;
