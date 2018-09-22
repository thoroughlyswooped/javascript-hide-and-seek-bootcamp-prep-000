function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelectorAll('div#nested div.target');
}

function deepestChild() {
  var current = document.querySelector(`div#grand-node div`);
  var next = [];
  while (current.length > 1) {
    for (var i = 0; i < current.length; i++) {
      if (current[i].isArray()){
        next.push(current[i])
      }
    }
    current = next;
  }
  return current;
}