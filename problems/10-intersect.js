/*
Define a function called intersect that takes in two array parameters and
returns a new array containing the elements common to both arrays.
*/

function intersect(arr1, arr2){
    let newArr = [];

    for(let i = 0; i < arr1.length; i++){
        let char1 = arr1[i];

        for(let j = 0; j < arr2.length; j++){
            let char2 = arr2[j];

            if(char1 === char2){
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
}

// console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); //=> [ 'b', 'd' ]
// console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); //=> []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = intersect;
