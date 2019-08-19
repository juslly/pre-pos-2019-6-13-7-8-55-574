'use strict';

function countSameElements(collection) {
  var first = collection[0];
  var array = new Array();
  var array1 = new Array();
  var array2 = new Array();
  var count = 0;
  array.push(first);
  for(var i = 0;i < collection.length-1;i++){
    if(collection[i]!= first){ 
      if(collection[i].length == 1){
        array.push(collection[i]);
        array1.push(count);
        first = collection[i];
        count = 1;
      }else{
        if(collection[i].search("-") != -1){
          count += parseInt(((collection[i]).split("-"))[1]);
        }
        if(collection[i].indexOf("[") != -1){
          count += parseInt((collection[i]).replace(/[^0-9]/ig, ""));
        }
        if(collection[i].indexOf(":") != -1){
         // array.push(((collection[i]).split(":"))[0]);
          array1.push(count);
          count += parseInt((((collection[i]).split(":"))[1]));
          
        }
      }
      
    }else {
      count ++;
    }
    if(i == collection.length-2){
      array1.push(count);
    }
  }
   alert(array+""+array1);
  for(var j=0;j<array.length;j++){
    array2.push({name:array[j],summary:array1[j]});

  }
 array2.push({name:((collection[collection.length-1]).split("-"))[0],summary:parseInt(((collection[collection.length-1]).split("-"))[1])});
  return array2;
}
