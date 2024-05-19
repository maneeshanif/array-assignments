  //     Question 1
let fruits:string[]= ["apple","banana","mango","orange"];
for (const i of fruits) {console.log(i);}

  //    Question2
let numbers:number[] = [10,20,30,40];
numbers.forEach((e) => console.log(e));

  //    Question3
let thirdFruit = fruits[2] ;
console.log(thirdFruit);

  //    Question4
  numbers[1] = 25;
  console.log(numbers);

  //    Question5
  fruits.push("grape");
  console.log(fruits);

  //    Question6
  let lastFruit = fruits.pop()
  console.log(lastFruit);
  console.log(fruits);
  
  //   Question7
  let firstFruit = fruits.shift();
  console.log(firstFruit);
  console.log(fruits);

  //   Question8
  fruits.unshift("kiwi");
  console.log(fruits);

  //  Question9
  fruits.splice(1,2)
  console.log(fruits,"q9");

  // Question10
  fruits.splice(1,0,"pineapple","pear")
  console.log(fruits,"q10");

  // Question 11
  let citrusFruits = fruits.slice(0,2)
  console.log(citrusFruits);
   // Question 12
   let lastTwoFruits = fruits.slice(2)
   console.log(lastTwoFruits);
   
  
  

  
  

  
  
  

  

