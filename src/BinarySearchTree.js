

class Node{
  constructor(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show(){
    return this.data; 
  }
}


class BST{
  constructor(){
    this.root = null;
  }

  insert(data){ 
    let n = new Node(data,null,null);
    if(this.root == null){ 
      this.root = n; 
    }else{ 
      let current = this.root; 
      let parent; 
      while(true){ 
        parent = current; 
        if(data<current.data){
          current = current.left; 
          if(current==null){ 
            parent.left = n; 
            break; 
          }
        }else{
          current = current.right; 
          if(current == null){ 
            parent.right = n; 
            break; 
          }
        }
      }
    }
  }


  inOrder(node){ 
    if(!(node == null)){ 
      inOrder(node.left);
      console.log(node.show()+' ');
      inOrder(node.right);
    }
  }
  
  preOrder(node){ 
    if(!(node == null)){ 
      console.log(node.show()+' ')
      preOrder(node.left);
      preOrder(node.right);
    }
  }
  
  postOrder(node){ 
    if((!node == null)){ 
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.show()+' '); 
    }
  }
}






function find(data){
  let current = this.root; 
  while(current.data !=data){
    if(data<current.data){
      current = current.left;
    }else{
      current = current.right;
    }
    if(current == null){
      return null; 
    }
  }
  return current; 
}

function getMin(){ 
  let current = this.root; 
  while(!(current.left==null)){ 
    current = current.left; 
  }
  return current.data; 
}

function getMax(){ 
  let current = this.root; 
  while(!(current.right==null)){
    current = current.right; 
  }
  return current.data; 
}

function remove(data){
  root = removeNode(this.root,data)
}

function removeNode(node,data){ 
  if(node==null){ 
    return null; 
  }

  if(data == node.data){ 
    //자식이 없는 노드
    if(node.left == null &&node.right==null){ 
      return null
    }

    //왼쪽 자식이 없는 노드
    if(node.left == null){ 
      return node.right;
    }

    //오른쪽에 자식이 없는 노드 
    if(node.right ==null){ 
      return node.left; 
    }

    //두 자식이 있는 노드 
    let tempNode = getSmallest(node.right);
    node.data = tempNode.data; 
    node.right = removeNode(node.right,tempNode);
    return node; 
  }
  else if(data < node.data){ 
    node.left = removeNode(node.left,data); 
    return node;
  }
  else{
    node.right = removeNode(node.right,data)
    return node; 
  }
}