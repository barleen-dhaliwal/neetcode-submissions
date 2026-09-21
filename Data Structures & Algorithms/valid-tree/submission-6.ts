class Solution {
    parent: number[];
    size: number[];
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length < n - 1) {
            return false;
        }
        this.parent = new Array(n + 1).fill(null).map((v, i) => i);
        this.size = new Array(n + 1).fill(1);

        for (const [n1, n2] of edges) {
            if (!this.union(n1, n2)) return false;
        }

        return true;
    }

    find(node: number) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(n1: number, n2: number) {
        const parent1 = this.find(n1);
        const parent2 = this.find(n2);

        if (parent1 === parent2) return false;

        if (this.size[parent1] < this.size[parent2]) {
            this.parent[parent1] = parent2;
            this.size[parent2] += this.size[parent1];
        } else {
            this.parent[parent2] = parent1;
            this.size[parent1] += this.size[parent2];
        }
        return true;
    }
}
