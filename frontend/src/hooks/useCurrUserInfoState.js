import { useState, useEffect } from "react";
import JoblyApi from "../api";

const defaultValues = {};
const useCurrUserInfoState = (username, token) => {
	const [state, setState] = useState(defaultValues);
	useEffect(() => {
		async function setInfo() {
			let res = await JoblyApi.getUserInfo(username, token);
			setState({
				firstName: res.user.firstName,
				lastName: res.user.lastName,
				email: res.user.email,
				applications: res.user.applications,
			});
		}
		if (username) {
			setInfo();
		}
	}, []);

	return [state, setState];
};

export default useCurrUserInfoState;
