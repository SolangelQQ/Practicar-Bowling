class Game{
  constructor() {
    this.rolls = new Array(21).fill(0);
    this.scoreValue = 0;
    this.currentRoll = 0;
  }
  roll(pins) {
    this.scoreValue += pins;
    this.rolls[this.currentRoll++] = pins;
  }
  score(){
    let scoreValue = 0;
    let i = 0;
    for(let frame = 0; frame < 10; frame ++){
      if(this.rolls[i] + this.rolls[i+1] == 10){ //spare
        scoreValue += 10 + this.rolls[i+2];
        i += 2;
      }else{
        scoreValue += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }
    }
    return scoreValue;
  }
}

module.exports = Game;
