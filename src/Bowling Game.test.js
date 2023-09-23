const Game = require("./Game.js");

describe("Bowling Game Tests", () => {
  let g;
  beforeEach (() => {
    g = new Game();
  });
  function rollMany(n, pins){
    for (let i =0; i < n; i++){
      g.roll(pins);
    } 
  }
  function rollSpare(){
    g.roll(5);
    g.roll(5);
  }
  it("deberia devolver 0 porque el jugador no derribo ningun pin en los 10 turnos", () => {
    rollMany(20, 0);
    expect(g.score()).toEqual(0);
  });

  it("deberia devolver 20 porque el jugador no derribo un pin en los 20 intentos", () => {
    rollMany(20, 1);
    expect(g.score()).toEqual(20);
  });

  it("deberia devolver 16 porque el jugador no derribo 5, 5, 3 un spare en los 20 intentos", () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0); 
    expect(g.score()).toEqual(16);
  });

  it("deberia devolver 24 porque el jugador no derribo 10, 3, 4 un strike en los 20 intentos", () => {
    g.roll(10);
    g.roll(3);
    g.roll(4);
    rollMany(16, 0); 
    expect(g.score()).toEqual(24);
  });
});
