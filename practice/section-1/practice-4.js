'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionC = new Array();
  for(var i = 0 ;i < collectionA.length;i++){
    for(var j = 0;j <(objectB.value).length;j++){
      if(collectionA[i].key == (objectB.value)[j]){
        collectionC.push(collectionA[i].key);
        break;
      }

    }

  }
  return collectionC;
}
