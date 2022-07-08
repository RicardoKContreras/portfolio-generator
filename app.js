const inquirer = require('inquirer');

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
    
//fs allows us to us file sysyem
/*const fs = require('fs');
const generatePage = require('./src/page-template.js');
//looks into the process and argv to pull data
const pageHTML = generatePage(Name, Github);
// gives data into profileDataArgs as an array


//This const generates the HTML file we are using

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});
*/
/*const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    }
    
    console.log('===============');

profileDataArr.forEach(profileItem => console.log(profileItem));
    

};

printProfileData(profileDataArgs);
*/

