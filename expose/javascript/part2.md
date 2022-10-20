1. Line 12 will print `3` because the `prices` array is stored as `[100, 200, 300]` so that is has a length of 3. Then the for loop will run exactly 3 times because `i < prices.length`. So variable `i` got incremented to 3. 
2. Line 12 will print `150` because `discountedPrice` will be reassigned in every round of the loop. When we are trying to `console.log(discountedPrice)`, we are printing the value that has been assigned at the last round of the loop which is `prices[2] * (1 - 0.5)`. This then becomes `300 * 0.5` which is `150`.
3. Line 14 will print `150` because `finalPrice` got updated 3 times in the loop. In the final round, it was assigned with `Math.round(150 * 100) / 100` so that the value became `150`.
4. This function will return `[ 50, 100, 150 ]` because the loop executed 3 times, and `finalPrice` was updated 3 times with the value `50 * 100 / 100 = 50`, `100 * 100 / 100 = 100`, `150 * 100 / 100 = 150`. Those values were pushed into the array `discounted`. So when `discounted` was returned, the value became `[ 50, 100, 150 ]`. 
5. The code caused an error because the variable declared by `let` only exist within block scope. Outside the for loop block, `i` variable is not defined. 
6. The code caused an error because the variable declared by `let` only exist within block scope. Outside the for loop block, `discountedPrice` variable is not defined. 
7. Line 12 will print `150` because `finalPrice` is declared outside of for loop block and within the function block. At line 14 we can safely access variable `finalPrice` within the function block. `finalPrice` got updated 3 times in the loop. In the final round, it was assigned with `Math.round(150 * 100) / 100` so that the value became `150`.
8. This function will return `[ 50, 100, 150 ]` because the loop executed 3 times, and `finalPrice` was updated 3 times with the value `50 * 100 / 100 = 50`, `100 * 100 / 100 = 100`, `150 * 100 / 100 = 150`. Those values were pushed into the array `discounted`. So when `discounted` was returned, the value became `[ 50, 100, 150 ]`. 
9. The code caused an error because the variable declared by `let` only exist within block scope. Outside the for loop block, `i` variable is not defined. 
10. Line 12 will print `3` because `length` was assigned with the length value of `prices` array which is `3`. 
11. This function will return `[ 50, 100, 150 ]` because the loop executed 3 times, and `discountedPrice` was updated 3 times with the value `100 * 0.5 = 50`, `200 * 0.5 = 100`, `300 * 0.5 = 150`. Those values were pushed into the array `discounted`. So when `discounted` was returned, the value became `[ 50, 100, 150 ]`. 
12.     A. `student.name`
        B. `student["Grad Year"]`
        C. 
        D. `student["Favorite Teacher"].name`
        E. `student.courseLoad[0]`
13. 