import  React, {useState, useEffect} from  "react"
import  *  as  Realm  from  "realm-web";
import GameCardList from  "./components/GameCardList"
import WinnerList from "./components/WinnerList";

// Create the Application
const app_id = import.meta.env.VITE_MONGO_APP_ID;
const  app = new  Realm.App({ id:  app_id});

// Define the App component

const  App = () => {
// Set state variables

const [user, setUser] = useState();
const [events, setEvents] = useState([]);
const [games, setGames] = useState([]);
const [winners, setWinners] = useState([])

// This useEffect hook will run only once when the page is loaded

useEffect(() => {
  const  login = async () => {  
    const  credentials = Realm.Credentials.anonymous();
    const  user = await  app.logIn(credentials);
    setUser(user);

    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const collection = mongodb.db("BattleSalvo").collection("rounds");


    for await (const event of collection.watch()) {
      setEvents(events => [... events, event]);
      const round = event.fullDocument;

      setGames(games => {
        console.log("games", games);

        //if the round indicates a game is over, add the winners to the winners array
        // and remove the game from the games array
        if(round.game_over) {
          setWinners(winners => [... winners, round.winner]);
          return games.filter(game => game.game_id !== round.game_id);
        }

        // if the round is not in the games array, add it
        if(games.find(game => game.game_id === round.game_id) === undefined) {
          return [... games, round];
        }
        // If the round is in the games array, update the round
        else {
          return games.map(game => game.game_id === round.game_id ? round : game);
        }
      });
    }
  }

  login();
}, []);

// Return the JSX that will generate HTML for the page

return (
  <div  className="App px-3">
    {!!user &&
    <div  className="App-header">
      <div>
        <WinnerList winners={winners}/>
        <GameCardList games={games}/>
      </div>
    </div>}
  </div>
);
};

export  default  App;
