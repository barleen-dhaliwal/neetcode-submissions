class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {

        const visitedPath=new Set()

        const dfs=(r,c,i)=>{

            if(i===word.length)
                return true;
            
            if(r>board.length-1 || r<0 || c>board[0].length-1|| c<0 || visitedPath.has(`${r},${c}`)||word[i]!==board[r][c])
                return false;
            visitedPath.add(`${r},${c}`)
            if (dfs(r-1,c,i+1) ||
            dfs(r+1,c,i+1) ||
            dfs(r,c-1,i+1) || 
            dfs(r,c+1,i+1))
                return true;
            visitedPath.delete(`${r},${c}`)
                return false;
        }


        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(dfs(i,j,0))
                    return true;
            }
        }

        return false;


    }
}
