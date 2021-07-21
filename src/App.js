import './App.css';
import { PageWrapper, ContentWrapper, Input, Card, CardTitle, Row, Col, Button } from "reacthalfmoon";

function Block(props) {
	return (
		<div>
			<Row className="h-50">
				<Col className="p-5">
					<Input readOnly value={props.value} className="h-full bg-input text-readonly text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
				<Col className="p-5">
					<Input className="h-full bg-input text-danger text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
				<Col className="p-5">
					<Input className="h-full bg-input text-danger text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
			</Row>
			<Row className="h-50">
				<Col className="p-5">
					<Input className="h-full bg-input text-danger text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
				<Col className="p-5">
					<Input className="h-full bg-input text-danger text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
				<Col className="p-5">
					<Input className="h-full bg-input text-danger text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
			</Row>
			<Row className="h-50">
				<Col className="p-5">
					<Input className="h-full bg-input text-danger text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
				<Col className="p-5">
					<Input className="h-full bg-input text-danger text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
				<Col className="p-5">
					<Input className="h-full bg-input text-danger text-center border-0 font-size-18 font-weight-bold" min="1" max="9" type="number"></Input>
				</Col>
			</Row>
		</div>
	)
}

export default function App() {
	return (
		<PageWrapper>
			<ContentWrapper className="h-full d-flex justify-content-center align-items-center">
				<Card style={{ width: "max-content" }} className="text-center">
					<CardTitle className="text-primary mb-10"><h2>Sudoku</h2></CardTitle>
					<Row className="h-150 w-450">
						<Col><Block value={1} /></Col>
						<Col><Block value={2} /></Col>
						<Col><Block value={3} /></Col>
					</Row>
					<Row className="h-150 w-450">
						<Col><Block value={4} /></Col>
						<Col><Block value={5} /></Col>
						<Col><Block value={6} /></Col>
					</Row>
					<Row className="h-150 w-450">
						<Col><Block value={7} /></Col>
						<Col><Block value={8} /></Col>
						<Col><Block value={9} /></Col>
					</Row>
					<div className="d-flex justify-content-around mt-20">
						<Button color="danger" size="lg">Reset</Button>
						<Button color="secondary" size="lg">New game</Button>
						<Button color="success" size="lg">Check</Button>
					</div>
				</Card>
			</ContentWrapper>
		</PageWrapper>
	)
}