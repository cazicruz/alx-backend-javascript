// Importing the 'readline' module for reading user input
/* eslint-disable */
const readline = require('readline');

// Creating a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");

// waiting for input
rl.on('line', (input)=>{console.log(`Your name is:`, input)});

// listen for closing
rl.on('close', ()=>{console.log('This important software is now closing')});