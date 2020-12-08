

function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a - b); //[12, 3, 1, 2, -6, 5, -8, 6]
	const newArr = []; //[-6, -8, 1 ,2 ,3 ,5, 6, 12]
	for (let i = 0; i < array.length - 2; i++){ //-6
		let left = i + 1; //1
		let right = array.length - 1; //5
		while (left < right){
			const currentSum = array[i] + array[left] + array[right];
			if (currentSum === targetSum){
				newArr.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currentSum < targetSum){
				left++;
			} else if (currentSum > targetSum){
				right--;
			}
		}
	}
	return newArr
}