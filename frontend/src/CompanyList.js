import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Company from "./Company";

const CompanyList = () => {
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		async function getData() {
			const res = await axios.get(`http://localhost:3001/companies`);
			setCompanies((companies) => [...res.data.companies]);
			console.log(companies);
		}
		getData();
	}, []);
	return (
		<div>
			<Container>
				<Jumbotron>
					<Form>
						<Form.Row className="align-items-center">
							<Col>
								<Form.Control
									className="mb-2"
									type="text"
									placeholder="Search by Company Name"
								/>
							</Col>
							<Col xs="auto">
								<Form.Control
									className="mb-2"
									type="number"
									id="minEmployees"
									placeholder="Min Employees"
								/>
							</Col>
							<Col xs="auto">
								<Form.Control
									className="mb-2"
									type="number"
									id="maxEmployees"
									placeholder="Max Employees"
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
							<Col className="m-3">
								<Company
									key={company.handle}
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
