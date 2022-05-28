import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className={'card rank-' + this.props.rank + ' ' + this.props.suit}>
                <span className='rank'>{this.props.rank}</span>
                <span className='suit'>{this.props.symbol}</span>
            </div>
        );
    }
}

export default Card;