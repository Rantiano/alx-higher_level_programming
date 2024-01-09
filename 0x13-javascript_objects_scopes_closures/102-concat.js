#!/usr/bin/node
const fs = require('fs');

// Check if correct number of arguments provided
if (process.argv.length !== 5) {
  console.error('Usage: node concatFiles.js <sourceFilePath1> <sourceFilePath2> <destinationFilePath>');
  process.exit(1);
}

// Extract file paths from command line arguments
const sourceFilePath1 = process.argv[2];
const sourceFilePath2 = process.argv[3];
const destinationFilePath = process.argv[4];

// Read the content of the first source file
fs.readFile(sourceFilePath1, 'utf8', (err, data1) => {
  if (err) throw err;

  // Read the content of the second source file
  fs.readFile(sourceFilePath2, 'utf8', (err, data2) => {
    if (err) throw err;

    // Concatenate the contents of both files
    const concatenatedContent = data1 + data2;

    // Write the concatenated content to the destination file
    fs.writeFile(destinationFilePath, concatenatedContent, 'utf8', (err) => {
      if (err) throw err;

      console.log(`Files ${sourceFilePath1} and ${sourceFilePath2} successfully concatenated to ${destinationFilePath}`);
    });
  });
});

