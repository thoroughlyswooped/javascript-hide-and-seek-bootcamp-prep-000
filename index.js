function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function deepestChild() {
  var current = document.querySelectorAll(`div#grand-node div`);
  var next = [];
  while (current.length > 1) {
    for (var i = 0; i < current.length; i++) {
      next.push(current[i]);
    }
    current = next;
    next = [];
  }
  return current[0];
}