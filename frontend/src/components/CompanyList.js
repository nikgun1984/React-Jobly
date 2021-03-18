import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Company from "./Company";
import JoblyApi from "../api";

const CompanyList = () => {
	const INITIAL_STATE = {
		name: "",
		minEmployees: "",
		maxEmployees: "",
	};
	const [companies, setCompanies] = useState([]);
	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};

	async function fetchData() {
		const companies = await JoblyApi.getCompanies(formData);
		setCompanies(companies);
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
									name="name"
									placeholder="Search by Company Name"
									onChange={handleChange}
									value={formData.name}
								/>
							</Col>
							<Col xs="auto">
								<Form.Control
									className="mb-2"
									type="number"
									id="minEmployees"
									name="minEmployees"
									placeholder="Min Employees"
									onChange={handleChange}
									value={formData.minEmployees}
								/>
							</Col>
							<Col xs="auto">
								<Form.Control
									className="mb-2"
									type="number"
									id="maxEmployees"
									name="maxEmployees"
									placeholder="Max Employees"
									onChange={handleChange}
									value={formData.maxEmployees}
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
						{companies.map((company) => (
							<Col className="m-3" key={company.handle}>
								<Company
									id={company.handle}
									name={company.name}
									description={company.description}
									numEmployees={company.numEmployees}
									logoURL={company.logoUrl}
								/>
							</Col>
						))}
					</Row>
				</Jumbotron>
			</Container>
		</div>
	);
};

export default CompanyList;
