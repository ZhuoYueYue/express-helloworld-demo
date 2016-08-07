/**
 * Created by zhuoyue on 16-8-3.
 */
let CommandResponse=require('./command-response');
let GotoZipToBarCommand=require('./goto-zip-to-bar-command');
let gotoZipToBar=new GotoZipToBarCommand();
let GotoBarToZipCommand=require('./goto-bar-to-zip-command');
let gotoBarToZip=new GotoBarToZipCommand();
let ExitCommand=require('./exit-command');
let exit=new ExitCommand();
let InvalidCommand=require('./invalid-command.js');
let invalid=new InvalidCommand();
class GotoMainPageCommand {
    do() {
        return new CommandResponse({
            text: `
1. Translate zip code to bar code
2. Translate bar code to zip code
3. Quit
Please input your choices(1~3)`,
            newMapping: {
                "1": gotoZipToBar.do,
                "2": gotoBarToZip.do,
                "3": exit.do,
                "*": invalid.do
            }
        });
    }
}
module.exports=GotoMainPageCommand;
//console.log(getMenu().newMapping["1"]);