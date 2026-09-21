class Solution {
    parent: number[];
    rank: number[];
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        this.parent = new Array(edges.length + 1);
        this.rank = new Array(edges.length + 1).fill(1);
        for (let i = 0; i < this.parent.length; i++) {
            this.parent[i] = i;
        }

        for (const [n1, n2] of edges) {
            if (!this.union(n1, n2)) {
                return [n1, n2];
            }
        }
    }

    find(node: number) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(node1: number, node2: number) {
        const parent1 = this.find(node1);
        const parent2 = this.find(node2);

        if (parent1 === parent2) return false;

        const rank1 = this.rank[parent1];
        const rank2 = this.rank[parent2];

        if (rank1 < rank2) {
            this.parent[parent1] = parent2;
            this.rank[parent2] = this.rank[parent1] + this.rank[parent2];
        } else {
            this.parent[parent2] = parent1;
            this.rank[parent1] = this.rank[parent1] + this.rank[parent2];
        }
        return true;
    }
}
