//Paper
class Newspaper {
    //Property
    name = '朝日新聞';
    pape = '表紙';

    //Method
    changedPage(new_page) {
        this.pape = new_page;
        console.log(this.name + 'の' + this.pape + 'ページを開きました。');
    }

    readPage() {
        console.log(this.name + 'の' + this.pape + 'ページを読みました。');
    }
}

//Television
class Television {
    //Property
    name = 'Abema TV';
    power = 'off';
    channel = 1;

    //Method
    onTelevisionPower() {
        if (this.power == 'on') return;
        this.power = 'on';
        console.log(this.name + 'を点けました。');
    }

    changedTelevisonChannel(new_channel) {
        this.channel = new_channel;
        console.log(this.name + 'の' + this.channel + 'に変更ました。');
    }

    watchTelevisonChannel() {
        console.log(this.name + 'の' + this.channel + 'チャネルを観ています。');
    }
}

//インスタンス生成
const AsahiNewsPaper = new Newspaper();
const LivingTelevision = new Television();


//Action
AsahiNewsPaper.changedPage('テレビ欄');
AsahiNewsPaper.readPage();

LivingTelevision.onTelevisionPower();

LivingTelevision.changedTelevisonChannel(10);
LivingTelevision.watchTelevisonChannel();
LivingTelevision.changedTelevisonChannel(4);
LivingTelevision.watchTelevisonChannel();
LivingTelevision.changedTelevisonChannel(1);
LivingTelevision.watchTelevisonChannel();