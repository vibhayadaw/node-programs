class TreeNode {
  constructor(data, left = null, right=null){
    this.left = left
    this.right = right
    this.data = data
  }
  getData(){
    return this.data
  }
  getLeftNode(){
    return this.left
  }
  setLeftNode(data){
    this.left = data
  }
  getRightNode(){
    return this.right
  }
  setRightNode(data){
    this.right = data
  }
}

const lca = (tree, a,b)=>{
  if(tree ===  null){
    return -1;
  }
  const val = tree.getData()
  console.log('Tree',val);
  if(val<a && val<b){
    // then traverse right
    return lca(tree.getRightNode(),a,b);
  }
  else if(val>a && val>b){
    return lca(tree.getLeftNode(),a,b)
  }
  return val;
}

let BST = new TreeNode(20);
BST.setLeftNode(new TreeNode(8));
BST.setRightNode(new TreeNode(22));
BST.getLeftNode().setLeftNode(new TreeNode(4));
BST.getLeftNode().setRightNode(new TreeNode(12));
BST.getLeftNode().getRightNode().setLeftNode(new TreeNode(10));
BST.getLeftNode().getRightNode().setRightNode(new TreeNode(14));
// console.log(BST.getData());

console.log('lca',lca(BST,10,14));
console.log('lca',lca(BST,14,8));
console.log('lca',lca(BST,10,22));

const validateBST = (btree, min, max) =>{
  if (btree === null ){
    return 0;
  }
  const val = btree.getData();
  if( val > min && val < max){
    // then its a valid scenario
    //  and next push left and right for validation
    
    return (validateBST(btree.getLeftNode(), min, val) ||
    validateBST(btree.getRightNode(), val, max))
  }
  // This is an else case
  return -1;
}

let VBST = new TreeNode(10);
VBST.setLeftNode(new TreeNode(7));
VBST.setRightNode(new TreeNode(15));
VBST.getLeftNode().setLeftNode(new TreeNode(3));
VBST.getLeftNode().setRightNode(new TreeNode(8));
VBST.getRightNode().setLeftNode(new TreeNode(9));
VBST.getRightNode().setRightNode(new TreeNode(17));

console.log(validateBST(VBST, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))