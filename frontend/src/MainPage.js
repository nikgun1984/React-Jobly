import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const MainPage = () => {
	return (
		<div>
			{/* <Container>
				<Row className="justify-content-md-center">
					<Col sm={5}> */}
			<NavLink exact to="/login">
				<Button variant="primary" className="mr-3">
					Login
				</Button>
			</NavLink>
			<NavLink exact to="/register">
				<Button variant="primary">Sign Up</Button>
			</NavLink>
			{/* </Col>
				</Row>
			</Container> */}
		</div>
	);
};

export default MainPage;
