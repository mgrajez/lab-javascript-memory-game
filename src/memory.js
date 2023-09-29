class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // if (this.cards.length === 0) {
    //   return undefined;
    // }
    // let shuffledCards = [...this.cards];
    // for (let i = shuffledCards.length - 1; i > 0; i--) {
    //   const j = Match.floor(Math.random() * (i + 1));
    //   [shuffledCards[i], shuffledCards[j]] = [
    //     shuffledCards[j],
    //     shuffledCards[i],
    //   ];
    // }
    // return shuffledCards;
    if (!this.cards) return undefined;

    this.cards.sort(() => Math.random() - 0.5);
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    const totalPairs = this.cards.length / 2;
    return this.pairsGuessed === totalPairs;
  }
}
