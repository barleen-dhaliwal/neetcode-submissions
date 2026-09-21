class TrieNode {
    children: Map<string, TrieNode>;
    end: boolean;
    constructor() {
        this.children = new Map<string, TrieNode>();
        this.end = false;
    }
}
class PrefixTree {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode());
            }
            curr = curr.children.get(char);
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let curr = this.root;
        let i = 0;

        while (i < word.length && curr.children.has(word[i])) {
            curr = curr.children.get(word[i]);
            i++;
        }

        return i === word.length && curr.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(word: string): boolean {
        let curr = this.root;
        let i = 0;

        while (i < word.length && curr.children.has(word[i])) {
            curr = curr.children.get(word[i]);
            i++;
        }

        return i === word.length;
    }
}
