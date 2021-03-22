import { useState, useEffect } from "react";
import JoblyApi from "../api";

const useCurrUserInfoState = (username, token) => {
	const [state, setState] = useState({});

	useEffect(() => {
		username &&
			token &&
			JoblyApi.getUserInfo(username, token).then((response) => {
				setState(response.user);
			});
	}, [username, token]);

	return [state, setState];
};

export default useCurrUserInfoState;
