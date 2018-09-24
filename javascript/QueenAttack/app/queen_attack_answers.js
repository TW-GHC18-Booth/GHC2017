const queen_attack = (black_position, white_position) => {
  return black_position[0] === white_position[0];
};

module.exports = {
  queen_attack
};