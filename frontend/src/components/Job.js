import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import JoblyApi from '../api';
import UserContext from "../UserContext";
import {useContext} from 'react';


const Job = (props) => {
    const { token, currUser } = useContext(UserContext);

	async function fetchData(token) {
		try {
			await JoblyApi.applyForJob(currUser, props.id, token);
		} catch (err) {
			// setMessage(err[0]);
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		fetchData(token);
	};

	return (
		<>
			<Card style={{ width: "18rem" }} id={props.id}>
				<Card.Body className="d-flex flex-column">
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
					<Card.Link href={`/jobs/${props.id}`} className="mb-5">
						More info...
					</Card.Link>
					<div>
						<Row className="justify-content-center">
							<Col className="d-flex justify-content-center m-3">
								<Form onSubmit={handleSubmit}>
									<Button
										type="submit"
										variant="primary"
										className="align-self-end btn btn-lg mt-auto"
										disabled={props.applied}
									>
										{props.applied?"Applied":"Apply"}
									</Button>
								</Form>
							</Col>
						</Row>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default Job;
