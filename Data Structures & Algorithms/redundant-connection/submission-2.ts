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
        if (this.rank[parent1] < this.rank[parent2]) {
            this.parent[parent1] = parent2;
            this.rank[parent1] = this.rank[parent1] + this.rank[parent2];
        } else {
            this.parent[parent2] = parent1;
            this.rank[parent2] = this.rank[parent1] + this.rank[parent2];
        }
        return true;
    }
}
