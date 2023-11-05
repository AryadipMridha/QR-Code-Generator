/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

/*
Tips 1)change the type to module in package.json
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// 1. Use the inquirer npm package to get user input.
inquirer
  .prompt([{ message: "Enter your url !", name: "URL" }])
  .then((answers) => {
    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    const url = answers.URL;
    const qr_svg = qr.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    // 3. Create a txt file to save the user input using the native fs node module.
    writeFile('qr_code.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 

  })
  
