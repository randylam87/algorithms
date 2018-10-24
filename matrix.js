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

  const placeValue = value => { 
    console.log(`Okay to place ${value} to [${row}][${column}]`);
    matrix[row][column] = value;
    console.log(matrix);
  }

  function changeDirection() {
    if (move === 1) {
      console.log('Changing direction from incrementing to decrementing');
      move = -1;
    } else {
      console.log('Changing direction from decrementing to incrementing');
      move = 1;
    }
  }

  function moveColumn() {
    console.log('Moving column');
    column = column + move;
  };
  function moveRow() {
    console.log('Moving row');
    row = row + move;
  };

  function moveToNextCell() {
    console.log('Moving to next cell');
    if (matrix[row][column + move] !== undefined){
      if(matrix[row][column+move] === 0){
        moveColumn();
      } else {
        if(matrix[row+move][column] === 0) {
          moveRow();
        } else {
          changeDirection();
          moveColumn();
        }
      }
    } 
    else {
      console.log(`[${row+move}][${column}]`,matrix[row+move])
      if(matrix[row + move] !== undefined) {
        if(matrix[row+move][column] === 0){
          moveRow();
        } else {
          changeDirection();
          moveColumn();
        }
      } else {
        console.log('In else')
        changeDirection();
        moveColumn();
      }
    }
    console.log(`Now on [${row}][${column}]`);
  }

  console.log('🤯 🤯 🤯 🤯 🤯');
  for(let value = 1; value <= (length*length); value ++) {
    const isEmpty = (matrix[row][column] === 0);
    const isInBounds = !(matrix[row][column] === undefined);

    console.log(`Checking to see if we can place ${value} in [${row}][${column}] (Current value: ${matrix[row][column]}) `);
    if(isEmpty && isInBounds){
      placeValue(value);
      moveToNextCell();
    } else {
      console.log(`Unable to add value: ${!isEmpty ? 'Cell is not empty' : ''} ${!isInBounds ? 'We are not in bounds' : ''}`)
      moveToNextCell();
      placeValue(value);
      moveToNextCell();
    }
    console.log('🤯 🤯 🤯 🤯 🤯\n');
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
