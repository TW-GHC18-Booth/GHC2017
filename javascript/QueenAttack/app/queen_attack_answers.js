let blackPosition = [0,0];
let whitePosition = [0,0];

const queen_attack = (black_position, white_position) => {
  blackPosition = black_position;
  whitePosition = white_position;

  return isRankValid() || isFileValid() || isDiagonalValid();
};

// Checks if rank (row) is the same
const isRankValid = () => {
  return blackPosition[0] === whitePosition[0]
};

// Checks if file (column) is the same
const isFileValid = () => {
  return blackPosition[1] === whitePosition[1];
};

// Checks if position of black and white are diagonal to each other
const isDiagonalValid = () => {
  return Math.abs(blackPosition[0] - whitePosition[0]) === Math.abs(blackPosition[1] - whitePosition[1]);
};

module.exports = {
  queen_attack
};