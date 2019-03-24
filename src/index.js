module.exports = function solveSudoku(matrix) {
  const mainMatrix = [...matrix];

  return grannyHelper(0, 0, mainMatrix);
}
function grannyHelper(row, column, matrix) {
  const newMatrix = [...matrix];
  if (row === 9) {
    column = column + 1;
    row = 0;
    if (column === 9) {
      return matrix;
    }
  }
  if (matrix[row][column] != 0) {
    return grannyHelper(row + 1, column, matrix)
  }
  for (let value = 1; value <= 9; value++) {
    if (test(row, column, value, newMatrix)) {
      newMatrix[row][column] = value;
      if (grannyHelper(row, column, newMatrix)) {
        return grannyHelper(row, column, newMatrix);

      }
      newMatrix[row][column] = 0;
    }
  }
  return false;
}

function test(row, column, value, matrix) {
  for (let i = 0; i < 9; i++) {
    if (matrix[i][column] === value) {
      return false;
    }
  }
  for (let j = 0; j < 9; j++) {
    if (matrix[row][j] === value) {
      return false;
    }
  }

  row = Math.floor(row / 3) * 3;
  column = Math.floor(column / 3) * 3;
  for (let i = row; i < row + 3; i++) {
    for (let j = column; j < column + 3; j++) {
      if (matrix[i][j] === value) {
        return false;
      }
    }
  }
  return true;
}