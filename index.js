function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function deepestChild() {
  var current = document.querySelectorAll(`div#grand-node div`);
  var returnElem;
  for (var i = 0; i < current.length; i++) {
    if (current[i].querySelectorAll('div').length === 0) {
      returnElem = current[i];
    }
  }
  return returnElem;
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
    //console.log(parseInt(rankedList[i].innerHTML));
  }
}