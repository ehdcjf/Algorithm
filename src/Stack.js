class Node{
  constructor(item){
    this.item = item;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push(item){
    const node = new Node(item);
    if(this.top!=null){
      node.next = this.top; 
    }
      this.top = node;
      this.length+=1;
  }

  pop(){
    const popItem = this.top;
    this.top = this.top.next;
    this.length-=1;
    return popItem.item
  }
}


let x = [1,5,6,7,8,3];

let stack = new Stack();

x.forEach(v=>{
  stack.push(v)
})

console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
