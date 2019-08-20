'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var  collectionB = objectB.value;
  
    // 双循环进行遍历
	
	
  for (var i = 0;i < collectionA.length;i++)
  {

    for (var j = 0;j<collectionB.length;j++)
    {
		  if (collectionA[i].key == collectionB[j])
		  {
			var temp = collectionA[i].count % 3;
			var  result = (collectionA[i].count - temp) / 3;
			collectionA[i].count = collectionA[i].count - result;
		  }
    }
  }
    // 返回值
  return collectionA;
}
