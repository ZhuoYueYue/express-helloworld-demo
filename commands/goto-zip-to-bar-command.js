/**
 * Created by zhuoyue on 16-8-3.
 */
let ZipToBarCommand=require('./zip-to-bar-command');
let zipToBar=new ZipToBarCommand();
let CommandResponse=require('./command-response');
class GotoZipToBarCommand {
    do(){
        return new CommandResponse({
            text: `Please input zip code:`,
            newMapping: {"*": zipToBar.transform}
        });
    }
}
module.exports=GotoZipToBarCommand;