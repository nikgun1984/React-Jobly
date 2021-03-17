import Card from "react-bootstrap/Card";

const Company = (props) => {
	return (
		<>
			<Card style={{ width: "18rem" }} id={props.id}>
				<Card.Body>
					<Card.Title>Company: {props.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Number of employees: {props.numEmployees}
					</Card.Subtitle>
					<Card.Text>{props.description}</Card.Text>
					{/* <Card.Link href="#">{props.logoURL}</Card.Link> */}
					<Card.Link href="#">{`https://${props.id}.com`}</Card.Link>
				</Card.Body>
			</Card>
		</>
	);
};

export default Company;
