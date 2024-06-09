function cards(cardFace, cardSuit) {

    if (cardSuit === 'S') {
        cardSuit = '\u2660';
    } else if (cardSuit === 'H') {
        cardSuit = '\u2665';
    } else if (cardSuit === 'D') {
        cardSuit = '\u2666';
    } else if (cardSuit === 'C') {
        cardSuit = '\u2663';
    }

    if (cardFace !== '2' && cardFace !== '3' && cardFace !== '4' &&
        cardFace !== '5' && cardFace !== '6' && cardFace !== '7' &&
        cardFace !== '8' && cardFace !== '9' && cardFace !== '10' &&
        cardFace !== 'J' && cardFace !== 'Q' && cardFace !== 'K' && cardFace !== 'A') {
        throw new Error('Invalid input!');
    }

    let card = {
        face: cardFace,
        cardSuit: String.fromCharCode(cardSuit),
        toString: () => {
            return `${cardFace}${cardSuit}`;
        }
    };

    return card;
}










