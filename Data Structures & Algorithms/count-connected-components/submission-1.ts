class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {

        const visited= new Set();

        const edgesMap= new Map();
        for(let i=0;i<n;i++){
            edgesMap.set(i,[])
        }
        for(let i=0;i<edges.length;i++){
            edgesMap.get(edges[i][0]).push(edges[i][1])
            edgesMap.get(edges[i][1]).push(edges[i][0])

        }

        const dfs=(node:number)=>{
            if(visited.has(node))
                return;
            visited.add(node)
            const neighbours=edgesMap.get(node)
            for(const neighbour of neighbours){
                dfs(neighbour)
            }
            
        }

        let groups=0;

        for(let i=0;i<n;i++){
            if(!visited.has(i)){
                groups++;
                dfs(i);
            }
        }

        return groups;

        
    }
}
