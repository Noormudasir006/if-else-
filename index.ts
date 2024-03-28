import chalk from "chalk";
let marks =100;
// let marks = 85
// let marks = 75
// let marks = 65
// let marks =40
if(marks == 100){
    console.log(chalk.bgBlue.bold.italic("\t\t___congrats! you got A+ grade____"))
}

else if(marks >= 80){
    console.log(chalk.bgCyanBright.bold.italic("\t\t___congrats! you got A grade____"))
}

else if(marks >= 70){
    console.log(chalk.bgGray.bold.italic("\t\t___you got B grade____"))
}
else if(marks >= 60 ){
    console.log(chalk.bgBlackBright.bold.italic("\t\t___you got C grade____"))
}
else{
    console.log(chalk.red("\t\t___you are fail____"))
}