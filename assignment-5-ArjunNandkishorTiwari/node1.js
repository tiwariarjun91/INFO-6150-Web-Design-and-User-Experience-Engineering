/**
* A Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
class Node {

  constructor(tag, id,children, classes) {
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // Array of child nodes.
    this.children = children; // All children are of type Node
    // this. resultArr = [];
    this.id = id;
  }

  
  
  /**
  * Returns descendent nodes matching the selector. Selector can be 
  * a tag name or a CSS class name.
  * 
  * For example: 
  * 
  * 1.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `span` should return 3 span nodes in this order
  * span-1 -> span-2 -> span-3.
  *
  * 2.
  * <div> 
  *   <span id="span-1" class="note"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `.note` should return one span node with `note` class.
  *
  * 3.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <article>
  *     <div>
  *       <span id="span-3"></span>
  *     </div>
  *   </article>
  * </div>
  * Selector `div span` should return three span nodes in this order
  * span-1 -> span-2 -> span-3.
  * 
  * @param {string} the selector string.
  * @returns {Array} Array of descendent nodes.
  * @public
  */
  search(selector) {
    var result = [];
    if(selector == null){
      console.log("Please provide selector");
      return;
    } else {
        
            if(selector.charAt(0)=="."){
                // search by class
              selector = selector.substr(1,selector.length);
             
            //   if(this.classes==selector){
            //     // console.log("here")
            //     this.resultArr.push(this.class);
            // }
              if(this.children){
                this.children.forEach((n) => {this.helperClass(selector,n,result)})
            }
            }

            else{
            //   if(this.tag==selector){
            //     // console.log("here")
            //     this.resultArr.push(this);
            // }
              if(this.children){
                this.children.forEach((n) => {this.helperElement(selector,n,result)})
            }
                //search by one elements
            }
        
   

        // helper(selector,this.Node,this.result)//element;
        if (result.length==0){
          console.log("No Results !!!")
        }
        return result;
  }
}

  helperClass(selector,node,resultArr){
   
    if(node.classes==selector){
        // console.log("here")
        resultArr.push(node);
    }
    if(node.children){
        node.children.forEach((n) => {this.helperClass(selector,n,resultArr)});
    } else{
        return;
    }
}

helperElement(selector,node,resultArr){
 
  if(node.tag==selector){
      // console.log("here")
      resultArr.push(node);
  }
  if(node.children){
      node.children.forEach((n) => {this.helperElement(selector,n,resultArr)});
  } else{
      return;
  }
}

}





// tag,id,children,classes

let span1 = new Node("span","span-1",[],"note");
let span2 = new Node("span","span-2",[],"");
let p1 = new Node("p","para-1",[],"sub1-p1 note");
let span3 = new Node("span","span-3",[],"sub1-span3");
let divNode2 = new Node("div","div-2",[p1,span3],"subContainer1");
let label1 = new Node("label","lbl-1",[],"");
let section1 = new Node("section","sec-1",[label1],"");
let divNode3 = new Node("div","div-3",[section1],"subContainer2");
let span4 = new Node("span","span-4",[],"mania");
let span5 = new Node("span","span-6",[],"note mania");
let divNode4 = new Node("div",[span4,span5],"");
let randomNode = new Node("span","span-6",[],"randomSpan");
let divNode1 = new Node("div","div-1",[span1,span2,divNode2,divNode3,divNode4],"mainContainer");
let body = new Node("body","content",[divNode1,randomNode],"");
// let randomNode = new Node("")




    





// This is the DOM tree we will check when we review your assignment. So make sure you create your nodes manually based on this DOM tree. Feel free to drop questions in the thread.




/* DOM -
<body id="content">
<div id="div-1" class="mainContainer">
<span id="span-1" class="note"></span>
<span id="span-2"></span>
<div id="div-2" class="subContainer1">
<p id="para-1" class="sub1-p1 note"></p>
<span id="span-3" class="sub1-span3"></span>
</div>
<div id="div-3" class="subContainer2">
<section id="sec-1">
<label id="lbl-1"></label>
</section>
</div>
<div id="div-4">
<span id="span-4" class="mania"></span>
<span id="span-5" class="note mania"></span>
</div>
</div>
<span id="span-6" class="randomSpan"></span>
</body>
*/


// And here are the test cases we will check.
// Pls make sure you run these test cases before you submit your work.



// Testing
console.log("Started...");
// Test case 1 -
console.log(divNode1.search("span"));
// Test case 2 -
console.log(divNode1.search(".note"));
// Test case 3 -
console.log(divNode1.search("label"));
// Test case 4 -
console.log(p1.search(".note"));
// Test case 5 -
console.log(divNode1.search("div"));
// Test case 6 -
console.log(randomNode.search("div"));
// Test case 7 -
console.log(divNode2.search("section"));
// Test case 8 -
console.log(body.search());
// Error conditions need to be handled
// invalid input need to be handled
// Test case 9 -
console.log(body.search("section"));
// Test case 10 -
console.log(divNode1.search(".randomSpan"));
// randomSpan is some Span outside your divNode1 closed

