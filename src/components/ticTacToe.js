import React, { useState, useEffect, useRef } from 'react';

const TicTacToe = ({n, playWithCom = false}) => {
    const array = Array(n).fill(null).map((row) => Array(n).fill(null));

    const [board, setBoard] = useState(array);
    const [turn, setTurn] = useState('X');
    const [clickedIndex, setClickedIndex] = useState({ri: null, ci: null});
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(null);

    const onCellClick = (ri, ci) => {
        if(winner || isDraw) {
            return;
        }
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

    // const playComputerTurn = () => {
    //     const possibleMoves = board.reduce((acco, row, ri) => {
    //         const arr = row.reduce((acc, cell, ci) => {
    //             if(!cell) {
    //                 acc = [...acc, {ri, ci}];
    //             }
    //             return acc;
    //         }, []);
    //         return [...acco, ...arr]
    //     },
    //     []);
    //     const randomNumber = Math.floor(Math.random() * possibleMoves.length);
    //     const {ri, ci} = possibleMoves[randomNumber];
    //     onCellClick(ri, ci);
    //     // console.log(possibleMoves, randomNumber);
    // }

    const playComputerTurnForWin = () => {
        const possibleMoves = board.reduce((acco, row, ri) => {
            const arr = row.reduce((acc, cell, ci) => {
                if (!cell) acc.push({ ri, ci });
                return acc;
            }, []);
            return [...acco, ...arr];
        }, []);
    
        // Helper function to evaluate a winning state for a player
        const isWinningMove = (tempBoard, player) => {
            // Check rows and columns
            for (let i = 0; i < n; i++) {
                const rowWin = tempBoard[i].every(cell => cell === player);
                const colWin = tempBoard.every(row => row[i] === player);
                if (rowWin || colWin) return true;
            }
            // Check diagonals
            const mainDiagonalWin = tempBoard.every((row, i) => row[i] === player);
            const antiDiagonalWin = tempBoard.every((row, i) => row[n - i - 1] === player);
            return mainDiagonalWin || antiDiagonalWin;
        };
    
        // Check for a winning move
        for (const { ri, ci } of possibleMoves) {
            const tempBoard = board.map(row => [...row]); // Clone the board
            tempBoard[ri][ci] = 'O'; // Assume computer is 'O'
            if (isWinningMove(tempBoard, 'O')) {
                onCellClick(ri, ci);
                return;
            }
        }
    
        // Check for a blocking move
        for (const { ri, ci } of possibleMoves) {
            const tempBoard = board.map(row => [...row]); // Clone the board
            tempBoard[ri][ci] = 'X'; // Assume opponent is 'X'
            if (isWinningMove(tempBoard, 'X')) {
                onCellClick(ri, ci); // Block the opponent
                return;
            }
        }
    
        // Fallback: Play the center if available
        const center = Math.floor(n / 2);
        if (!board[center][center]) {
            onCellClick(center, center);
            return;
        }
    
        // Fallback: Play any corner if available
        const corners = [
            { ri: 0, ci: 0 },
            { ri: 0, ci: n - 1 },
            { ri: n - 1, ci: 0 },
            { ri: n - 1, ci: n - 1 },
        ];
        for (const { ri, ci } of corners) {
            if (!board[ri][ci]) {
                onCellClick(ri, ci);
                return;
            }
        }
    
        // Fallback: Play randomly
        const randomNumber = Math.floor(Math.random() * possibleMoves.length);
        const { ri, ci } = possibleMoves[randomNumber];
        onCellClick(ri, ci);
    };
    

    const updateTurn = () => {
        turn === 'X' ? setTurn('O') : setTurn('X');
    }

    const reset = () => {
        setBoard(array);
        setTurn('X');
        setWinner(null);
        setClickedIndex({ri: null, ci: null})
    }


    const evaluateGame = () => {
        const {ri, ci} = clickedIndex;
        const rowMatch = board[ri].every((cell) => cell === turn);
        const colMatch = board.every((row) => row[ci] === turn);
        const digonalMatch = board.every((row, rIndex) => row[rIndex] === turn);
        const reverseDigonalMatch = board.every((row, rIndex) => row[n - rIndex - 1] === turn);
        if(rowMatch || colMatch || digonalMatch || reverseDigonalMatch) {
            setWinner(turn);
        } else if(board.flat().every((cell) => cell !== null)) {
            setIsDraw(true);
        }else {
            updateTurn();
        } 
    }

    useEffect(() => {
        if(turn === 'O') {
            setTimeout(() => playComputerTurnForWin(), 1000)
        }
    }, [turn]);

    useEffect(() => {
        const {ri, ci} = clickedIndex;
        if(typeof ri !== 'number' && typeof ci !== 'number') {
            return
        }
        evaluateGame();
    }, [clickedIndex])

    return(
        <div>
            <div>Showing game for {n}*{n}</div>
            { winner ? <div className='text-green-600 text-2xl font-bold'>Yeyyyy {winner} wins</div> : null}
            { isDraw ? <div className='text-red-600 text-2xl font-bold'>Its a draw</div> : null}
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
            {winner || isDraw ? <button onClick={() => reset()} className='px-4 py-2 bg-blue-600 rounded-lg mt-2 text-white'>Reset</button> : null}
        </div>
    )
}

export default TicTacToe;