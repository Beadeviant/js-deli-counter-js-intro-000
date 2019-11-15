function takeANumber(array, name) {
  array.push(name);

      return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array, name) {

  if (array.length > 0) {
var fresh = array.shift();
return  `Currently serving ${fresh}.`;

  } else {
    return "There is nobody waiting to be served!"
  }

}


function currentLine(array) {
if (array.length > 0) {
  for (var i = 0; i < array.length; i++) {
var names = array[i]
  }
    return `The line is currently: ${names}`;
} else{
  return "The line is currently empty.";

}
}
