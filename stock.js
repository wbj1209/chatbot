function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    var cmd = msg.split(" ")[0];
    var data = msg.replace(cmd + " ", "");

    if (cmd == "/주식") {        
        var data = org.jsoup.Jsoup.connect("https://www.google.com/search?q=주식%20" + data.replace(/ /g, "%20")).get();
        data = data.select("g-card-section").get(0);

        var result = "[" + data.select("div.oPhL2e").text() + "]\n";
        result += "현재 가격 : " + data.select("span[jsname=vWLAgc]").text() + " ";
        result += data.select("span.knFDje").text() + "\n";
        result += "전일 대비 : " + data.select("span[jsname=qRSVye]").text();
        replier.reply(result);   
    }
}