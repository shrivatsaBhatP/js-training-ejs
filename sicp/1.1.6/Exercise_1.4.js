"use strict";
function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
    // similar to return b >= 0 ? plus(a, b) : minus(a, b);
}

a_plus_abs_b(5, -4);