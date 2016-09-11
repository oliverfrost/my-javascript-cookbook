// Video: https://www.youtube.com/watch?v=71AtaJpJHw0

var passed = 3;

var addTo = function() {
  var inner = 2;
  return passed + inner;
};

console.log(addTo());
console.dir(addTo);

passed = 4;

console.log(addTo());
console.dir(addTo);