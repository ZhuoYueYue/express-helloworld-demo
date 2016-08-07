/**
 * Created by zhuoyue on 16-8-3.
 */
let ZipToBarCore=require('../core/zip-to-bar-core');
let zipToBarCore=new ZipToBarCore();
let CommandResponse=require('./command-response');
class ZipToBarCommand{
    transform(barcode){
        let coreResponse = zipToBarCore.do(barcode);

        if(coreResponse === false){
            return new CommandResponse({ error: 'please input right input',});
        }else{
            return new CommandResponse( { text: 'translateResult is :  ' + coreResponse, reset: true});
        }
    }
}

module.exports=ZipToBarCommand;