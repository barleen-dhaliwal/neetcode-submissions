class TNode{
    children:TNode|null[]
    endOfWord:boolean
    constructor(){
        this.children=new Array(26)
        this.endOfWord=false
    }
}

class PrefixTree {
    root:TNode
    constructor() {
        this.root=new TNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {

        let curr=this.root;

        for(const c of word){
            const index=c.charCodeAt(0)-97
            if(!curr.children[index]){
                curr.children[index]=new TNode()
               
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
        let curr=this.root;

        for(const c of word){
            const index=c.charCodeAt(0)-97
            if(!curr.children[index]){
                return false;
               
            }else{
                curr=curr.children[index]
            }
        }
        return curr.endOfWord;
       
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {

        if(prefix==='')
            return true;
        
        let curr=this.root;
        for(const c of prefix){
            const index=c.charCodeAt(0)-97
            if(!curr.children[index]){
                return false;
               
            }else{
                curr=curr.children[index]
            }
        }
        return true;
    }
}
