import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect, useRef } from 'react';

const TicTacToe = ({n}) => {
    const array = Array(n).fill(null).map((row) => Array(n).fill(null));

    const [board, setBoard] = useState(array);
    const [turn, setTurn] = useState('X');
    const [clickedIndex, setClickedIndex] = useState({ri: null, ci: null});

    const onCellClick = (ri, ci) => {
        setClickedIndex({ri, ci});
        const newBoard = board.map((row, rowIndex) => row.map((col, colIndex) => {
            if(rowIndex === ri && colIndex === ci) {
                return turn;
            } else {
                return col;
            }
        }));
        setBoard(newBoard);
    }

    const updateTurn = () => {
        turn === 'X' ? setTurn('O') : setTurn('X');
    }

    const evaluateGame = () => {
        const {ri, ci} = clickedIndex;
        console.log('clickedIndex', clickedIndex, board[ri]);
        const rowMatch = board[ri].every((cell) => cell === turn);
        console.log('rmatch', rowMatch);
        const colMatch = board.every((row) => row[ci] === turn);
        console.log('cmatch', colMatch);
    }

    useEffect(() => {
        const {ri, ci} = clickedIndex;
        if(typeof ri !== 'number' && typeof ci !== 'number') {
            return
        }
        evaluateGame();
        updateTurn();
    }, [clickedIndex])

    return(
        <div>
            <div>Showing game for {n}*{n}</div>
            <div></div>
            <div className=''>{
                board.map((row, rowIndex) => {
                    return (
                        <div className='flex' key = {rowIndex}>{
                            row.map((cell, colIndex) => {
                                return (
                                    <button
                                        key = {colIndex}
                                        onClick={() => onCellClick(rowIndex, colIndex)}
                                        disabled = {cell} 
                                        className='h-[48px] w-[48px] border border-gray-500 text-3xl font-bold'
                                    >{cell}</button>
                                )
                            })
                        }</div>
                    )
                })
            }</div>
        </div>
    )
}

export default TicTacToe;