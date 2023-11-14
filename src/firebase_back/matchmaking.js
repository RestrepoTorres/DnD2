import EloRank from "elo-rank";

var elo = new EloRank();
var playerA = 1200;
var playerB = 1245;

//Gets expected score for first parameter
var expectedScoreA = elo.getExpected(playerA, playerB);
var expectedScoreB = elo.getExpected(playerB, playerA);

console.log(expectedScoreA);

export function correctInterval(winrate) {
  var e = 1 - winrate;
  var aux = 1 / e - 1;

  return 400 * Math.log10(aux);
}

export function searchRivals() {
    
    return 2;
}
