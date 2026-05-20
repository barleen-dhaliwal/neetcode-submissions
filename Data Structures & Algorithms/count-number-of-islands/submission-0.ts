class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let ans=0;
        let visited= new Set<string>()
        const rows=grid.length;
        const columns=grid[0].length;

        const markGroupVisitedDFS=(i:number,j:number)=>{

            if(i<0||i>=rows)
                return; 
            if(j<0||j>=columns)
                return;
            if(grid[i][j]==='0')
                return;
            const key=this.getKey(i,j)            
            if(visited.has(key))
                return;
            visited.add(key)
            markGroupVisitedDFS(i-1,j)
            markGroupVisitedDFS(i+1,j)
            markGroupVisitedDFS(i,j-1)
            markGroupVisitedDFS(i,j+1)
            
        }

        for(let i=0;i<rows;i++){
            for(let j=0;j<columns;j++){
                if(grid[i][j]==='1'&& !visited.has(this.getKey(i,j))){
                    ans++;
                    markGroupVisitedDFS(i,j)
                }
            }
        }
        return ans;
    }

    getKey(row:number, col:number){
        return `${row},${col}`;
    }
}
