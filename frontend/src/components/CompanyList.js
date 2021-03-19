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
		const companies = await JoblyApi.getComponents(formData, "companies");
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
			<Container fluid>
				<Jumbotron>
					<Row>
						{/* <Col sm="1" xs="12">
							<Form.Label column>Search for Companies</Form.Label>
						</Col> */}
						<Col className="d-flex justify-content-center m-3">
							<Form onSubmit={handleSubmit} className="mb-2">
								<Form.Row className="align-items-center">
									<Col lg="3" xs="12">
										<Form.Label column>Search for Companies</Form.Label>
									</Col>
									<Col lg="3" xs="12" mb>
										<Form.Control
											className="my-2"
											type="text"
											name="name"
											placeholder="Company Name"
											onChange={handleChange}
											value={formData.name}
										/>
									</Col>
									<Col lg="2" md="3" xs="12">
										<Form.Control
											className="my-2"
											type="number"
											id="minEmployees"
											name="minEmployees"
											min="0"
											placeholder="Min Employees"
											onChange={handleChange}
											value={formData.minEmployees}
										/>
									</Col>
									<Col lg="2" md="3" xs="12">
										<Form.Control
											className="my-2"
											type="number"
											id="maxEmployees"
											name="maxEmployees"
											min="0"
											placeholder="Max Employees"
											onChange={handleChange}
											value={formData.maxEmployees}
										/>
									</Col>
									<Col md="2" xs="12">
										<Button variant="primary" type="submit">
											Search
										</Button>
									</Col>
								</Form.Row>
							</Form>
						</Col>
					</Row>
					<Row>
						{companies.map((company) => (
							<Col
								className="d-flex justify-content-center m-3"
								key={company.handle}
							>
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
