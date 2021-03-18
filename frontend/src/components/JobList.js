import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Job from "./Job";
import JoblyApi from "../api";

const JobList = () => {
	const INITIAL_STATE = {
		title: "",
		minSalary: "",
		hasEquity: false,
	};
	const [jobs, setJobs] = useState([]);
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};

	const handleClick = (evt) => {
		const { name } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: !formData.hasEquity,
		}));
	};

	async function fetchData() {
		const jobs = await JoblyApi.getJobs(formData);
		setJobs(jobs);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		fetchData();
		setFormData(INITIAL_STATE);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<Container>
				<Jumbotron>
					<Form onSubmit={handleSubmit}>
						<Form.Row className="align-items-center">
							<Col>
								<Form.Control
									className="mb-2"
									type="text"
									name="title"
									placeholder="Search by Title of a Job"
									onChange={handleChange}
									value={formData.title}
								/>
							</Col>
							<Col xs="auto">
								<Form.Control
									className="mb-2"
									type="number"
									id="minSalary"
									name="minSalary"
									placeholder="Min Salary"
									min="0"
									onChange={handleChange}
									value={formData.minEmployees}
								/>
							</Col>
							<Col xs="auto">
								<Form.Check
									className="mb-2"
									type="checkbox"
									id="hasEquity"
									name="hasEquity"
									label={`Equity?`}
									onChange={handleClick}
									value={formData.hasEquity}
								/>
							</Col>
							<Col>
								<Button variant="primary" type="submit">
									Search
								</Button>
							</Col>
						</Form.Row>
					</Form>
					<Row className="justify-content center text-center">
						{jobs.map((job) => (
							<Col className="m-3" key={job.id}>
								<Job
									id={job.id}
									title={job.title}
									salary={job.salary}
									equity={job.equity}
									companyName={job.companyName}
								/>
							</Col>
						))}
					</Row>
				</Jumbotron>
			</Container>
		</div>
	);
};

export default JobList;
