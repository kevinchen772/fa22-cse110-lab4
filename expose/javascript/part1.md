1. `values added: 20` is printed by line 9.
2. `final result: 20` is printed by line 13.
3. `values added: 20` is printed by line 9.
4. The code returns an error because the variable declared by `let` only exist within block scope. Outside the if block, `result` variable is not defined. 
5. The code returns an error because the variable declared by `const` cannot be changed after the declaration. Here we are trying to reassign the variable with `result = num1 + num2` which creates `TypeError: Assignment to constant variable.` So line 9 did not get excuted.
6. he code returns an error because the variable declared by `const` cannot be changed after the declaration. Here we are trying to reassign the variable with `result = num1 + num2` which creates `TypeError: Assignment to constant variable.` So line 13 did not get excuted.