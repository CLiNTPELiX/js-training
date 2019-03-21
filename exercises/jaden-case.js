'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = string => string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

// const jadenCase = function(string) {
// const words = string.split(' ');
// for (let i = 0; i < words.length; i++) {
//     // for ( let j = 0; j < words[i].length; j++)
//     if (words[i].charCodeAt(0) >= 97 && words[i].charCodeAt(0) <= 122) {
//         words[i].charCodeAt(0) = words.charCodeAt(0) - 32
//     } else {
//         return;
//     }     
// } 


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('Je capitalise mon investissement'), 'Je Capitalise Mon Investissement')

// End of tests */
