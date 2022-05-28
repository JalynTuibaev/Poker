class CardDeck {
    constructor() {
        const cards = [];
        const suit = ['H', 'D', 'C' , 'S'];
        const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (let j = 0; j <= 3; j++) {
            for (let i = 0; i < 13; i++) {
                cards.push({
                    suit: suit[j],
                    rank: rank[i]
                })
            }
        }

        const sort = cards.sort(() => Math.random() - 0.5);
        this.deck = sort;
    }

    getCard() {
        const card = this.deck.splice(0, 1);
        return card;
    }

    getCards(howMany) {
        const cards = [];
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            cards.push(card[0]);
        }
        return cards;
    }
}

export default CardDeck;