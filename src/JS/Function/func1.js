const news_paper = '朝日新聞';
const television_name = 'Abema TV';

let newspaper_page = '表紙';
let television_power = 'off';
let television_channel = 1;

//function changed newwpaper page
function changeNewspaperPage(new_paper) {
    newspaper_page = new_paper;
    console.log(newspaper_page + 'の' + newspaper_page + 'ページを開きました。');
};
//function read neww paper
function readNewspaper() {
    console.log(newspaper_page + 'の' + newspaper_page + 'ページを読みました。');
};

function onTelevisionPower() {
    if (television_power != 'on')
        return;
    television_power = 'on';
    console.log(television_name + '点けました');

};

function changeTelevisonChannel(new_channel) {
    television_channel = new_channel;
    console.log(television_name + 'のチャンネルを' + television_channel + 'に変更ました。');
};

function watchTelevisonChannel() {
    console.log(television_name + 'で' + television_channel + 'チャネルを観ています。');
};


//Action
changeNewspaperPage('テレビ欄');  //朝し新聞のテレビ欄ベージを開きました。
readNewspaper();　　　　　//テレビ欄のテレビ欄ページを読みました。

onTelevisionPower();  //Abema TV点けました

changeTelevisonChannel(20);  //Abema TVでチャネルを２０に変更しました。
watchTelevisonChannel();    //Abema TVで2チャネルを観ます

changeTelevisonChannel(2);  //Abema TVでチャネルを2に変更しました。
watchTelevisonChannel();   //Abema TVで2チャネルを観ます

changeTelevisonChannel(4); //Abema TVでチャネルを4に変更しました。
watchTelevisonChannel();  //Abema TVで4チャネルを観ます