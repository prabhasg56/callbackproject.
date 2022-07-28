const path = require('path');
const fs = require('fs');

//for creating directory.

function createRandomFilesDirectory(directoryName, createJsonFile, deleteFile) {
    let createPath = path.join(__dirname, directoryName);
    fs.mkdir(createPath, function (error) {
        if (error) {
            console.log(error)
        }
        console.log("Directory created");
        const randomNumb = parseInt(Math.random() * 5);
        createJsonFile(randomNumb, deleteFile);

    })
}

//for creating JSON files.

function createJsonFile(randomNumb, deleteFile) {
    const newPath = path.join(__dirname, `./PrabhasDir/rendomFile${randomNumb}.json`);
    fs.writeFile(newPath, "Hii", function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log("File created");
            deleteFile(newPath, randomNumb);
        }
    })
    if (randomNumb > 1) {
        createJsonFile(randomNumb - 1, deleteFile);
    }
}

//Randomly Deleting JSON files.

function deleteFile(filePath, randomNumb) {
    fs.unlink(filePath, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(" Files Deleted..");
        }
    })
    if (randomNumb > 1) {
        deleteFile(filePath, randomNumb - 1);
    }

}

module.exports = {
    createRandomFilesDirectory,
    createJsonFile,
    deleteFile
}