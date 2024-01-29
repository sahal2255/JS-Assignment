// ====== Question One =====


// function first(){
//     let a=[1,2,3,4,8];
//     console.log(a.length)
// }
// first();



// ===== Question Two =====



// function second(str) {
//    return str.split('').reverse().join("")
    
// }
// console.log(second("sahal"))



// =====Question Three =====



// function asscend(){
//     let b=[4,5,2,1,7,3,6,]
//     b.sort();
//     console.log(b)
// }
// asscend();


// ===== Question Four =====



// function sumEvens(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//       if (i % 2 === 0) { 
//         sum += i; 
//       }
//     }
//     return sum;
//   }
// const n=10;
// const result =sumEvens(n);
// console.log(result)



// ===== Qustion Five =====


// function isPrime(number) {
//   if (number < 2) return false;

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }

//   return true;
// }


// const testNumber = 17;
// console.log((testNumber) +(isPrime(testNumber)) );




// ===== Question Six =====


// function six(arr){
//         if(arr.length < 2){
//                 console.log("second largest");
//                 return;
//         }
//         arr.sort((x,y)=>y-x);
//         let sec=arr[1];
//         console.log(sec);
// }
// let c=[2,3,4,5,6,9];
// six(c);


// ===== ---- seven ---- =====


// function remove(arr) {
//         return Array.from(new Set(arr));
//     }
    
//     let c = [2, 3, 4, 4, 5, 6];
//     let newArray = remove(c);
    
//     console.log(newArray);
    

    // ====--Question 8 --===


    // function sumArray(numbers) {
    //   return numbers.reduce((sum, num) => sum + num, 0);
    // }
    
   
    // const myArray = [1, 2, 3, 4, 5];
    // const arraySum = sumArray(myArray);
    // console.log(arraySum)
    



    // ======--- Question 9---====





    // ===--- Question 11 ---====


    
    // function factorial(n) {
    //     if (n === 0 || n === 1) {
    //       return 1;
    //     } else {
    //       return n * factorial(n - 1);
    //     }
    //   }
      
     
    //   const result = factorial(5);
    //   console.log(result); 
      

    
    
    
    
    
    
    
    
    
    // =====----- Question 16 ----=====

    // function Sum(limit) {
    //   let sum = 0;
    
    //   for (let i = 0; i < limit; i++) {
    //     if (i % 3 === 0 || i % 5 === 0) {
    //       sum += i;
    //     }
    //   }
    
    //   return sum;
    // }
    
    
    // const limit = 10;
    // const result = Sum(limit);
    // console.log(result);





      // =====---- Question 17 ---====

    //   function sumEvenNumbers(limit) {
    //     let sum = 0;
    
    //     for (let i = 0; i < limit; i += 2) {
    //         sum += i;
    //     }
    
    //     return sum;
    // }
    
    // sumEvenNumbers()
    // const givenNumber = 10;
    // const sumOfEvens = sumEvenNumbers(givenNumber);
    // console.log(sumOfEvens);
    
    











    









    // =======------ Question 18 -----========


    // const array1 = [1, 2, 3, 4, 5];
    // const array2 = [3, 4, 5, 6, 7];
    
    // function findUnion(arr1, arr2) {
    //   const combinedArray = arr1.concat(arr2);
    //   const uniqueValues = new Set(combinedArray);
    //   const unionArray = Array.from(uniqueValues);
    //   console.log(unionArray);
      
    // }
      
    // findUnion(array1,array2)
    
      
    
    
    
 
    
  

  





  