const cellMap = new Map();
cellMap.set("EMPTY", "E");
cellMap.set("SHIP", "S");
cellMap.set("HIT", "H");
cellMap.set("SPLASH", "M");

const cellStylingMap = new Map();
cellStylingMap.set("EMPTY", "bg-cyan-400");
cellStylingMap.set("SHIP", "bg-slate-500");
cellStylingMap.set("HIT", "bg-amber-500");
cellStylingMap.set("SPLASH", "bg-slate-100");

const Board = ({cells, playerName}) => {
  return (
    <div className="px-1">
      <p>{playerName}</p>
      {cells.map((row, i) => (
          <div className="leading-4 py-0" key={i}>
            {row.map((cell, j) => (
              <span className={`text-opacity-30 px-1 font-mono text-slate-300 ${cellStylingMap.get(cell)}`} key={j}>{cellMap.get(cell)}</span>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Board;