import React, { useState, useEffect } from 'react';

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[newSnake.length - 1];
    let newHead;

    switch (direction) {
      case 'UP':
        newHead = { x: head.x, y: head.y - 1 };
        break;
      case 'DOWN':
        newHead = { x: head.x, y: head.y + 1 };
        break;
      case 'LEFT':
        newHead = { x: head.x - 1, y: head.y };
        break;
      case 'RIGHT':
        newHead = { x: head.x + 1, y: head.y };
        break;
      default:
        return;
    }

    newSnake.push(newHead);
    newSnake.shift();

    // Check for collisions
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood({ x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) });
      newSnake.unshift(snake[0]); // Grow snake
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
      if (e.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
      if (e.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
      if (e.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(() => moveSnake(), 500);
    return () => clearInterval(interval);
  }, [snake, direction]);

  return (
    <div>
      <h1>Snake Game</h1>
      {gameOver ? (
        <h2>Game Over</h2>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 20px)', gap: '1px' }}>
          {[...Array(1000)].map((_, idx) => {
            const x = idx % 10;
            const y = Math.floor(idx / 10);
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={idx}
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: isSnake ? 'green' : isFood ? 'red' : 'lightgrey',
                }}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
