class TNode{
    children: (null|TNode)[];
    endOfWord:boolean
    constructor(){
        this.children=new Array(26).fill(null);
        this.endOfWord=false;
    }
}

class WordDictionary {
    root:TNode
    constructor() {
        this.root=new TNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let curr=this.root;

        for(const c of word){
            const index=c.charCodeAt(0)-97;
            if(!curr.children[index]){
                curr.children[index]=new TNode();
            }
            curr=curr.children[index]
        }
        curr.endOfWord=true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {

        const dfs=(root:TNode,j:number)=>{
            let curr=root;
            for(let i=j;i<word.length;i++){
                if(word[i]==='.'){
                    for(const child of curr.children){
                        if(child &&  dfs(child,i+1))
                           return true;
                    }
                    return false;

                }else{
                    const index=word[i].charCodeAt(0) -97;
                    if(!curr.children[index])
                        return false;
                    curr=curr.children[index];
                }
            }
            return curr.endOfWord;
        }

        return dfs(this.root,0)
    }
}
