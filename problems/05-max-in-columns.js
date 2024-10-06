/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

function maxColumn(matrix) {

  let maxArr = [];

  for(let i = 0; i < matrix.length; i ++){

    maxArr.push(matrix[0][i]);
  }

  //Find max values one directon
    for(let i = 0; i < matrix.length-1; i++){
      for(let j = 0; j < matrix[i].length; j++){

      if(matrix[i][j] > matrix[i+1][j] ){
        maxArr[j] = matrix[i][j];
      }
    }
  }

  //cycle through the last nested array to see if thoe are max or not
  let lastArr = matrix[matrix.length-1];

  for(let i = 0; i < lastArr.length; i++){

    if(lastArr[i] > maxArr[i] ){
      maxArr[i] = lastArr[i];
    }
    }
  

   return maxArr;
}

// matrix = [
//   [5, 9, 21],
//   [9, 19, 6],
//   [12, 14, 15],
// ];

// console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
