//          ALDI  LINALDA
const inquirer = require('inquirer');
const delay = require('delay');
const chalk = require('chalk');

const tanya = [
  {
    type:"list",
    name:"Tools",
    message:"Pilih Bilangan Yg Akan Di Konversi == ",
    choices: ['BINER', 'DESIMAL', 'OKTAL', 'HEXADESIMAL'],
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(tanya);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
// biner
      case "BINER":
        var readline = require('readline');

        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
         });

        rl.question("\nMasukan Bilangan = ", function(binary) {
        var octal = parseInt(binary, 2).toString(8);
        var hexa = parseInt(binary, 2).toString(16);
        var desi = parseInt(binary, 2).toString(10);
        console.log("\n\n" +
                    "Bilangan biner "+binary+" Jika Di konversi Menjadi Bilangan Oktal Akan Menjadi --> " ,octal +"\n\n"+
                    "Bilangan biner "+binary+" Jika Di konversi Menjadi Bilangan Desimal Akan Menjadi --> " ,desi + "\n\n"+
                    "Bilangan biner "+binary+" Jika Di konversi Menjadi Bilangan Hexadesimal Akan Menjadi --> " ,hexa + "\n\n");

        rl.close();
        });
        break;
//desimal
      case "DESIMAL":
        var readline = require('readline');

        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
         });

        rl.question("\nMasukan Bilangan = ", function(desimal) {
        var octal = parseInt(desimal, 10).toString(8);
        var hexa = parseInt(desimal, 10).toString(16);
        var biner = parseInt(desimal, 10).toString(2);
        console.log("\n\n" +
                    "Bilangan Desimal "+desimal+" Jika Di konversi Menjadi Bilangan Oktal Akan Menjadi --> " ,octal +"\n\n"+
                    "Bilangan Desimal "+desimal+" Jika Di konversi Menjadi Bilangan Biner Akan Menjadi --> " ,biner + "\n\n"+
                    "Bilangan Desimal "+desimal+" Jika Di konversi Menjadi Bilangan Hexadesimal Akan Menjadi --> " ,hexa + "\n\n");

        rl.close();
        });
        break;
//oktal
      case "OKTAL":
        var readline = require('readline');

        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
         });

        rl.question("\nMasukan Bilangan = ", function(oktal) {
        var desimal = parseInt(oktal, 8).toString(10);
        var hexa = parseInt(oktal, 8).toString(16);
        var biner = parseInt(oktal, 8).toString(2);
        console.log("\n\n" +
                    "Bilangan Oktal "+oktal+" Jika Di konversi Menjadi Bilangan Desimal Akan Menjadi --> " ,desimal +"\n\n"+
                    "Bilangan Oktal "+oktal+" Jika Di konversi Menjadi Bilangan Biner Akan Menjadi --> " ,biner + "\n\n"+
                    "Bilangan Oktal "+oktal+" Jika Di konversi Menjadi Bilangan Hexadesimal Akan Menjadi --> " ,hexa + "\n\n");

        rl.close();
        });
        break;
//hexadesimal
      case "HEXADESIMAL":
        var readline = require('readline');

        var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
         });

        rl.question("\nMasukan Bilangan = ", function(hexa) {
        var octal = parseInt(hexa, 16).toString(8);
        var desimal = parseInt(hexa, 16).toString(10);
        var biner = parseInt(hexa, 16).toString(2);
        console.log("\n\n" +
                    "Bilangan HexaDesimal "+hexa+" Jika Di konversi Menjadi Bilangan Oktal Akan Menjadi --> " ,octal +"\n\n"+
                    "Bilangan HexaDesimal "+hexa+" Jika Di konversi Menjadi Bilangan Biner Akan Menjadi --> " ,biner + "\n\n"+
                    "Bilangan HexaDesimal "+hexa+" Jika Di konversi Menjadi Bilangan Desimal Akan Menjadi --> " ,desimal + "\n\n");

        rl.close();
        });
        break;

      default:
        console.log('Ada Yg Error ... Harap Coba Lagi');
    }
  } catch(e) {
  
  }
}

console.log(chalk`
  {bold.cyan     
                               
 
      :swmysMsewfy:                                           oNoo/     
           -M/       hd+k     +N Nm-      +M+.        ms      oN. 
           -M+       hh.      +N y/.      sMo.        ms      oN  
           -M+       hh.      +MN+.       dNy.        ms      oNoo-  
           -M+       hmok     +MM-.       m d.        ms      oN 
           -M+.      hh.      +MM/.       MmN.      N ms      oN  
           -M/.      hh.      +N s\.      mdM-N      N ms      oN.
           -M/.      hh-      +N m\.      mN N/N     Noms      oN-  
           -o:       +ook     :o om\-     mo o:m     /so-      :ooo/ 

                                   ALDI LINALDA
                                     XII-TKJ 
 
}
      `);

main()