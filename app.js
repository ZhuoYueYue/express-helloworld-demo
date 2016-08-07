/**
 * Created by zhuoyue on 16-8-5.
 */
let express = require('express');
let app = express();
// let ZipToBarCore=require('./core/zip-to-bar-core');
// let BarToZipCore=require('./core/bar-to-zip-core');
let bodyParser = require("body-parser");
let {Route}=require("./route/route");
let route=new Route();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/result',function(req,res){
   let code=req.body.code;
    let result=route.do(code);
    console.log(result);
    if(result.text.rerun===true) {
        res.send(result.text.text+route.do("").text.text); //show true result and menu
    }
    else res.send(result.text.text);
});


app.listen(3000, function () {
    console.log('Server listening at http://localhost:3000');
});
