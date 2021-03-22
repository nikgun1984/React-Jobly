import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserContext from "../UserContext";

const UserInfo = () => {
	const { token, currUserInfo, setCurrUserInfo } = useContext(UserContext);
	const INITIAL_STATE = {
		username: currUserInfo.username,
		password: currUserInfo.username,
		firstName: currUserInfo.firstName,
		lastName: currUserInfo.lastName,
		email: currUserInfo.email,
	};
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((data) => ({
			...data,
			[name]: value,
		}));
	};

	// async function fetchData() {
	// 	const data = await JoblyApi.getAuthorization(formData, "register");
	// 	if (token) {
	// 		setCurrUser(formData.username);
	// 		setCurrUserInfo((prevState) => ({
	// 			user: {
	// 				...formData,
	// 			},
	// 		}));
	// 		setFormData(INITIAL_STATE);
	// 		history.push("/");
	// 	}
	// }
	return (
		<>
			<Container>
				<Row className="justify-content-md-center">
					<Col sm={5}>
						<Jumbotron>
							<h1>Edit Profile</h1>
							<h1 className="border rounded">
								<i className="fas fa-user-tie border border-dark rounded"></i>
							</h1>
							<Form>
								<Form.Group controlId="registerUserName">
									<Form.Control
										type="text"
										name="username"
										onChange={handleChange}
										value={formData.username}
										placeholder="Enter your username"
									/>
								</Form.Group>

								<Form.Group controlId="registerUserPassword">
									<Form.Control
										type="password"
										name="password"
										onChange={handleChange}
										value={formData.password}
										placeholder="Password"
									/>
								</Form.Group>
								<Form.Group controlId="registerUserFirstName">
									<Form.Control
										type="text"
										name="firstName"
										onChange={handleChange}
										value={formData.firstName}
										placeholder="First Name"
									/>
								</Form.Group>
								<Form.Group controlId="registerUserLastName">
									<Form.Control
										type="text"
										name="lastName"
										onChange={handleChange}
										value={formData.lastName}
										placeholder="Last Name"
									/>
								</Form.Group>
								<Form.Group controlId="registerUserLastName">
									<Form.Control
										type="email"
										name="email"
										onChange={handleChange}
										value={formData.email}
										placeholder="Email"
									/>
								</Form.Group>
								<Button variant="primary" type="submit" className="mt-3 mr-3">
									Edit Profile
								</Button>
								<Button variant="primary" type="submit" className="mt-3">
									Delete Profile
								</Button>
							</Form>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default UserInfo;
