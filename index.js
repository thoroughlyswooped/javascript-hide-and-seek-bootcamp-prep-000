function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function deepestChild() {
  var current = document.querySelectorAll(`div#grand-node div`);
  var next = [];
  while (current.childNodes.length > 1) {
    for (var i = 0; i < current.length; i++) {
      if (current[i].childNodes.length > next) {
        next = current[i];
      }
    }
    current = next;
    next = [];
  }
  return current;
}