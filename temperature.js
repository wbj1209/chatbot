function response(room, msg, sender, isGroupChat, replier, ImageDB) { 
    if (msg.replace(/ /g, '').indexOf("한강") > -1){
        var temp = JSON.parse(Utils.getWebText("https://api.qwer.pw/request/hangang_temp?apikey=guest").replace(/<[^>]+>/g, "").trim())[1]; 
        temp = temp.respond;
        if(temp.temp >= 20){
            replier.reply("현재 한강 수온은 " + temp.temp + "℃입니다." + "\n들어갈거면 덜추울 때 들어가라");
        }

        else if(10 < temp.temp < 20){
            replier.reply("현재 한강 수온은 " + temp.temp + "℃입니다." + "\n지금 들어가면 춥다");
        }

        else{
            replier.reply("현재 한강 수온은 " + temp.temp + "℃입니다." + "\n지금 들어가면 못나온다");
        }
    }          
}