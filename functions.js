// TODO: add your solutions here!
function combine(str1, str2) {
  var result = str1 + str2;
  return result
};
/* declaring function combine with two str parameters
  add parameter one with parameter 2
  return the result*/

function repeatPhrase(phrase, n) {
  for(var i = 0; i < n; i++) {
    console.log(Phrase);
  }
}
repeatPhrase("Hello", 5);
/* repeatPhrase takes a string and number
    iterates the number of times given
    print string based off n */

function NthPower(num, power){
  var result = 1
  for(var i = 0; i < power; i++) {
    result *= number;
  }
  return results;
}
/* Nthpower takes a number and placeholder
    placeholder is iterated over
    the result times the number
    returns result */

function area(radius) {
  var r = radius * radius;
  var area = Math.PI * r;
  return area;
}
/* area has a parameter of radius
    radius times radius is stored in r
    then PI times r is returned*/

function theorem(x1, y1, x2, y2){
  var a = Math.abs(y1 - x1);
  var b = Math.abs(y2 - x2);
  var c = (a * a) + (b * b);
  c = Math.sqrt(c);
  return c;
}
/* Pythagorean Theorem has 4 parameters
    both a and b variables are turned to absolute numbers
    the result c is then squared and returned*/

function EvenDivision(x, y) {
  var result = x % y === 0;
  return result;
}
/* has two parameters x and y
    x is divided by y
    result should not have a remainder*/

function countVowels(word) {
     var count = 0;
    word = word.toLowerCase();
    for(var i = 0; i < word.length; i++) {
      if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] ===     'o' ||  word[i] === 'u' ||  word[i] === 'y'){
        count++;
           }
            }
    return count;
}
/*  countvowels has 1 parameters
    each word is iterated over
     iteration only displays the vowles using index*/

function findWdi(arr){
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === 'wdi'){
        return true;
      }
    }
    return false;
  }
  /* findWdi iterated over arr
      if the arr is wdi then the result is true
      if not then it is false*/

  function findLongestWord(sentence) {
      var longestLength = -1;
      var longestIndex = -1;
      var arr = sentence.split(" ");
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longestLength) {
          longestLength = arr[i].length;
         longestIndex = i;
       }
     }
     /*  ¯\_(ツ)_/¯  */

     return arr[i];
     function printTriangle(length) {
      for(var i = 1; i <= length; i++) {

       var tier = '';

        for(var j = 0; j < i; j++) {
          tier += '*';
        }
    }
      /* function has iteration of length
          and a iteration over tier
          adding each * to every iteration */
