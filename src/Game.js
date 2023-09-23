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
    let frameIndex = 0;
    for(let frame = 0; frame < 10; frame ++){
      if(this.rolls[frameIndex] == 10){ //strike
        scoreValue += 10 + this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
        frameIndex++;
      } 
      else if(this.isSpare(frameIndex)){ //spare
        scoreValue += 10 + this.rolls[frameIndex+2];
        frameIndex += 2;
      }else{
        scoreValue += this.rolls[frameIndex] + 
        this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return scoreValue;
  }
  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1] == 10; 
    
  }
}

module.exports = Game;
