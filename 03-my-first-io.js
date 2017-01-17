/*
  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.  
*/

const fs = require('fs');

const filename = process.argv[2];

const buffer = fs.readFileSync(filename);

const string = buffer.toString();

const newLines = string.split('\n');

console.log(newLines.length - 1);