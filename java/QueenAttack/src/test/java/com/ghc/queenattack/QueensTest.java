package com.ghc.queenattack;

import org.junit.Ignore;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class QueensTest {

    @Rule
    public ExpectedException expectedException = ExpectedException.none();

    @Test
    public void testQueensThatDoNotShareRankFileOrDiagonalCannotAttack() {
        int[] blackPosition = {2,4};
        int[] whitePosition = {6,6};
        Queens queens = new Queens(blackPosition, whitePosition);

        assertFalse(queens.canAttack());
    }

    @Ignore("Remove to run test")
    @Test
    public void testQueensCanAttackOnTheSameRank() {
        int[] blackPosition = {2,4};
        int[] whitePosition = {2,6};
        Queens queens = new Queens(blackPosition, whitePosition);

        assertTrue(queens.canAttack());
    }

    @Ignore("Remove to run test")
    @Test
    public void testQueensCanAttackOnTheSameFile() {
        int[] blackPosition = {4,5};
        int[] whitePosition = {2,5};
        Queens queens = new Queens(blackPosition, whitePosition);

        assertTrue(queens.canAttack());
    }

    @Ignore("Remove to run test")
    @Test
    public void testQueensCanAttackOnFirstDiagonal() {
        int[] blackPosition = {2,2};
        int[] whitePosition = {0,4};
        Queens queens = new Queens(blackPosition, whitePosition);

        assertTrue(queens.canAttack());
    }

    @Ignore("Remove to run test")
    @Test
    public void testQueensCanAttackOnSecondDiagonal() {
        int[] blackPosition = {2,2};
        int[] whitePosition = {3,1};
        Queens queens = new Queens(blackPosition, whitePosition);

        assertTrue(queens.canAttack());
    }

    @Ignore("Remove to run test")
    @Test
    public void testQueensCanAttackOnThirdDiagonal() {
        int[] blackPosition = {2,2};
        int[] whitePosition = {1,1};
        Queens queens = new Queens(blackPosition, whitePosition);

        assertTrue(queens.canAttack());
    }

    @Ignore("Remove to run test")
    @Test
    public void testQueensCanAttackOnFourthDiagonal() {
        int[] blackPosition = {2,2};
        int[] whitePosition = {5,5};
        Queens queens = new Queens(blackPosition, whitePosition);

        assertTrue(queens.canAttack());
    }

    @Ignore("Remove to run test")
    @Test
    public void testCoordinateWithNegativeRankNotAllowed() {
        expectedException.expect(IllegalArgumentException.class);
        expectedException.expectMessage("Coordinate must have positive rank.");

        int[] blackPosition = {-2,2};
        int[] whitePosition = {5,5};
        new Queens(blackPosition, whitePosition);
    }

    @Ignore("Remove to run test")
    @Test
    public void testCoordinateWithRankGreaterThan7NotAllowed() {
        expectedException.expect(IllegalArgumentException.class);
        expectedException.expectMessage("Coordinate must have rank <= 7.");

        int[] blackPosition = {8,4};
        int[] whitePosition = {5,5};
        new Queens(blackPosition, whitePosition);
    }

    @Ignore("Remove to run test")
    @Test
    public void testCoordinateWithNegativeFileNotAllowed() {
        expectedException.expect(IllegalArgumentException.class);
        expectedException.expectMessage("Coordinate must have positive file.");

        int[] blackPosition = {2,-2};
        int[] whitePosition = {5,5};
        new Queens(blackPosition, whitePosition);
    }

    @Ignore("Remove to run test")
    @Test
    public void testCoordinateWithFileGreaterThan7NotAllowed() {
        expectedException.expect(IllegalArgumentException.class);
        expectedException.expectMessage("Coordinate must have file <= 7.");

        int[] blackPosition = {4,8};
        int[] whitePosition = {5,5};
        new Queens(blackPosition, whitePosition);
    }

    @Ignore("Remove to run test")
    @Test
    public void testNullCoordinateNotAllowed() {
        expectedException.expect(IllegalArgumentException.class);
        expectedException.expectMessage("You must supply valid board coordinates for both Queens.");

        new Queens(null, null);
    }

    @Ignore("Remove to run test")
    @Test
    public void testQueensMustNotOccupyTheSameSquare() {
        expectedException.expect(IllegalArgumentException.class);
        expectedException.expectMessage("Queens may not occupy the same board coordinate.");

        int[] blackPosition = {4,4};
        int[] whitePosition = {4,4};
        new Queens(blackPosition, whitePosition);
    }


//    Refactoring tip: Extract position arrays into class
}