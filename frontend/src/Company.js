import Card from "react-bootstrap/Card";

const Company = (props) => {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>Company: {props.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Number of employees: ${props.numEmployees}
					</Card.Subtitle>
					<Card.Text>{props.description}</Card.Text>
					<Card.Link href="#">{props.logoURL}</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</Card>
		</>
	);
};

export default Company;
