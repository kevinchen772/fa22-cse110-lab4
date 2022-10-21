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
12. 
    - A. `student.name`
    - B. `student["Grad Year"]`
    - C. `student.greeting()`
    - D. `student["Favorite Teacher"].name`
    - E. `student.courseLoad[0]`
13. 
    - A. `'32'`. The output was given because string conversion happens to `2` when trying to add a number with a string. It is interpreted as string concatenation. 
    - B. `1`. The output was given because numeric conversion happens as the numerical value of string `'3'` is needed in order to do the subtraction. 
    - C. `3`. The output was given because numeric conversion happens to `null` when tring to add a number with `null`. The numerical value of null is `0`. 
    - D. `'3null'`. The output was given because string conversion happens to `null` when trying to add it with a string. The string value of `null` is `'null'`.
    - E. `4`. The output was given because numeric conversion happens as the numerical value of `true` is needed in order to do the addition. The numerical value of `true` is `1`. 
    - F. `0`. The output was given because numeric conversion happens as the numerical value of `false` and `null` is needed in order to do the addition. The numerical value of `false` and `null` are both `0`.
    - G. `3undefined`. The output was given because string conversion happens to `undefined` when trying to add it with a string `3`. The string value of `undefined` is `'undefined'`.
    - H. `NaN`. The output was given because the global undefined property represents the primitive value `undefined` . It tells us that something has not assigned value; isn't defined. `undefined` isn't converted into any number, so using it in maths calculations returns NaN.
14. 
    - A. `true`. The output is given because numeric conversion happens as the numerical value of string `'2'` is needed in order to do the comparison. Integer `1` is smaller than `2`.
    - B. `false`. To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. `'2'` has a bigger lexicographical order when comparing the first letters in the string. 
    - C. `true`. The output is given because operands of different types are converted to numbers by the equality operator `==`. `'2'` was converted to `2`.
    - D. `false`. The output is given because a strict equality operator `===` checks the equality without type conversion. Since `2` and `'2'` are different types, it will immediately return `false`.
    - E. `false`. The output is given because operands of different types are converted to numbers by the equality operator `==`. `'2'` was converted to `2` and `true` was converted to `1`.
    - F. `true`. The output is given because a strict equality operator `===` checks the equality without type conversion. Since `2` was casted to boolean type by `Boolean(2)`, it becomes `true`. So the strict equality operator will return `true`.
15.  Operands of different types are converted to numbers by the equality operator `==` so that it cannot differentiate `0` from `false`. On the other hand, a strict equality operator `===` checks the equality without type conversion. In other words, if a and b are of different types, then `a === b` immediately returns `false` without an attempt to convert them.
17. `[ 2, 4, 6 ]` will be the result. The function `doSomething` is passed in to function `modifyArray` as an argument. In `modifyArray`, we are looping through the input array `[ 1, 2, 3 ]` and using `doSomething` to double the value in the input array. Thus, we `modifyArray` is called, `[ 1, 2, 3 ]` becomes `[ 2, 4, 6 ]`.
19. The output is `1 4 3 2`. 
