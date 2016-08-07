/**
 * Created by zhuoyue on 16-8-3.
 */
let GotoMainPageCommand=require('../commands/goto-main-page-command');
let RouteResponse=require('../route/route-response');
let gotoMainPage=new GotoMainPageCommand();
const defaultMapping={"*":gotoMainPage.do};

class Route{
    constructor(){
        this.mapping=defaultMapping;
    }
    do(input){

            let command= this.mapping[input]|| this.mapping["*"];
            let response=command(input);

            if(response.error){
                return new RouteResponse({text:response.error});
            }

            if(response.reset){
                this.mapping=defaultMapping;
              return new RouteResponse({text:response.text,rerun:true});
            }

            if(response.newMapping){
                this.mapping=response.newMapping;
                return new RouteResponse({text:response.text});
            }
            return new RouteResponse({text:response.text});
    }
}


module.exports={Route};
