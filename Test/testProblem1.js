const myModule=require("../problem1");
const createRandomFilesDirectory=myModule.createRandomFilesDirectory;
const createJsonFile=myModule.createJsonFile;
const deleteFile=myModule.deleteFile;

createRandomFilesDirectory("PrabhasDir", createJsonFile, deleteFile);
