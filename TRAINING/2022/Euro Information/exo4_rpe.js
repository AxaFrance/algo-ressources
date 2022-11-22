
class Node {
  constructor(parent, id) {
    this.parent = parent;
    this.id = id;
    this.value = null;
    this.perte = null
    this.left = null;
    this.right = null;
  }
  getValue() {
    let v = this.value;
    if (this.left) v += this.left.getValue(); 
    if (this.right) v += this.right.getValue(); 
    return v;
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(null, rootValue);
  }
  findNode(predicate) {
    return this.__findNode(this.root, predicate);
  }
  __findNode(source, predicate) {
    if (source == null) return null;
    if (predicate(source)) return source;
    return this.__findNode(source.left, predicate) || this.__findNode(source.right, predicate);
  }

  findMax() {
    const max = this.__findMax(this.root, 0);
    return max.getValue() * max.perte;
  }
  __findMax(source, max) {
    const sourceValue = source.getValue() * source.perte; 
    const localMax = Math.max(sourceValue, max);
    const maxL = source.left ? this.__findMax(source.left, localMax) : null;
    const maxR = source.right ? this.__findMax(source.right, localMax) : null;
  
    const l = !!maxL ? maxL.getValue() * maxL.perte : 0;
    const r = !!maxR ? maxR.getValue() * maxR.perte : 0;
    if (r > l && r > sourceValue) return maxR;
    if (l > r && l > sourceValue) return maxL;
    return source;
  }
}

//console.error( $variable );
//return to send result
export default (input) => {

  const N = +input.shift();
  const tree = new Tree(0);
  for (let i = 0; i < N/2; i++) {
    const [n, q, f1, p1, f2, p2] = input.shift().split(' ').map(Number);
    let node = tree.findNode(({id}) => id === n);
    node.value = q;
    node.left = new Node(node, f1);
    node.left.perte = p1;
    node.right = new Node(node, f2);
    node.right.perte = p2;
  }
  for (let i = 0; i <= N/2; i++) {
    const [n, q] = input.shift().split(' ').map(Number);
    let node = tree.findNode(({id}) => id === n);
    node.value = q;
  }

  // logs(tree);

  const max = tree.findMax();
  return max;
};
