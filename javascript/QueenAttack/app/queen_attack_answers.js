const queen_attack = (black_position, white_position) => {
  return black_position[0] === white_position[0]
    || black_position[1] === white_position[1]
    || Math.abs(black_position[0] - white_position[0]) === Math.abs(black_position[1] - white_position [1]);
};

module.exports = {
  queen_attack
};