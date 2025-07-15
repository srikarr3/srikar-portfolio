import React, { useState, useEffect } from 'react';
import { SiReact, SiNextdotjs, SiVercel, SiTailwindcss, SiNodedotjs, SiTypescript, SiPython, SiJavascript, SiRedux, SiHtml5, SiCss3, SiMongodb, SiMysql, SiGit, SiGithub, SiFirebase } from 'react-icons/si';

// Tech stack progression for 2048 tiles (shared)
const techTiles = [
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-xl md:text-2xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-xl md:text-2xl" /> },
  { name: 'React.js', icon: <SiReact className="text-cyan-400 text-xl md:text-2xl" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-400 text-xl md:text-2xl" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 text-xl md:text-2xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-xl md:text-2xl" /> },
  { name: 'Git', icon: <SiGit className="text-orange-400 text-xl md:text-2xl" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white text-xl md:text-2xl" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white text-xl md:text-2xl" /> },
];

const terminalLines = [
  '> Initializing stack...',
  '> Loading JavaScript...',
  '> Loading TypeScript...',
  '> Loading React.js...',
  '> Loading Redux...',
  '> Loading Node.js...',
  '> Loading MongoDB...',
  '> Loading Git...',
  '> Loading GitHub...',
  '> Loading Vercel...',
  '> Ready! [Press Start]'
];

function TerminalSplash({ onStart }) {
  const [shownLines, setShownLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (shownLines.length < terminalLines.length) {
      const timeout = setTimeout(() => {
        setShownLines(terminalLines.slice(0, shownLines.length + 1));
      }, 350);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [shownLines]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 transition-opacity">
      <div className="w-full max-w-lg mx-auto rounded-lg shadow-2xl bg-[#18181b] border border-green-400 p-6 md:p-10 font-mono text-green-400 text-lg md:text-xl min-h-[340px] flex flex-col items-start">
        <span className="text-green-400 font-bold mb-4 text-2xl md:text-3xl">Playground Terminal</span>
        {shownLines.map((line, i) => (
          <div key={i} className="whitespace-pre leading-relaxed">{line}</div>
        ))}
        {done && (
          <button
            className="mt-8 px-6 py-2 bg-black border border-green-400 text-green-400 font-mono text-lg rounded shadow hover:bg-green-400 hover:text-black transition-colors flex items-center gap-2"
            onClick={onStart}
            autoFocus
          >
            <span>&gt; Start Game</span>
            <span className="animate-pulse">█</span>
          </button>
        )}
      </div>
    </div>
  );
}

function TechStack2048() {
  const GRID_SIZE = 4;
  const [grid, setGrid] = useState(() => initGrid());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  function initGrid() {
    const empty = Array(GRID_SIZE * GRID_SIZE).fill(null);
    return spawnTile(spawnTile(empty));
  }

  function spawnTile(grid) {
    const emptyIndices = grid.map((v, i) => v === null ? i : null).filter(i => i !== null);
    if (emptyIndices.length === 0) return grid;
    const idx = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const newGrid = [...grid];
    newGrid[idx] = 0; // Start with first tech
    return newGrid;
  }

  function canMove(grid) {
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      if (grid[i] === null) return true;
      const row = Math.floor(i / GRID_SIZE);
      const col = i % GRID_SIZE;
      if (col < GRID_SIZE - 1 && grid[i] === grid[i + 1]) return true;
      if (row < GRID_SIZE - 1 && grid[i] === grid[i + GRID_SIZE]) return true;
    }
    return false;
  }

  function move(dir) {
    if (gameOver || won) return;
    let moved = false;
    let newGrid = [...grid];
    let merged = Array(GRID_SIZE * GRID_SIZE).fill(false);
    function index(r, c) { return r * GRID_SIZE + c; }
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        let i = dir === 'left' ? index(r, c)
              : dir === 'right' ? index(r, GRID_SIZE - 1 - c)
              : dir === 'up' ? index(c, r)
              : index(GRID_SIZE - 1 - c, r);
        if (newGrid[i] === null) continue;
        let [nr, nc] = [r, c];
        while (true) {
          let [tr, tc] =
            dir === 'left' ? [nr, nc - 1] :
            dir === 'right' ? [nr, nc + 1] :
            dir === 'up' ? [nr - 1, nc] : [nr + 1, nc];
          if (tr < 0 || tr >= GRID_SIZE || tc < 0 || tc >= GRID_SIZE) break;
          let ti = index(tr, tc);
          if (newGrid[ti] === null) {
            newGrid[ti] = newGrid[index(nr, nc)];
            newGrid[index(nr, nc)] = null;
            nr = tr; nc = tc;
            moved = true;
          } else if (newGrid[ti] === newGrid[index(nr, nc)] && !merged[ti]) {
            newGrid[ti]++;
            setScore(s => s + Math.pow(2, newGrid[ti] + 1) * 10);
            newGrid[index(nr, nc)] = null;
            merged[ti] = true;
            moved = true;
            if (newGrid[ti] === techTiles.length - 1) setWon(true);
            break;
          } else break;
        }
      }
    }
    if (moved) {
      newGrid = spawnTile(newGrid);
      setGrid(newGrid);
      if (!canMove(newGrid)) setGameOver(true);
    }
  }

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') move('left');
      if (e.key === 'ArrowRight') move('right');
      if (e.key === 'ArrowUp') move('up');
      if (e.key === 'ArrowDown') move('down');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line
  }, [grid, gameOver, won]);

  // Touch controls
  useEffect(() => {
    let startX = null, startY = null;
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = (e) => {
      if (startX === null || startY === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 30) move('right');
        else if (dx < -30) move('left');
      } else {
        if (dy > 30) move('down');
        else if (dy < -30) move('up');
      }
      startX = startY = null;
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
    // eslint-disable-next-line
  }, [grid, gameOver, won]);

  function reset() {
    setGrid(initGrid());
    setScore(0);
    setGameOver(false);
    setWon(false);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-between w-full mb-2">
          <span className="text-green-400 font-bold text-lg">Score: {score}</span>
          <button onClick={reset} className="px-3 py-1 bg-green-400 hover:bg-green-500 text-black font-bold rounded text-sm ml-2">Restart</button>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full max-w-lg aspect-[5/3] bg-gray-800 p-2 rounded-xl shadow-inner">
          {grid.map((val, i) => (
            <div key={i} className={`flex items-center justify-center rounded-lg font-bold text-xl md:text-2xl transition-all duration-200 h-full w-full select-none ${val !== null ? 'bg-gray-900 shadow-lg' : 'bg-gray-700 opacity-60'}`}
              style={{ minHeight: 0, minWidth: 0 }}>
              {val !== null && (
                <div className="flex flex-col items-center">
                  {techTiles[val].icon}
                  <span className="text-xs md:text-sm mt-1 text-gray-200">{techTiles[val].name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {won && (
          <div className="mt-4 text-green-400 font-bold text-lg">You built the Ultimate Stack! 🎉</div>
        )}
        {gameOver && !won && (
          <div className="mt-4 text-red-400 font-bold text-lg">Game Over! No more moves.</div>
        )}
      </div>
    </div>
  );
}

const Playground = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleStart = () => setShowSplash(false);
  return (
    <section id="playground" className="min-h-screen flex flex-col items-center justify-center bg-black py-8 md:py-16">
      {showSplash && <TerminalSplash onStart={handleStart} />}
      {!showSplash && (
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8 text-center drop-shadow-lg">
            Playground
          </h2>
          <div className="w-full max-w-2xl flex flex-col items-center justify-center mx-auto">
            <div className="w-full bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-4 md:p-6 flex flex-col items-center min-h-[400px]">
              <span className="text-2xl font-bold text-green-400 mb-2 flex items-center gap-2">
                <span role="img" aria-label="laptop">💻</span>
                2048: Tech Stack Edition
              </span>
              <span className="text-gray-300 text-base mb-4 text-center">Merge tech stack icons to reach the ultimate stack!</span>
              <div className="w-full flex flex-wrap items-center justify-center gap-2 mb-4">
                {techTiles.map((tile, i) => (
                  <div key={tile.name} className="flex items-center gap-1 bg-gray-800 rounded px-2 py-1 text-xs text-gray-200">
                    {tile.icon}
                    <span>{tile.name}</span>
                    {i < techTiles.length - 1 && <span className="mx-1 text-green-400 font-bold">→</span>}
                  </div>
                ))}
              </div>
              <TechStack2048 />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Playground; 