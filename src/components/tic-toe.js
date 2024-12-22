import React, { useState, useEffect, useRef } from 'react';

const Game = ({n}) => {
    const twoDArray = Array(n).fill(null).map((row)=>{return Array(n).fill(null)});
    const [board, setBoard] = useState(twoDArray);
    const [turn, setTurn] = useState('X');

    const onCellClick = (ri, ci) => {
       const newBoard = board.map((row, r) => {
        return row.map((cell, c) => {
            if(r === ri && c === ci && board[r][c] === null) {
                if(turn === 'X') {
                    return board[r][c] = 'X';
                } else {
                    return board[r][c] = 'O';
                }
            } else {
                return board[r][c];
            }
        })
       })
       setBoard(newBoard);
       if(checkWinner(board, ri, ci)) {
        alert(`Won ${turn}`);
       }else {
        setTurn(turn === "X" ? "O" : "X");
       }

    }


    const checkWinner = (board, row, col) => {
        // Check row
        if (board[row].every(cell => cell === turn)) return true;
    
        // Check column
        if (board.every(r => r[col] === turn)) return true;
    
        // Check main diagonal
        if (row === col && board.every((r, i) => r[i] === turn)) return true;
    
        // Check anti-diagonal
        if (row + col === n - 1 && board.every((r, i) => r[n - 1 - i] === turn)) return true;
    
        return false;
      };

    return (
        <div>
            <h1>Game</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${n}, 50px)`,
                    justifyContent: "center",
                }}
            >
                {
                    board.map((row, ri) => {
                      return row.map((cell, ci) => {
                        return (
                            <div 
                                key = {ri+ci}
                                style = {{
                                    width: 50,
                                    height: 50,
                                    border: '1px solid black',
                                }}
                                onClick = {() => onCellClick(ri, ci)}
                            >{cell}</div>
                        )
                      })
                    })
                }
            </div>
        </div>
    )
}

export default Game;