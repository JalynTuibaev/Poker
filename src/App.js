import {Component} from "react";
import './App.css';
import './cards.css';
import Card from "./Components/Card";
import  CardDeck from "./CardDeck";

const deck = new CardDeck();
const takeCards = deck.getCards(5);

class App extends Component {
    state = {
        cards: [takeCards]
    };


    render() {
        const cards = this.state.cards[0].map(card => {
            return (
                <Card suit={card.suit} rank={card.rank} key={card.suit + card.rank}/>
            );
        });
        return (
            <div className="playingCards">
                {cards}
            </div>
        );
    }
}

export default App;
