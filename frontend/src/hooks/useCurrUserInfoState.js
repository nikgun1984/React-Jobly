import { useState, useEffect } from "react";
import JoblyApi from "../api";

const useCurrUserInfoState = (username, token) => {
	const [state, setState] = useState({});
	useEffect(() => {
		async function setInfo() {
			let res = await JoblyApi.getUserInfo(username, token);
			setState((state) => ({
				...state,
				firstName: res.user.firstName,
				lastName: res.user.lastName,
				email: res.user.email,
				applications: res.user.applications,
			}));
		}
		if (username) {
			setInfo();
		}
	}, [
		username,
		token,
		state.firstName,
		state.lastName,
		state.email,
		state.applications,
	]);

	return [state, setState];
};

export default useCurrUserInfoState;
