

const fs= require('fs');
const path= require('path');


let inputArr = process.argv.slice(2);
// console.log(inputArr)

let command = inputArr[0];

switch (command) {
  case "tree":
    console.log("tree Command will be Executed ");
    break;

  case "organize":
    // console.log("Organize command will be Executed ");
    organizeFn(inputArr[1]);
    break;

  case "help":
    console.log(`list of all command -
                                            (1)tree command - node FO.js tree dirPath
                                            2) Oragnize command - node FO.js organize dirName
                                            3) help command - node FO.js help   `);
    break;

  default:
    console.log("No command passes(Enter a valid Command)");
    break;
}

function organizeFn(dirPath) {
     let destPath;
    if(dirPath==undefined)
    {
        console.log("please Enter the valid path")

        // check whether folder path is exist or not
    }
    else{

        let doesExist= fs.existsSync(dirPath)

        // checking the folder path exist or not 

        if(doesExist == true)
        {
              destPath= path.join(dirPath,'organizedFiles')
        //  first i have to make a path for a folder
        // C:\Users\amand\OneDrive\Desktop\assignments\node\File Organizer\test folder\organizedFiles
            }
        if( fs.existsSync(destPath)==false)
        {
            // if this folder is not exist then make this folder 
            fs.mkdirSync(destPath);
        }
        else
        {
            console.log("folder already exists");

            // if exist then ignore it 
        }
    }


}
