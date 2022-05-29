class PokerHand {
    constructor(arr) {
        this.hand = arr[0];
    }

    getOutcome() {
        const hand = this.hand;
        let count = -5;
        let second = 0;

        for (let i = 0; i < hand.length; i++) {
           for (let j = 0; j < hand.length; j++) {
               if (hand[i].rank === hand[j].rank) {
                   count++;
               }

               if (hand[i].suit === hand[j].suit) {
                   second++;
               }
           }
        }

        if (second === 25) {
            return  'Флэш';
        } else if (count === 2) {
            return 'Одна пара';
        } else if (count === 4) {
            return  'Две пары';
        } else if (count === 6) {
            return  'Тройка';
        } else {
            return ' ';
        }
    }

}
export default PokerHand;