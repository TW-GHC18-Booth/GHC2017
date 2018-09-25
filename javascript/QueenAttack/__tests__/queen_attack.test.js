const queenAttack = require('../app/queen_attack').queen_attack;

describe('queen_attack', () => {

  it.skip('cannot attack in unrelated positions', () => {
    const canAttack = queenAttack([2,4], [6,6]);
    expect(canAttack).toBe(false);
  });

  it.skip('can attack on same rank', () => {
    const canAttack = queenAttack([2,4], [2,6]);
    expect(canAttack).toBe(true);
  });

  it.skip('can attack on same file', () => {
    const canAttack = queenAttack([4, 5], [2, 5]);
    expect(canAttack).toBe(true);
  });

  it.skip('can attack on first diagonal', () => {
    const canAttack = queenAttack([2, 2], [0, 4]);
    expect(canAttack).toBe(true);
  });

  it.skip('can attack on second diagonal', () => {
    const canAttack = queenAttack([2, 2], [3, 1]);
    expect(canAttack).toBe(true);
  });

  it.skip('can attack on third diagonal', () => {
    const canAttack = queenAttack([2, 2], [1, 1]);
    expect(canAttack).toBe(true);
  });

  it.skip('can attack on fourth diagonal', () => {
    const canAttack = queenAttack([2, 2], [5, 5]);
    expect(canAttack).toBe(true);
  });

  it.skip('raises an error if the rank is negative', () => {
    expect(() => queenAttack([-2, 2])).
      toThrow(new Error ('Invalid position: Must be between 0 and 7'));
  });

  it.skip('raises an error if the rank is off the board', () => {
    expect(() => queenAttack([8, 4])).
      toThrow(new Error ('Invalid position: Must be between 0 and 7'));
  });

  it.skip('raises an error if the file is negative', () => {
    expect(() => queenAttack([2, -2])).
      toThrow(new Error ('Invalid position: Must be between 0 and 7'));
  });

  it.skip('raises an error if the file is off the board', () => {
    expect(() => queenAttack([4, 8])).
      toThrow(new Error ('Invalid position: Must be between 0 and 7'));
  });

  it.skip('raises an error if two queens in the same position', () => {
    expect(() => queenAttack([4, 7], [4, 7])).
      toThrow(new Error ('Invalid position: Queens cannot have the same position'));
  });
});
