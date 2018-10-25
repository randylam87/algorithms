const parens = number => _parens(number, 0, '');

const _parens = (left, right, str) => {
  if (left === 0 && right === 0) {
    console.log(str)
  }

  if (left > 0) {
    _parens(left - 1, right + 1, str + "(");
  }

  if (right > 0) {
    _parens(left, right - 1, str + ")");
  }

}

process.argv[2] ? parens(process.argv[2]) : parens(4);