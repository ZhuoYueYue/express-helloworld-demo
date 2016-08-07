/**
 * Created by zhuoyue on 16-8-5.
 */
const request = require('request');
let readlineSync = require('readline-sync');
let startInput="start";
function getInput(code) {
    if (code === "start")translate(code);//first can show menu
    else {
        code = readlineSync.question().trim();
        translate(code);
    }
}

function translate(code) {
    const option = {             //自定义 HTTP Headers  request会将将这些设置项放到http的请求headers中
        url: "http://localhost:3000/result",
        method: "POST",
        json: true,
        body: {'code': code}
    };
    request(option, function (error, response, body) {
        if(body===undefined)process.exit(); //chose exit
         console.log(body);
         getInput();
    });
}

getInput(startInput);
