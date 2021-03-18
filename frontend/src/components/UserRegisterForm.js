import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

const UserRegisterForm = () => {
	return (
		<>
			<Container>
				<Row className="justify-content-md-center">
					<Col sm={5}>
						<Jumbotron>
							<Form>
								<Form.Group controlId="registerUserName">
									<Form.Control type="text" placeholder="Enter your username" />
								</Form.Group>

								<Form.Group controlId="registerUserPassword">
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<Form.Group controlId="registerUserFirstName">
									<Form.Control type="text" placeholder="First Name" />
								</Form.Group>
								<Form.Group controlId="registerUserLastName">
									<Form.Control type="text" placeholder="Last Name" />
								</Form.Group>
								<Form.Group controlId="registerUserLastName">
									<Form.Control type="email" placeholder="Email" />
								</Form.Group>
								<Form.Text className="text-muted">
									<NavLink exact to="/login">
										Already Registered? Login Here
									</NavLink>
								</Form.Text>
								<Button variant="primary" type="submit" className="mt-3">
									Sign Up
								</Button>
							</Form>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default UserRegisterForm;
