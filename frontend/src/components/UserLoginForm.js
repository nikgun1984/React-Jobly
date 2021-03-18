import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserLoginForm = () => {
	return (
		<>
			<Container>
				<Row className="justify-content-md-center">
					<Col sm={5}>
						<Jumbotron>
							<Form>
								<Form.Group controlId="loginUserName">
									<Form.Control type="text" placeholder="Enter your username" />
								</Form.Group>

								<Form.Group controlId="loginUserPassword">
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
								<Button variant="primary" type="submit" className="mt-3">
									Login
								</Button>
							</Form>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default UserLoginForm;
