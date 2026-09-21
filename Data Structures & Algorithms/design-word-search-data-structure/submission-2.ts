class TrieNode {
    children: Map<string, TrieNode>;
    endsHere: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.endsHere = false;
    }
}
class WordDictionary {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let curr = this.root;

        for (const char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode());
            }
            curr = curr.children.get(char);
        }
        curr.endsHere = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string, curr = this.root, index = 0): boolean {
        for (let i = index; i < word.length; i++) {
            if (word[i] === ".") {
                for (let child of curr.children.values()) {
                    if (this.search(word, child, i + 1)) return true;
                }
                return false;
            } else if (!curr.children.has(word[i])) return false;
            else curr = curr.children.get(word[i]);
        }
        return curr.endsHere;
    }
}
