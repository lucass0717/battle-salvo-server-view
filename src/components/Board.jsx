const cellMap = new Map();
cellMap.set("EMPTY", "E");
cellMap.set("SHIP", "S");
cellMap.set("MISS", "M");
cellMap.set("HIT", "H");
cellMap.set("SPLASH", "X");

const cellStylingMap = new Map();
cellStylingMap.set("EMPTY", "bg-cyan-500");
cellStylingMap.set("SHIP", "bg-slate-500");
cellStylingMap.set("MISS", "bg-red-400");
cellStylingMap.set("HIT", "bg-emerald-500");
cellStylingMap.set("SPLASH", "bg-red-400");

const Board = ({cells, playerName}) => {
  return (
    <div className="px-1">
      <p>{playerName}</p>
      {cells.map((row, i) => (
          <div className="leading-4 py-0" key={i}>
            {row.map((cell, j) => (
              <span className={`px-1 font-mono text-slate-300 ${cellStylingMap.get(cell)}`} key={j}>{cellMap.get(cell)}</span>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Board;