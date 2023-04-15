// // Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// // let num = [45,12,6,89,2,5]
// // let target = 6

function divideArray(num){
    if(num.length<=1){
        return num;
    }
    let middle=Math.floor(num.length);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(divideArray(left),divideArray(right))
}

function sortedArray(left,right){
    emptyArr=[];
    while(left.length && right.length){
        if(left[0]> right[0]){
            emptyArr.push(right.shift)
        }
        else{
            emptyArr.push(left.shift)
        }
    }
    return[...emptyArr,...left,...right];
}

function binary(num,  target){
    let left = 0;
    let right = num.length -1;

    while(left<=right){
        let middle = Math.floor((left + right)/2);
        if (num[middle]===target){
            return middle
        }
        else if(num[middle]> target){
            right = middle -1
        }
        else{
            left = middle +1
        }
    }
    return null
}
let num = [45,12,6,89,2,5];
console.log(divideArray(num));
let target = 6;
console.log(binary(num, target))

// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
function divideArray(arr){
    if(arr.length<=1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle)
    let right = arr.slice(middle);
    console.log(left)
    console.log(right)
    return sortedArray(divideArray(left), divideArray(right));
}
function sortedArray(left,right){
    let emptyArr=[];
    while(left.length && right.length){
        if(left[0]<right){
            emptyArr.push(left.shift());
        }
        else{
        emptyArr.push(right.shift());
    }
    return  [...emptyArr,...left,...right];
}
}
let arr=[123,89,5,23,9,56]
console.log(divideArray(arr));

// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];
function binary(arr2,  target1){
    let left = 0;
    let right = arr2.length -1;

    while(left<=right){
        let middle = Math.floor((left + right)/2);
        if (arr2[middle]===target1){
            return middle
        }
        else if(arr2[middle]> target1){
            right = middle -1
        }
        else{
            left = middle +1
        }
    }
    return null
}
let target1 = 34
 let arr2 = [1,4,78,2,67,3];
console.log(binary(arr2, target1))

