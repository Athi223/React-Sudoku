import AppComponent from './AppComponent'
import { useState, useEffect } from "react"
import { blink, checkMatrix } from 'sudoku-matrix'

export default function App() {
	const [ difficultyModal, setdifficultyModal ] = useState(false)
	const [ resultModal, setResultModal ] = useState(false)
	const [ result, setResult ] = useState(false)
	const [ board, setBoard ] = useState([ [], [], [], [], [], [], [], [], [] ])
	const [ empty, setEmpty ] = useState([ [], [], [], [], [], [], [], [], [] ])
	const createGame = (emptyTiles) => {
		const sudoku = blink(emptyTiles)
		setBoard(sudoku)
		let _empty = []
		for(let i=0; i<9; ++i) {
			_empty.push([])
			for(let j=0; j<9; ++j) {
				if(sudoku[i][j] === '')
					_empty[i].push(j)
			}
		}
		setEmpty(_empty)
	}
	const newGame = () => {
		setdifficultyModal(true)
	}
	const checkGame = () => {
		setResult(checkMatrix(board) === true)
		setResultModal(true)
	}
	const resetGame = () => {
		let sudoku = [ ...board ]
		let _empty = [ ...empty ]
		for(let i=0; i<9; ++i) {
			_empty[i].forEach(j => sudoku[i][j] = '')
		}
		setBoard(sudoku)
	}
	const setDifficulty = (difficulty) => {
		switch(difficulty) {
			case 0:
				createGame(20)
				break
			case 1:
				createGame(30)
				break
			default:
				createGame(40)
				break
		}
		setdifficultyModal(false)
	}
	const update =(e, row, col) => {
		let sudoku = [ ...board ]
		sudoku[row][col] = e.target.value
		setBoard(sudoku)
	}
	useEffect(() => {
		newGame()
	}, [])
	return (
		<AppComponent
			board={board} update={update} empty={empty} result={result} difficultyModal={difficultyModal} setResultModal={setResultModal}
			newGame={newGame} resultModal={resultModal} checkgame={checkGame} resetGame={resetGame} setDifficulty={setDifficulty}
		/>
	)
}