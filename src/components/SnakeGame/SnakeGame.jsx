import { useState, useEffect, useCallback } from 'react';
import './SnakeGame.css';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const INITIAL_FOOD = { x: 5, y: 5 };

const SnakeGame = ({ onGameOver }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  }, []);

  const handleKeyDown = useCallback((e) => {
    e.preventDefault(); // Prevent scrolling while playing
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  }, [direction]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        // Check Wall Collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check Self Collision
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check Food Collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10);
          setFood(generateFood());
        } else {
          newSnake.pop(); // Remove tail if no food eaten
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, 150 - Math.min(score, 100)); // Speeds up slightly
    return () => clearInterval(gameInterval);
  }, [direction, food, gameOver, score, generateFood]);

  return (
    <div className="snake-game-container">
      <div className="snake-header">
        <span>Score: {score}</span>
        <button className="snake-close-btn" onClick={() => onGameOver(score)}>Exit Game</button>
      </div>
      <div className="snake-grid">
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);
          const isSnakeHead = snake[0].x === x && snake[0].y === y;
          const isSnakeBody = snake.some((segment, idx) => idx !== 0 && segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;

          let cellClass = 'snake-cell';
          if (isSnakeHead) cellClass += ' snake-head';
          else if (isSnakeBody) cellClass += ' snake-body';
          else if (isFood) cellClass += ' snake-food';

          return <div key={i} className={cellClass} />;
        })}
      </div>
      {gameOver && (
        <div className="snake-game-over">
          <h3>GAME OVER</h3>
          <p>Score: {score}</p>
          <button onClick={() => {
            setSnake(INITIAL_SNAKE);
            setDirection(INITIAL_DIRECTION);
            setScore(0);
            setGameOver(false);
          }}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
