import GameCard from "./GameCard"

const GameCardList = ({ games }) => {
  return(
    <>
      <p className="text-xl">Active Games: </p>
      <div className="flex">
        {games && games.map((game) => <GameCard key={game.game_id} game={game}/>)}
      </div>
    </>
    
  );
};

export default GameCardList;