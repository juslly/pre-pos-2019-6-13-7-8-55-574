'use strict';

function countSameElements(collection) {
  var first = collection[0];
  var array = new Array();
  var array1 = new Array();
  var array2 = new Array();
  var count = 0;
  array.push(first);
  for(var i = 0;i < collection.length;i++){
    if(collection[i]!= first){ 
      array.push(collection[i]);
      array1.push(count);
      first = collection[i];
      count = 1;
    }else {
      count ++;
    }
    if(i == collection.length-1){
      array1.push(count);
    }
  }
  for(var j=0;j<array.length;j++){
    array2.push({key:array[j],count:array1[j]});

  }
  return array2;
}
