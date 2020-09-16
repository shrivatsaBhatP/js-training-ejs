/* 
Ben Bitdiddle has invented a test to determine whether the interpreter 
he is faced with is using applicative-order evaluation or normal-order evaluation. 
He declares the following two functions :
*/
"use strict";
function p() { return p(); }

// Then he evaluates the statement
function test(x, y) {
    return x === 0 ? 0 : y;
}

test(0, p());

/*
What behavior will Ben observe with an interpreter that uses applicative-order evaluation?
What behavior will he observe with an interpreter that uses normal-order evaluation?
Explain your answer. (Assume that the evaluation rule for conditional expressions
    is the same whether the interpreter is using normal or applicative order:
    The predicate expression is evaluated first, and the result determines
    whether to evaluate the consequent or the alternative expression.)
*/

// output: Infinite recursion