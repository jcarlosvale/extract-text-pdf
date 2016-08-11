#!/usr/bin/env node

'use strict';
const pdfUtil   = require('pdf-to-text'),
      program   = require('commander'),
      fs        = require('fs');

program
       .version('0.0.1')
       .option('-pdf, --pdfPath','Path To PDF For Extract')
       .parse(process.argv);
const pdfPath    = program.args[0];
debugger;
// const pdfPath    = "/home/manoel/Downloads/Sistemas Distribuidos Conceitos e Projeto(1).pdf";
let option ={from:0,to:10};
if(!pdfPath){
    console.log('can\'t do anything without a path to the pdf');
    process.exit(1);
}

pdfUtil.info(pdfPath, function(err, info) {
    if (err) throw(err);

    console.log('Here some information about the pdf:')
    console.log(info);
});

pdfUtil.pdfToText(pdfPath,option,function (err,text) {
        if (err) throw(err);
        // fs.appendFile('test.txt',text,(err)=>{
            
        // });
        fs.appendFileSync('test.txt',text);
        process.exit(0);
});