// Create Math function

// Create a function that takes two numbers as arguments and return their sum
function sum(a, b) {
    return a + b;
}
//create Slipt function example
function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    console.log('The original string is: "' + stringToSplit + '"');
    console.log('The separator is: "' + separator + '"');
    console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

