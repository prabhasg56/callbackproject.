const fs = require('fs');

function callback(error) {
    if (error) {
        console.log(error);
    } else {
        console.log("File Created");
    }
}

function convertUpper(readLipsum, writeLipsumUpper, filepath, convertLowerAndSplit, sortAndStoreContent) {
    fs.readFile(readLipsum, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            console.log("File Reading");
            const convertUpper = data.toString().toUpperCase()

            fs.writeFile(writeLipsumUpper, convertUpper, "utf-8", () => {
                console.log("Converted in UPPERCASE LETTER");
            })

            fs.appendFile(filepath, "\n" + writeLipsumUpper, "utf-8", () => {
                console.log("Stored in a new file upper");
            })
            convertLowerAndSplit(writeLipsumUpper, '../lipsumlower.txt', filepath, sortAndStoreContent);
        }
    })
}


function convertLowerAndSplit(read, write, filepath,) {
    fs.readFile(read, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File Reading");
            const convertLower = data.toString().toLowerCase().split(".").join(".\n")
            fs.writeFile(write, convertLower, "utf-8", () => {
                console.log("Converted in lowercase letter");
            })

            const splitInToSentence = convertLower.toString();
            fs.writeFile(write, splitInToSentence, "utf-8", () => {
                fs.appendFile(filepath, "\n" + write, "utf-8", callback);
            })
            sortAndStoreContent('../sortedlipsumData.txt', write);
        }
    })
}

function sortAndStoreContent(read, write) {
    fs.readFile(read, "utf-8", (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("File Reading")
            const PreviousData = data;
            const sortedData = PreviousData.split(".").sort();
            const newdata = sortedData.toString();
            fs.writeFile(write, newdata, "utf-8", () => {
                console.log("File sorted");
                fs.appendFile('filenames.txt', "\n" + write, "utf-8", callback)
            })

        }
    })
}

function deleteAllFiles(read) {
    fs.readFile(read, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File Reading");
            const arr = data.split("\n");

            function deleteFiles(files, callback) {
                let fileLength = files.length;
                files.map(function (filepath) {
                    fs.unlink(filepath, function (err) {
                        fileLength--;
                        if (err) {
                            callback(err);
                            return;
                        } else if (fileLength <= 0) {
                            callback(null);
                        }
                    });
                });
            }

            deleteFiles(arr, (err) => {
                if (err) {
                    console.log('');
                } else {
                    console.log('All files removed');
                }
            })

        }
    })
}

module.exports = {
    convertUpper,
    convertLowerAndSplit,
    sortAndStoreContent,
    deleteAllFiles
}