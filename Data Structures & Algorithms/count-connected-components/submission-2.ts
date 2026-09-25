class Solution {
    parent: number[];
    size: number[];
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        this.parent = new Array(n);
        this.size = new Array(n).fill(1);

        for (let i = 0; i < this.parent.length; i++) this.parent[i] = i;

        for (const [a, b] of edges) {
            this.union(a, b);
        }

        let ans = 0;

        for (let i = 0; i < this.parent.length; i++) {
            if (this.parent[i] === i) ans++;
        }

        return ans;
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
