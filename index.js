// Word Search
// Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

// The given matrix will be filled with all lowercase letters (a-z).
// The word to find will always be in the matrix exactly once.
// The word to find will always be in a straight line in one of these directions:
// left to right
// right to left
// top to bottom
// bottom to top
// For example, given the matrix:

// [
//   ["a", "c", "t"],
//   ["t", "a", "t"],
//   ["c", "t", "c"]
// ]
// And the word "cat", return:

// [[0, 1], [2, 1]]
// Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).

function findWord(matrix, word) {
  console.log(matrix, word);

  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  // 1. loop through every cell (r,c) in the matrix
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === word[0]) {
        // loop through each direction [dr, dc] in directions array
        for (const [dr, dc] of directions) {
          let found = true;

          // check every letter of the word in this direction
          for (let i = 1; i < word.length; i++) {
            const nextR = r + dr * i;
            const nextC = c + dc * i;

            // boundary check + letter match check
            if (
              nextR < 0 ||
              nextR >= matrix.length ||
              nextC < 0 ||
              nextC >= matrix[0].length ||
              matrix[nextR][nextC] !== word[i]
            ) {
              found = false;
              break; // stop checking this direction
            }
          }

          // 5. If we made it through the word loop without 'found' becoming false
          if (found) {
            const endR = r + dc * (word.length - 1);
            const endC = c + dc * (word.length - 1);
            return [
              [r, c],
              [endR, endC],
            ];
          }
        }

        // wordCounter++;
        // test all directions
        // if (matrix[r][c + 1] === word[wordCounter]) {
      }
    }
  }
}

// 2. if (matrix[r][c] === word[0])
// // test all directions
// // for each direction, check if subsequent letters match word[1], word[2] etc by adding the direction values to your current (r,c)

// 3. if you reach the end of the word, you've found your start and end indicies

// Ways the word can show up
// 1. left to right
//for (let row = 0; row < matrix.length; row++) {
//  for (let col = 0; col < matrix[row].length; col++) {
//    console.log(matrix[row][col])
//  }
// }

// 2. right to left
// for (let row = matrix.length -1; row >= 0; row--) {
//  for (let col = matrix[row].length -1; col >= 0; col--) {
//    console.log(matrix[row][col])
//  }
// }

// 3. top to bottom
// for (let col = 0; col < matrix[0].length; col++) {
//   for (let row = 0; row < matrix.length; row++) {
//     console.log(matrix[row][col])
//   }
// }

// 4. bottom to top
// for (let col = matrix[0].length - 1; col >= 0; col--) {
//  for (let row = matrix.length - 1; row >= 0; row--) {
//    console.log(matrix[row][col]);
//  }
// }

//return matrix;
// }
