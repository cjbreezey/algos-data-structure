// DFS algo expert problem

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }
    depthFirstSearch(array) {
        // Write your code here.
        // console.log(array)
        array.push(this.name) //[A]
        for (let child of this.children) {
            child.depthFirstSearch(array)
        }
        return array
    }
}