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
			collectionA[i].count --;
		  }
		}
  }
  // 返回值
  return collectionA;
}
