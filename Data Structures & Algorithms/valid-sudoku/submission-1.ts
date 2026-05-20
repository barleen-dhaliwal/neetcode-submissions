class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let set = new Set<string>();
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") continue;
                
                const rKey=`r-${i}-${board[i][j]}`
                const cKey=`c-${j}-${board[i][j]}`
                const sKey=`s-${Math.floor(i/3)}-${Math.floor(j/3)}-${board[i][j]}`

                if(set.has(rKey)|| set.has(cKey) || set.has(sKey))
                    return false;
                set.add(rKey)
                set.add(cKey)
                set.add(sKey)
            }
        }

        return true;
    }
}
