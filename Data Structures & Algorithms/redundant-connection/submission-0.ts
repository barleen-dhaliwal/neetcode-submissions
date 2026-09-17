class Solution {
    parent: number[];
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        this.parent = new Array(edges.length + 1);
        for (let i = 0; i < this.parent.length; i++) {
            this.parent[i] = i;
        }

        for (let i = 0; i < edges.length; i++) {
            if (!this.union(edges[i][0], edges[i][1])) return edges[i];
        }
    }

    find(node: number) {
        if (this.parent[node] != node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(node1: number, node2: number) {
        const parent1 = this.find(node1);
        const parent2 = this.find(node2);
        if (parent1 === parent2) return false;
        this.parent[parent1] = parent2;
        return true;
    }
}
