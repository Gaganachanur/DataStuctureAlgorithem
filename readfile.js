/* Simple Hello World in Node.js */
const fs = require('fs');

function countDuplicateWords(filePath) {
    // Read the content of the text file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        // Convert the content to lowercase and split into words
        console.log("data",data)
        const words = data.toLowerCase().split(/\s+/);
        console.log("words",words)

        // Create a dictionary to store word counts
        const wordCount = {};

        // Iterate through the words, updating the count in the dictionary
        words.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });

        // Print the duplicate words
        console.log("Duplicate Words (Ignoring Case Sensitivity):");
        console.log(wordCount)
        for (const word in wordCount) {
            if (wordCount[word] > 1) {
                console.log(`${word}: ${wordCount[word]}`);
            }
        }
    });
}

// Example usage
countDuplicateWords('C:\\Users\\GAGAN\\OneDrive\\Documents\\code.txt');