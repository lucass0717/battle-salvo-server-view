import GameCard from "./GameCard"

const GameCardList = ({ games }) => {
  return(
    <div className="flex h-screen justify-center items-center flex-col">
      <p className="font-extralight text-xl">Active Games: </p>
      <div className="flex items-stretch">
        {games && games.map((game) => <GameCard key={game.game_id} game={game}/>)}
      </div>
    </div>
    
  );
};

export default GameCardList;