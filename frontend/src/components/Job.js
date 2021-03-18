import Card from "react-bootstrap/Card";

const Job = (props) => {
	return (
		<>
			<Card style={{ width: "18rem" }} id={props.id}>
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Salary: {props.salary}
					</Card.Subtitle>
					<Card.Text>{props.companyName}</Card.Text>
					{props.equity ? <Card.Text>{props.equity}</Card.Text> : ""}
				</Card.Body>
			</Card>
		</>
	);
};

export default Job;
