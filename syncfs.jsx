//CRUD Operations in Synchronous way


/* fs.writeFileSync(): writes data to a file. if file does not exit, it will be created. if the file 
exists, it overwrites the content

// SYNTAX: fs.writeFileSync(filepath, data, options)

//? filePath: The file path to write to
//? data: The content to write to the file
//? options: Optional. includes encoding ('utf8'), mode or flags.
*/

//import fs

const fs = require('fs');
const path = require('path');


const fileName = 'test.txt';
const filePath = path.join(__dirname, fileName);

const writeFile = fs.writeFileSync(filePath, "This is my data for you", 'utf-8');
console.log(writeFile);



/* fs.readFileSync(): Reads a file's content and returns it as a string or buffer.

// SYNTAX: const data = fs.readFileSync(filePath, options);

//? filePath: Path of the file to read.
//? options: Optional. Encoding ('utf8') to get data as a string
*/

const readFile = fs.readFileSync(filePath, 'utf-8');
console.log(readFile);



/* fs.appendFileSYnc(): Appends data to a file. if a file does not exist, it creates the file.
//SYNTAX: fs.appendFileSync(filePath, data, options);
// filePath: filePath to append to
// data: Content to add to the file
// options: Optional. Encoding Options ('utf8);

\n for getting updated data in new line.
*/

const appendFile = fs.appendFileSync(filePath, '\nThis is my updated data for you', 'utf-8');
console.log(appendFile);


/* Delete File (fs.unlinksync()) Delete a file by its path.
//SYNTAX: fs.unlinksync(filePath);
//? filePath: The Path of the file to delete
*/


 const deleteFile = fs.unlinkSync(filePath);
 console.log(deleteFile);



/* Rename File (fs.renameSync) : Renames file from one to another
//SYNTAX: fs.renamefileSync(oldpath, newpath);
//? OldPath: Current File Path
//? NewPath: New File Path or name
*/

const newUpdatedFileName = 'updatedTest.txt';
const newFilePath = path.join(__dirname, newUpdatedFileName);
const renameFileName = fs.renameSync(filePath, newFilePath);
console.log(renameFileName);




