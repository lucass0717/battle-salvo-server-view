import Board from "./Board";

const GameCard = ({ game }) => {
  return ( 
    <div className="p-3" key={game.game_id}>
      <div className="py-1">
        <p>P1: {game.player_1}, </p>
        <p>P2: {game.player_2}</p>
      </div>
      {/* render the 2D array game boards */}
      <div className="flex">
        <div>
          <Board cells={game.board_1_opp} playerName={`${game.player_1}'s Shots`}/>
          <Board cells={game.board_1_home} playerName={`${game.player_1}'s Home`}/>
        </div>
        <div>
          <Board cells={game.board_2_opp} playerName={`${game.player_2}'s Shots`}/>
          <Board cells={game.board_2_home} playerName={`${game.player_2}'s Home`}/>
        </div>
      </div>
      
    </div>
  );
};

export default GameCard;