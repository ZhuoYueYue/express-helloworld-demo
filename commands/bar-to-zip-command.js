/**
 * Created by zhuoyue on 16-8-3.
 */
let BarcodeToZipCode=require('../core/bar-to-zip-core');
let CommandResponse=require('./command-response')
let barcodeToZipCode=new BarcodeToZipCode();
class BarToZipCommand{
    transform(barcode){
        let coreResponse = barcodeToZipCode.do(barcode);

        if(coreResponse ===false){
            return new CommandResponse({error:'Please give right input'})
        }else{
            return new CommandResponse({text: 'translateResult is :  ' + coreResponse,reset:true});
        }
    }
}

module.exports=BarToZipCommand;