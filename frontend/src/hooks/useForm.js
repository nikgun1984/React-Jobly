import { useState } from "react";
import JoblyApi from "../api";

const useForm = (inputs, url) => {
	const [formData, setFormData] = useState(inputs);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};
};
