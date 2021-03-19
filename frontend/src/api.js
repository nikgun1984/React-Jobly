import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
	// the token for interactive with the API will be stored here.
	static token;

	static async request(endpoint, data = {}, method = "get") {
		console.debug("API Call:", endpoint, data, method);

		const url = `${BASE_URL}/${endpoint}`;
		const headers = { Authorization: `Bearer ${JoblyApi.token}` };
		let params; // = method === "get" ? data : {};
		switch (method) {
			case "get":
			case "post":
				params = data;
				break;
			default:
				params = {};
		}

		try {
			return (await axios({ url, method, data, params, headers })).data;
		} catch (err) {
			console.error("API Error:", err.response);
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [message];
		}
	}

	// Individual API routes

	/** Get details on a company by handle. */

	static async getCompany(handle) {
		let res = await this.request(`companies/${handle}`);
		return res.companies;
	}

	/* Get Details of Companies or Jobs( with filters or without )*/

	static async getComponents(formData, url) {
		const paramData = {};
		for (let el of Object.keys(formData)) {
			if (formData[el]) {
				paramData[el] = formData[el];
			}
		}
		let res = await this.request(url, paramData);
		return res[url];
	}

	/* Authorize a user to be able to see other features -- login/register */

	static async getAuthorization(formData, url) {
		let res = await this.request(`auth/${url}`, formData, "post");
		return res;
	}
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
	"SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
	"FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
