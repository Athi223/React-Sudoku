import './App.css';
import Line from "./Line";
import { PageWrapper, ContentWrapper, Card, CardTitle, Button } from "reacthalfmoon";
import DifficultyModal from './DifficultyModal';
import ResultModal from './ResultModal';

export default function AppComponent(props) {
	return (
		<PageWrapper>
			<ContentWrapper className="h-full d-flex justify-content-center align-items-center">
				<Card style={{ width: "max-content" }} className="text-center p-10 p-md-20">
					<CardTitle className="text-primary"><h2>Sudoku</h2></CardTitle>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => 
					<Line key={value} data={props.board[value]} row={value} update={props.update} empty={props.empty} />)}
					<div className="d-flex justify-content-around mt-10 mt-md-20">
						<Button color="secondary" size="lg" onClick={props.resetGame}>Reset</Button>
						<Button color="danger" size="lg" onClick={props.newGame}>New game</Button>
						<Button color="success" size="lg" onClick={props.checkgame}>Check</Button>
					</div>
				</Card>
				<DifficultyModal difficultyModal={props.difficultyModal} setDifficulty={props.setDifficulty} />
				<ResultModal resultModal={props.resultModal} result={props.result} newGame={props.newGame} setResultModal={props.setResultModal} />
			</ContentWrapper>
		</PageWrapper>
	)
}