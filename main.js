/**
 * Created by zhuoyue on 16-8-3.
 */
let {Route} = require('../route/route');
let route=new Route();
var scanf = require('scanf');
const repl = require('repl');
console.log(route.do("").text);
//接受用户输入
function handleCmd(cmd, context, filename, done) {
    switchRouter({
        cmd: cmd.trim()//cmd输入 前后空格去掉
    }, done);

    done(null);
}
//cmd输入
repl.start({prompt: ">", eval: handleCmd});
function switchRouter(context, done) {
    let result = route.do(context.cmd);
    console.log(result.text);
    if(result.rerun===true){console.log(route.do("").text);}
    done(null);
}

// console.log(route.do("menu").text.text);
// for(let i=1;i>0;i++){
//     let   input=scanf('%s');
//     let result=route.do(input).text;
//       console.log('%s',result.text);
//   //  console.log(result);
//     if(result.rerun===true)
//     {console.log(route.do("").text.text);}
// }