import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultVal) => {
	const [state, setState] = useState(() => {
		let value = localStorage.getItem(key) || defaultVal;
		return value;
	});

	useEffect(() => {
		window.localStorage.setItem(key, state);
	}, [state]);

	return [state, setState];
};

export default useLocalStorageState;