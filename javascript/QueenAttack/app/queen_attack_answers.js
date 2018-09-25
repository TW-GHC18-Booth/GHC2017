let blackPosition = [0,0];
let whitePosition = [0,0];

const queen_attack = (black_position, white_position) => {
  blackPosition = black_position;
  whitePosition = white_position;

  return isRankValid() || isFileValid() || isDiagonalValid();
};

const isRankValid = () => {
  return blackPosition[0] === whitePosition[0]
};

const isFileValid = () => {
  return blackPosition[1] === whitePosition[1];
};

const isDiagonalValid = () => {
  return Math.abs(blackPosition[0] - whitePosition[0]) === Math.abs(blackPosition[1] - whitePosition[1]);
};

module.exports = {
  queen_attack
};