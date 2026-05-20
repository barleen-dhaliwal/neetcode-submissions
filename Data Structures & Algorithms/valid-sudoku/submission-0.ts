class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {



        for(let i=0;i<9;i++)
        {
            let rSet=new Set<string>();
            let cSet=new Set<string>();
            for(let j=0;j<9;j++){
                if(board[i][j]!=='.'&& cSet.has(board[i][j])){
                    return false;
                }
                if(board[j][i]!=='.'&& rSet.has(board[j][i])){
                    return false;
                }
                cSet.add(board[i][j])
                rSet.add(board[j][i])
            }
        }

        for(let i=0;i<9;i+=3){
            for(let j=0;j<9;j+=3){
                let boxSet=new Set<string>();
                for(let r=i;r<i+3;r++){
                    for(let c=j;c<j+3;c++){
                        if(board[r][c]!=='.'&& boxSet.has(board[r][c]))
                            return false;
                        boxSet.add(board[r][c])
                    }

                }
                
            }

        }
        return true;
    }
}
