/**
 * Created by zhuoyue on 16-8-3.
 */
let BarToZipCommand=require('./bar-to-zip-command');
let CommandResponse=require('./command-response');
let barToZip=new BarToZipCommand();
class GotoBarToZipCommand {
    do() {
        return  new CommandResponse({
                text: `Please input bar code:`,
                newMapping: {"*": barToZip.transform}
            });
    }
}
module.exports=GotoBarToZipCommand;