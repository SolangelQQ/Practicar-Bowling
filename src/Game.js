class Game{
  constructor() {
    this.rolls = [];
    this.scoreValue = 0;
  }
  roll(pins) {
    this.scoreValue += pins;
  }
  score(){
    return this.scoreValue;
  }
}

module.exports = Game;
