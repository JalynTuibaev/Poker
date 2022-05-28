import {Component} from "react";
import './App.css';
import './cards.css';
import Card from "./Components/Card";
import  CardDeck from "./CardDeck";

class App extends Component {
    state = {
        cards: []
    };

    showCards () {
        const deck = new CardDeck();
        const takeCards = deck.getCards(5);
        this.state.cards.push(takeCards);
        return takeCards;
    };

    changeCards = () => {
        const newArr = this.showCards();
        this.setState({cards: [newArr]});
    };

    render() {
        this.showCards();
        const cards = this.state.cards[0].map((card) => {
            return (
                <Card suit={card.suit}
                      rank={card.rank}
                      key={card.suit + card.rank}
                />
            );
        });
        return (
            <div className='wrapper'>
                <div className="playingCards">
                    {cards}
                </div>
                <button onClick={this.changeCards} className='btn'>Change Cards</button>
            </div>
        );
    }
}

export default App;
