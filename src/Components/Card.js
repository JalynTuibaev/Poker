import React from 'react';

class Card extends React.Component {
    symbol() {
        if (this.props.suit === 'H') {
            return  '♥';
        } else if (this.props.suit === 'D') {
            return  '♦';
        } else if (this.props.suit === 'S') {
            return '♠';
        } else if (this.props.suit === 'C') {
            return '♣';
        }
    }
    name() {
        if (this.props.suit === 'H') {
            return  'hearts';
        } else if (this.props.suit === 'D') {
            return  'diams';
        } else if (this.props.suit === 'S') {
            return 'spades';
        } else if (this.props.suit === 'C') {
            return 'clubs';
        }
    }

    render() {
        return (
            <div className={'card rank-' + this.props.rank.toLowerCase() + ' ' + this.name()}>
                <span className='rank'>{this.props.rank}</span>
                <span className='suit'>{this.symbol()}</span>
            </div>
        );
    }
}

export default Card;