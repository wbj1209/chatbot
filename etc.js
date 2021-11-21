function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
//롤전적
 if(msg.indexOf("/롤전적 ") == 0){
        replier.reply("https://www.op.gg/summoner/userName="+msg.replace("/롤전적 ","")+"");
    }
}