'use strict';

function collectSameElements(collectionA, collectionB) {
  var c = collectionA.filter(function(v){ return collectionB.indexOf(v) > -1 })
  return c
}
