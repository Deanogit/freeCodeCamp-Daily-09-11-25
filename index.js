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
  for (let col = matrix[0].length - 1; col >= 0; col--) {
    for (let row = matrix.length - 1; row >= 0; row--) {
      console.log(matrix[row][col]);
    }
  }

  //return matrix;
}
