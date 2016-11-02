/*
//name and age execersice
function nameAge(){
var name = prompt('Whats your name?');
var age = prompt('Whats your age?');

alert('Hello ' + name + ' you are: ' + age + ' years old');  
}


//bigger function 
function bigger(a, b){
  if( b >= a) {
    console.log(b + " is bigger then " + a);
  }
  else if(a === b) {
    console.log(b + " = " + b);
  }
  else {
    console.log(a + " is bigger then " + b);
  }
}
var a = 6;
var b = 7;
bigger(a, b);


//Individual Exercise 1

var canDrink = function(){
  var age = prompt("Whats your age?");
  if(age >= 18){
    alert("Lets drink");
  }else{
    alert("You are not alowd to drink");
  }
}


//Individual Exercise 2

function canEnter(){
  var nationality = prompt("Whats your citizenship?");
  if(nationality.toUpperCase() === 'ISRAELI'){
    alert("You are allowd to enter");
  }else{
    alert('You are not permitted to enter');
  }
}


//Individual Exercise 3

function canDrinkFree(){
  var age = prompt('Whats your age?');
  var gender = "";
  if( age < 18){
    alert('You are NOT allowd to drink');
  }
  else{
    gender = prompt('Whats you gender? male/female/other')
    if(gender.toUpperCase() === 'FEMALE'){
      alert("Drinks on me :)");
    }else{
    alert("How would you be paying for your drinks?");
    }
  }
}


//Even numbers
function evenNumbers(num){
  for(var i = 0; i<=num ; i+=2){
  console.log(i);
  }
}
evenNumbers(100);


//Fizz Buzz

function fizzBuzz(number){
  for(var i=0; i<=number; i++){
    if(i % 5 === 0){
      if( i % 3 === 0){
        console.log("fizzbuzz");
      }else{
        console.log("fizz");
      }
    }else if(i % 3 === 0){
      console.log("buzz");
    }else{
      console.log(i);
    }
  }
}


//arrays exercise 1
function printRestaurants(restaurants){
  for(var i=0; i<restaurants.length; i++){
    console.log(restaurants[i]);
  }
}
var restaurants = ["Anastasia", "Taisu", "Zakaim", "Nanuchka", "Miss Kaplan"];
printRestaurants(restaurants);


//arrays exercise 2(average)
function findAverage(array){
  var sum = 0;
  for(i = 0 ; i < array.length ; i++){
    sum += array[i];
  }
  console.log("The average number in the array is: " + sum/array.length);
}
var arr = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];
findAverage(arr);


//arrays exercise 3

function concatString(array){
  var str = "";
  //var count = 0;
  for(var i = 0; i < array.length; i++){
    if(i===0){
      str = array[i];
    }else{
      str = str.concat(" + ", array[i]);
    }
  }
  console.log(str);
}

var myColor = ["Red", "Green", "White", "Black"];
concatString(myColor);

*/

//arrays exercise 4

function slashEven(number){
  var newNum = number;
  for(var i = 0; i < number.length; i++){
    if(number[i] % 2 === 0 && number[i+1] % 2 ===0){
      var temp = number[i].concat(number[i+1])
      var newTemp = number[i].concat("-", number[i+1]);
      newNum = newNum.replace(temp, newTemp);
    }
  }
  console.log(newNum);
} 

var num = "24543665";
slashEven(num);


/*
//arrays exercise 5 optional
function mostFrequent(array){
  var frequent = "";
  var count = 0;
  var tempCount = 1;
  for(var i = 0; i < array.length; i++){
    for(var j = i; j < array.length; j++){
      if(array[j] === array[i]){
        tempCount++;
      }
    }
    if (tempCount > count) {
      count = tempCount;
      frequent = array[i];
    }
    tempCount = 1;
  }
  console.log(frequent);
}
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
mostFrequent(arr);




//arrays exercise 6 optional

//solution 1:

function missingNum(array){
  var sortedArray = array.sort(function(a, b){return a-b});
  for(var i = 0 ; i < sortedArray.length ; i++){
    if(sortedArray[i+1] - sortedArray[i] !== 1){
      var missingNum = sortedArray[i]+1;
      console.log("The missing num is: " + missingNum);
      break;
    }
  }
}

var arr = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];
missingNum(arr);




//solution 2:

function missingNum(array, numer){
  var expectedSum = 0;
  var arraySum = 0;
  for (var i = 1 ; i <= numer ; i++){
    expectedSum += i;
  }
  for(var i = 0; i < array.length; i++){
    arraySum += array[i];
  }
  console.log(expectedSum-arraySum);
}
var arr = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];
missingNum(arr, 200);
*/