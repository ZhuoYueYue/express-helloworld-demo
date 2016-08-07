/**
 * Created by zhuoyue on 16-8-3.
 */
let CommandResponse=require('./command-response');

class InvalidCommand{
    do(){
        return new CommandResponse({error:'Please give right input'});
    }
}


module.exports=InvalidCommand;