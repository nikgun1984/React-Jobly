import Card from "react-bootstrap/Card";

const Job = (props) => {
	return (
		<>
			<Card style={{ width: "18rem" }} id={props.id}>
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<hr />
					<Card.Subtitle className="mb-2 text-muted">
						Salary: {props.salary ? props.salary : "Not specified"}
					</Card.Subtitle>
					<Card.Text>{props.companyName}</Card.Text>
					{props.equity ? (
						<Card.Text>
							<b>Equity:</b> {props.equity}
						</Card.Text>
					) : (
						""
					)}
				</Card.Body>
			</Card>
		</>
	);
};

export default Job;
