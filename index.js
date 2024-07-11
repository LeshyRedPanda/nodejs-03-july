// console.log('hello')


const fs = require('node:fs/promises');
// const fscl = require('node:fs');
const path = require("node:path");


// create folder

// const createDir = async () => {
//     fs.mkdir('baseFolder')
// }
// createDir();

// const createNewDir = async () => {
//     fs.mkdir('baseFolder/newFolder_2')
//     fs.mkdir('baseFolder/newFolder_1')
//     fs.mkdir('baseFolder/newFolder_3')
//     fs.mkdir('baseFolder/newFolder_4')
//     fs.mkdir('baseFolder/newFolder_5')
// }
// createNewDir();


//create file

// const foo = async () => {


//create file

//folder 1
// const pathToFile = path.join(__dirname,'baseFolder/newFolder_1','test_1_F1.txt');
// await fs.writeFile(pathToFile,'hello file n.1');
// const pathToFile2 = path.join(__dirname,'baseFolder/newFolder_1','test_2_F1.txt');
// await fs.writeFile(pathToFile2,'hello file n.2');
// const pathToFile3 = path.join(__dirname,'baseFolder/newFolder_1','test_3_F1.txt');
// await fs.writeFile(pathToFile3,'hello file n.3');
// const pathToFile4 = path.join(__dirname,'baseFolder/newFolder_1','test_4_F1.txt');
// await fs.writeFile(pathToFile4,'hello file n.4');
// const pathToFile5 = path.join(__dirname,'baseFolder/newFolder_1','test_5_F1.txt');
// await fs.writeFile(pathToFile5,'hello file n.5');
// folder 2
// const pathToFile = path.join(__dirname,'baseFolder/newFolder_2','test_1_F2.txt');
// await fs.writeFile(pathToFile,'hello file n.1 folder 2');
// const pathToFile2 = path.join(__dirname,'baseFolder/newFolder_2','test_2_F2.txt');
// await fs.writeFile(pathToFile2,'hello file n.2 folder 2');
// const pathToFile3 = path.join(__dirname,'baseFolder/newFolder_2','test_3_F2.txt');
// await fs.writeFile(pathToFile3,'hello file n.3 folder 2');
// const pathToFile4 = path.join(__dirname,'baseFolder/newFolder_2','test_4_F2.txt');
// await fs.writeFile(pathToFile4,'hello file n.4 folder 2');
// const pathToFile5 = path.join(__dirname,'baseFolder/newFolder_2','test_5_F2.txt');
// await fs.writeFile(pathToFile5,'hello file n.5 folder 2' );
// folder 3
// const pathToFile = path.join(__dirname,'baseFolder/newFolder_3','test_1_F3.txt');
// await fs.writeFile(pathToFile,'hello file n.1 folder 3');
// const pathToFile2 = path.join(__dirname,'baseFolder/newFolder_3','test_2_F3.txt');
// await fs.writeFile(pathToFile2,'hello file n.2 folder 3');
// const pathToFile3 = path.join(__dirname,'baseFolder/newFolder_3','test_3_F3.txt');
// await fs.writeFile(pathToFile3,'hello file n.3 folder 3');
// const pathToFile4 = path.join(__dirname,'baseFolder/newFolder_3','test_4_F3.txt');
// await fs.writeFile(pathToFile4,'hello file n.4 folder 3');
// const pathToFile5 = path.join(__dirname,'baseFolder/newFolder_3','test_5_F3.txt');
// await fs.writeFile(pathToFile5,'hello file n.5 folder 3');
// folder 4
// const pathToFile = path.join(__dirname,'baseFolder/newFolder_4','test_1_F4.txt');
// await fs.writeFile(pathToFile,'hello file n.1 folder 4');
// const pathToFile2 = path.join(__dirname,'baseFolder/newFolder_4','test_2_F4.txt');
// await fs.writeFile(pathToFile2,'hello file n.2 folder 4');
// const pathToFile3 = path.join(__dirname,'baseFolder/newFolder_4','test_3_F4.txt');
// await fs.writeFile(pathToFile3,'hello file n.3 folder 4');
// const pathToFile4 = path.join(__dirname,'baseFolder/newFolder_4','test_4_F4.txt');
// await fs.writeFile(pathToFile4,'hello file n.4 folder 4');
// const pathToFile5 = path.join(__dirname,'baseFolder/newFolder_4','test_5_F4.txt');
// await fs.writeFile(pathToFile5,'hello file n.5 folder 4');
// folder 5
// const pathToFile = path.join(__dirname,'baseFolder/newFolder_5','test_1_F5.txt');
// await fs.writeFile(pathToFile,'hello file n.1 folder 5');
// const pathToFile2 = path.join(__dirname,'baseFolder/newFolder_5','test_2_F5.txt');
// await fs.writeFile(pathToFile2,'hello file n.2 folder 5');
// const pathToFile3 = path.join(__dirname,'baseFolder/newFolder_5','test_3_F5.txt');
// await fs.writeFile(pathToFile3,'hello file n.3 folder 5');
// const pathToFile4 = path.join(__dirname,'baseFolder/newFolder_5','test_4_F5.txt');
// await fs.writeFile(pathToFile4,'hello file n.4 folder 5');
// const pathToFile5 = path.join(__dirname,'baseFolder/newFolder_5','test_5_F5.txt');
// await fs.writeFile(pathToFile5,'hello file n.5 folder 5');


// }

// foo();


// path and stat folder/file

// const pathLog = async () => {
//
//     //base folder
//     const baseFolderPath = path.join(__dirname,'baseFolder')
//     console.log('base folder path',baseFolderPath);
//
//     const baseFolderStat = await fs.stat(path.join(__dirname,'baseFolder'));
//     console.log('baseFolder isDirectory',baseFolderStat.isDirectory())
//     console.log('baseFolder isFile',baseFolderStat.isFile())
//
//     // nested folder
//
//     //folder 1
//     const folder1Path = path.join(__dirname,'baseFolder/newFolder_1');
//     console.log('folder 1 path',folder1Path)
//
//
//     const folder1Stat = await fs.stat(folder1Path)
//     console.log('folder 1 isDirectory', folder1Stat.isDirectory())
//     console.log('folder 1 isFile', folder1Stat.isFile())
//
//     //txt
//     //folder 1
//     //file 1
//     const txt_1Folder_1 = path.join(folder1Path,'test_1_F1.txt');
//     console.log(txt_1Folder_1);
//     const txt1Stat = await fs.stat(txt_1Folder_1);
//     console.log('folder 1 txt1 isDirectory', txt1Stat.isDirectory());
//     console.log('folder 1 txt1 isFile', txt1Stat.isFile());
//     //file 2
//     const txt_2Folder_1 = path.join(folder1Path,'test_2_F1.txt');
//     console.log(txt_2Folder_1);
//     const txt2Stat = await fs.stat(txt_2Folder_1);
//     console.log('folder 1 txt2 isDirectory', txt2Stat.isDirectory());
//     console.log('folder 1 txt2 isFile', txt2Stat.isFile());
//     //file 3
//     const txt_3Folder_1 = path.join(folder1Path,'test_3_F1.txt');
//     console.log(txt_3Folder_1);
//     const txt3Stat = await fs.stat(txt_3Folder_1);
//     console.log('folder 1 txt3 isDirectory', txt3Stat.isDirectory());
//     console.log('folder 1 txt3 isFile', txt3Stat.isFile());
//     //file 4
//     const txt_4Folder_1 = path.join(folder1Path,'test_4_F1.txt');
//     console.log(txt_4Folder_1);
//     const txt4Stat = await fs.stat(txt_4Folder_1);
//     console.log('folder 1 txt4 isDirectory', txt4Stat.isDirectory());
//     console.log('folder 1 txt4 isFile', txt4Stat.isFile());
//     //file 5
//     const txt_5Folder_1 = path.join(folder1Path,'test_5_F1.txt');
//     console.log(txt_5Folder_1);
//     const txt5Stat = await fs.stat(txt_5Folder_1);
//     console.log('folder 1 txt5 isDirectory', txt5Stat.isDirectory());
//     console.log('folder 1 txt5 isFile', txt5Stat.isFile());
//
// };
//
// pathLog();


const pathLogFolder2 = async () => {
    //base folder path
    // const baseFolder = path.join(__dirname, 'baseFolder');
    // console.log('base folder path (2)',baseFolder);
    // const baseFolderStat = await fs.stat(baseFolder);
    // console.log('base folder isDirectory ', baseFolderStat.isDirectory());
    // console.log('base folder isFile ', baseFolderStat.isFile());

    // folder 2

    // const folder2Path = path.join(__dirname, 'baseFolder/newFolder_2');
    // console.log(folder2Path);
    // const folder2Stat = await fs.stat(folder2Path);
    // console.log('base folder 2 isDirectory ', folder2Stat.isDirectory());
    // console.log('base folder 2 isFile ', folder2Stat.isFile());
    //
    // // txt folder 2
    //
    // const txt1F2 = path.join(folder2Path, 'test_1_F2.txt');
    // console.log(txt1F2);
    // const txt1F2Stat = await fs.stat(txt1F2);
    // console.log('txt 1 f2 is Directory : ', txt1F2Stat.isDirectory());
    // console.log('txt 1 f2 is File : ', txt1F2Stat.isFile());
    //
    // const txt2F2 = path.join(folder2Path, 'test_2_F2.txt');
    // console.log(txt2F2);
    // const txt2F2Stat = await fs.stat(txt2F2);
    // console.log('txt 2 f2 is Directory : ', txt2F2Stat.isDirectory());
    // console.log('txt 2 f2 is File : ', txt2F2Stat.isFile());
    //
    // const txt3F2 = path.join(folder2Path,'test_3_F2.txt');
    // console.log(txt3F2);
    // const txt3F2Stat = await fs.stat(txt3F2);
    // console.log('txt 3 f2 is Directory : ', txt3F2Stat.isDirectory());
    // console.log('txt 3 f2 is File : ', txt3F2Stat.isFile());
    //
    // const txt4F2 = path.join(folder2Path,'test_4_F2.txt');
    // console.log(txt4F2);
    // const txt4F2Stat = await fs.stat(txt4F2);
    // console.log('txt 4 f2 is Directory : ', txt4F2Stat.isDirectory());
    // console.log('txt 4 f2 is File : ', txt4F2Stat.isFile());
    //
    // const txt5F2 = path.join(folder2Path,'test_5_F2.txt');
    // console.log(txt5F2);
    // const txt5F2Stat = await fs.stat(txt5F2);
    // console.log('txt 5 f2 is Directory : ', txt5F2Stat.isDirectory());
    // console.log('txt 5 f2 is File : ', txt5F2Stat.isFile());

}
// pathLogFolder2();












