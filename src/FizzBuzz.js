for ( var x = 0; x < 100, x++); {
  if (x % 3 == 0){
    console.log("Fizz");
  } else if (x % 5 == 0){
    console.log("Buzz");
  } else if (x % 5 == 0 && x % 3 == 0){
    console.log("FizzBuzz");
  } else {
    console.log(x);
  }
};
