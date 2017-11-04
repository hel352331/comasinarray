var arr = ['one', '2', 'three', 4, 56];
var empty = '';
var i = 0;

while (i < arr.length - 1) {
  empty += arr[i] + ', ';
  i++;
}
empty += arr[arr.length - 1] + '.';
alert('Your array is: ' + empty);
