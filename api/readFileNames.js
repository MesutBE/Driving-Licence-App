
// Use this file to list file names and some attributes
// with specific file extension.. 

const fs = require('fs');
const path = require('path');

function findInDir(dir, filter, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const fileStat = fs.lstatSync(filePath);

        if (fileStat.isDirectory()) {
            findInDir(filePath, filter, fileList);
        } else if (filter.test(filePath)) {

            // find '/assets/' string in the string
            let index = filePath.indexOf("/assets/")
            // slice file path starting index
            let newFileName = filePath.slice(index);
            // split with '/' and push in an arr from path 
            let arrFolders = newFileName.split('/');
            
            // Write your object template to push
            fileList.push({
                fileRelativePath: newFileName,
                testName: arrFolders[3],
                situationNumber: arrFolders[4],
            });
        }
    });

    return fileList;
}

function findInDirAudio(dir, filter, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const fileStat = fs.lstatSync(filePath);

        if (fileStat.isDirectory()) {
            findInDirAudio(filePath, filter, fileList);
        } else if (filter.test(filePath)) {

            // find '/assets/' string in the string
            let index = filePath.indexOf("/assets/")
            // slice file path starting index
            let newFileName = filePath.slice(index);
            // split with '/' and push in an arr from path 
            let arrFolders = newFileName.split('/');
            let tempValue = arrFolders[5].substr(arrFolders[5].length - 5, 1); 
            let isQuestion = isNaN(tempValue) ? false : true;
            
            // Write your object template to push
            fileList.push({
                fileRelativePath: newFileName,
                testName: arrFolders[3],
                situationNumber: arrFolders[4],
                isQuestion: isQuestion,
                questionNumber: arrFolders[5].substr(arrFolders[5].length - 5, 1),
            });
        }
    });

    return fileList;
}
// Usage
let filePathToFind = '/home/hackyourfuture/Documents/HYF/09-Project/Driving-Licence-App/client/public/assets/tests';
let fileNames = findInDir(filePathToFind, /\.(jpg|jpeg)$/);

let data = JSON.stringify(fileNames);
fs.writeFileSync('./fileNames.json', data);

let fileNames2 = findInDirAudio(filePathToFind, /\.(mp3)$/);

let data2 = JSON.stringify(fileNames2);
fs.writeFileSync('./fileNamesAudio.json', data2);