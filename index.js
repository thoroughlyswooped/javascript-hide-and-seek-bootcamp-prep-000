function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function deepestChild() {
  var current = document.querySelectorAll(`div#grand-node div`);
  var next = [];
  while (current.length > 1){
    //iterate through current
    for (var i = 0; i < current.length; i++) {
      //check if element has child
      if (current[i].querySelctor('div') !== null){
       next.push(current[i].querySeectorAll()) 
      }
    }
    current = next;
    next = [];
  }
  return current;
}