/* 
  Write a function that accepts a number as a parameter
  This function should return a sprialing matrix.

  Example: 
  matrix(4) would return:

   1,  2,  3,  4
  12, 13, 14,  5
  11, 16, 15,  6
  10,  9,  8,  7

  The array should look like:
  [ [1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7] ]

  Visualization:
        Col 1  | Col 2 | Col 3 | Col 4
  Row 1 [0][0], [0][1], [0][2], [0][3],
         (1)      (2)     (3)     (4)
  -------------------------------------
  Row 2 [1][0], [1][1], [1][2], [1][3],
        (12)     (13)    (14)    (5)
  -------------------------------------
  Row 3 [2][0], [2][1], [2][2], [2][3],
         (11)    (16)    (15)    (6)
  -------------------------------------
  Row 4 [3][0], [3][1], [3][2], [3][3],
        (10)     (9)      (8)    (7)
*/



const matrix = length => {
  // Set up 2D matrix filled with 0s
  let matrix = new Array(length);
  for(let i = 0; i < length; i++){
    matrix[i] = new Array(length).fill(0);
  };

  let row = 0;
  let column = 0;
  let move = 1;

  let isEmpty = (matrix[row][column] === 0);
  const isInBounds =(0<=column && column<=length-1 && 0<=row && row<=length-1);
  const placeValue = value => { 
    console.log(`Okay to place ${value} to [${row}][${column}]`);
    matrix[row][column] = value;
    console.log(matrix);
  }

  function moveToNextCell() {
    console.log('Moving to next cell')

    if((column+move)>=0 && (column + move)<= length-1){
      console.log('Moving column');
      column = column + move;
    } else {
      console.log('Moving row')
      if(row + move > length -1 || row + move < 0 || !isEmpty) {
        console.log('Unable to move forward, changing direction', row)
        if(move === 1) {
          console.log('Changing direction from incrementing to decrementing');
          move = -1;
        } else {
          move = 1;
          console.log('Changing direction from decrementing to incrementing');
        }

        if(isEmpty){
          column = column + move;
        } else {
          row = row + move;
        }
      } else {
        if(isEmpty) {
          row = row + move;
        } else {
          column = column + move;
        }
      }
    }
    console.log(`Now on [${row}][${column}]`);
  }

  console.log('🤯 🤯 🤯 🤯 🤯');
  for(let value = 1; value <= (length*length); value ++) {
    isEmpty = (matrix[row][column] === 0);
    console.log(`Checking to see if we can place ${value} in [${row}][${column}] (Current value: ${matrix[row][column]}) `);
    if(isEmpty && isInBounds){
      placeValue(value);
      moveToNextCell();
    } else {
      console.log(`
Unable to add value:
${!isEmpty ? 'Cell is not empty' : 'We are not in bounds'}
      `)
      moveToNextCell();
      placeValue(value);
      moveToNextCell();
    }
    console.log('🤯 🤯 🤯 🤯 🤯');
  }

  return matrix
}

// Helper function to print
const printMatrixToConsole = number => {
  const pad = (number*number).toString().length; // Number of digits of the maximum value of the matrix;
  const result = matrix(number).map(array => array.map(number => number.toString().padStart(pad, ' '))
                               .join(' '))
                               .join('\n');

  return console.log(`This should return a ${number}x${number} spiraling matrix:\n${result}`);
};

process.argv[2] ? printMatrixToConsole(parseInt(process.argv[2])) : printMatrixToConsole(4);