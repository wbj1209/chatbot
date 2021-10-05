function response(room, msg, sender, isGroupChat, replier, ImageDB){
    if (msg.replace(/ /g, '').indexOf("명언") > -1){
        var wise = JSON.parse(Utils.getWebText("https://api.qwer.pw/request/helpful_text?apikey=guest").replace(/<[^>]+>/g, "").trim())[1]; 
        wise = wise.respond;
        replier.reply(wise.respond);
    }
}