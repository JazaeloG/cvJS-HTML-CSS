let input = document.getElementById('input');

function insert(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  let result = eval(input.value);
  if (result === Infinity || isNaN(result)) {
    input.value = 'Error';
  } else {
    input.value = result;
  }
}
