/* 8
 A word is said to be a “doubloon” if every letter that appears in the word appears exactly twice.
 Here are some example doubloons found in the dictionary:

Abba, Anna, appall, appearer, appeases, arraigning, beriberi, bilabial, boob, Caucasus, coco,
Dada, deed, Emmett, Hannah, horseshoer, intestines, Isis, mama, Mimi, murmur, noon, Otto, papa,
peep, reappear, redder, sees, Shanghaiings, Toto
Write a function called isDoubloon that takes a string and checks whether it is a doubloon.
To ignore case, invoke the toLowerCase method before checking.
 */

"use strict";

let isDoubloon = string => {
    let s = string.toLowerCase().split("");
    s.some(
        (element, index, array, argument) => {
            if(array.lastIndexOf(element) !== index) {
                array = array.slice(0, index) + array.slice(array.lastIndexOf(element)+1);
            }
        }
    );
};

console.log(isDoubloon("Anna"));