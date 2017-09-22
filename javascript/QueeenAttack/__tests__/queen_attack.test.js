require('../app/queen_attack');

describe('queen_attack', () => {

  test('cannot attack in unrelated positions', () => {
    const canAttack = queen_attack([2,4], [6,6]);
    expect(canAttack).toBe(false);
  });

  test.skip('can attack on same rank', () => {
    const canAttack = queen_attack([2,4], [2,6]);
    expect(canAttack).toBe(true);
  });

  test.skip('can attack on same file', () => {
    const canAttack = queen_attack([4, 5], [2, 5]);
    expect(canAttack).toBe(true);
  });

  test.skip('can attack on first diagonal', () => {
    const canAttack = queen_attack([2, 2], [0, 4]);
    expect(canAttack).toBe(true);
  });

  test.skip('can attack on second diagonal', () => {
    const canAttack = queen_attack([2, 2], [3, 1]);
    expect(canAttack).toBe(true);
  });

  test.skip('can attack on third diagonal', () => {
    const canAttack = queen_attack([2, 2], [1, 1]);
    expect(canAttack).toBe(true);
  });

  test.skip('can attack on fourth diagonal', () => {
    const canAttack = queen_attack([2, 2], [5, 5]);
    expect(canAttack).toBe(true);
  });

  test.skip('raises an error if the rank is negative', () => {
    expect(() => queen_attack([-2, 2])).
      toThrow('Invalid position: Must be between 0 and 7');
  });

  test.skip('raises an error if the rank is off the board', () => {
    expect(() => queen_attack([8, 4])).
      toThrow('Invalid position: Must be between 0 and 7');
  });

  test.skip('raises an error if the file is negative', () => {
    expect(() => queen_attack([2, -2])).
      toThrow('Invalid position: Must be between 0 and 7');
  });

  test.skip('raises an error if the file is off the board', () => {
    expect(() => queen_attack([4, 8])).
      toThrow('Invalid position: Must be between 0 and 7');
  });

  test.skip('raises an error if two queens in the same position', () => {
    expect(() => queen_attack([4, 8], [4, 8])).
      toThrow('Invalid position: Queens cannot have the same position');
  });
});
