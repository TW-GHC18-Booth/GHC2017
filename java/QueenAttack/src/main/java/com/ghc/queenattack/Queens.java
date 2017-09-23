package com.ghc.queenattack;

public class Queens {

    private int[] whitePosition = null;
    private int[] blackPosition = null;

    public Queens(int[] whitePosition, int[] blackPosition) {
        this.whitePosition = whitePosition;
        this.blackPosition = blackPosition;
    }

    public boolean canAttack() {
        return false;
    }
}
