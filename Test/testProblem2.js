const myModule=require('../problem2');
const convertUpper=myModule.convertUpper;
const convertLowerAndSplit=myModule.convertLowerAndSplit;
const sortAndStoreContent=myModule.sortAndStoreContent;
const deleteAllFiles=myModule.deleteAllFiles;


function upperconvert(){
    convertUpper('../lipsum.txt','../lipsumUpper.txt','../filenames.txt',convertLowerAndSplit,sortAndStoreContent);
}
setTimeout(upperconvert,3000);

function deleteAll(){
    deleteAllFiles("../filenames.txt");
}
setTimeout(deleteAll,5000);