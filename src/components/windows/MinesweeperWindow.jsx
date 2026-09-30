import React, { useState, useEffect } from 'react';
import { Flag, Bomb, RefreshCw, Trophy } from 'lucide-react';
import { playClickSound, playAsteriskSound, playWin95TaDa } from '../../utils/audio';

const ROWS = 9;
const COLS = 9;
const MINES = 10;

export default function MinesweeperWindow() {
  const [grid, setGrid] = useState([]);
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'playing' | 'won' | 'lost'
  const [mineCount, setMineCount] = useState(MINES);
  const [timer, setTimer] = useState(0);

  // Initialize Board
  const initBoard = () => {
    playClickSound();
    let board = Array(ROWS).fill(null).map(() =>
      Array(COLS).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0
      }))
    );

    // Place Mines
    let placed = 0;
    while (placed < MINES) {
      const r = Math.floor(Math.random() * ROWS);
      const c = Math.floor(Math.random() * COLS);
      if (!board[r][c].isMine) {
        board[r][c].isMine = true;
        placed++;
      }
    }

    // Calculate Neighbors
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!board[r][c].isMine) {
          let count = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr;
              const nc = c + dc;
              if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].isMine) {
                count++;
              }
            }
          }
          board[r][c].neighborMines = count;
        }
      }
    }

    setGrid(board);
    setGameState('playing');
    setMineCount(MINES);
    setTimer(0);
  };

  useEffect(() => {
    initBoard();
  }, []);

  // Timer Tick
  useEffect(() => {
    let interval;
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setTimer((t) => Math.min(t + 1, 999));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState]);

  // Reveal Cell
  const revealCell = (r, c) => {
    if (gameState !== 'playing' || grid[r][c].isRevealed || grid[r][c].isFlagged) return;

    playClickSound();
    const newGrid = JSON.parse(JSON.stringify(grid));

    if (newGrid[r][c].isMine) {
      // Hit Mine! Game Over
      playAsteriskSound();
      setGameState('lost');
      // Reveal all mines
      for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
          if (newGrid[i][j].isMine) newGrid[i][j].isRevealed = true;
        }
      }
      setGrid(newGrid);
      return;
    }

    // Flood fill reveal
    const revealRecursive = (board, row, col) => {
      if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return;
      if (board[row][col].isRevealed || board[row][col].isFlagged) return;

      board[row][col].isRevealed = true;

      if (board[row][col].neighborMines === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr !== 0 || dc !== 0) {
              revealRecursive(board, row + dr, col + dc);
            }
          }
        }
      }
    };

    revealRecursive(newGrid, r, c);

    // Check Win
    let unrevealedNonMines = 0;
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (!newGrid[i][j].isMine && !newGrid[i][j].isRevealed) {
          unrevealedNonMines++;
        }
      }
    }

    if (unrevealedNonMines === 0) {
      playWin95TaDa();
      setGameState('won');
    }

    setGrid(newGrid);
  };

  // Toggle Flag
  const toggleFlag = (e, r, c) => {
    e.preventDefault();
    if (gameState !== 'playing' || grid[r][c].isRevealed) return;

    playClickSound();
    const newGrid = JSON.parse(JSON.stringify(grid));
    const cell = newGrid[r][c];

    if (!cell.isFlagged && mineCount > 0) {
      cell.isFlagged = true;
      setMineCount((prev) => prev - 1);
    } else if (cell.isFlagged) {
      cell.isFlagged = false;
      setMineCount((prev) => prev + 1);
    }

    setGrid(newGrid);
  };

  // Get Number Color
  const getNumColor = (n) => {
    const colors = ['', '#0000ff', '#008000', '#ff0000', '#000080', '#800000', '#008080', '#000000', '#808080'];
    return colors[n] || '#000';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <div style={{ fontSize: '13px', color: '#333', fontWeight: 'bold' }}>
        🎮 Windows 95 AI 마인스위퍼 미니게임
      </div>

      {/* Game Window Box */}
      <div
        className="win-outset"
        style={{ padding: '10px', background: 'var(--win-gray)', display: 'inline-block' }}
      >
        {/* Header Board */}
        <div
          className="win-inset"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '4px 8px',
            marginBottom: '10px',
            background: 'var(--win-gray)'
          }}
        >
          {/* Mine Counter */}
          <div
            className="win-inset"
            style={{
              background: '#000',
              color: '#ff0000',
              fontFamily: 'VT323, monospace',
              fontSize: '22px',
              padding: '1px 6px',
              fontWeight: 'bold'
            }}
          >
            {String(mineCount).padStart(3, '0')}
          </div>

          {/* Smiley Button */}
          <button
            className="win-btn"
            style={{ padding: '2px 6px', fontSize: '18px' }}
            onClick={initBoard}
            title="새 게임 시작"
          >
            {gameState === 'lost' ? '😵' : gameState === 'won' ? '😎' : '😃'}
          </button>

          {/* Timer */}
          <div
            className="win-inset"
            style={{
              background: '#000',
              color: '#ff0000',
              fontFamily: 'VT323, monospace',
              fontSize: '22px',
              padding: '1px 6px',
              fontWeight: 'bold'
            }}
          >
            {String(timer).padStart(3, '0')}
          </div>
        </div>

        {/* Board Grid */}
        <div
          className="win-inset"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, 24px)`,
            gap: '1px',
            background: '#808080',
            border: '2px solid #808080'
          }}
        >
          {grid.map((row, r) =>
            row.map((cell, c) => {
              if (cell.isRevealed) {
                return (
                  <div
                    key={`${r}-${c}`}
                    style={{
                      width: '24px',
                      height: '24px',
                      background: '#c0c0c0',
                      border: '1px solid #7b7b7b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '13px',
                      color: getNumColor(cell.neighborMines)
                    }}
                  >
                    {cell.isMine ? '💣' : cell.neighborMines > 0 ? cell.neighborMines : ''}
                  </div>
                );
              }

              return (
                <button
                  key={`${r}-${c}`}
                  className="win-outset"
                  style={{
                    width: '24px',
                    height: '24px',
                    padding: 0,
                    minWidth: '24px',
                    fontSize: '11px',
                    lineHeight: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => revealCell(r, c)}
                  onContextMenu={(e) => toggleFlag(e, r, c)}
                >
                  {cell.isFlagged ? '🚩' : ''}
                </button>
              );
            })
          )}
        </div>
      </div>

      {gameState === 'won' && (
        <div style={{ fontSize: '13px', color: '#008000', fontWeight: 'bold' }}>
          🎉 승리하셨습니다! AI 아이디어톤에 도전해 보세요!
        </div>
      )}
      {gameState === 'lost' && (
        <div style={{ fontSize: '13px', color: '#ff0000', fontWeight: 'bold' }}>
          💥 지뢰를 밟았습니다! 스마일리 버튼을 눌러 다시 시도하세요.
        </div>
      )}
    </div>
  );
}
