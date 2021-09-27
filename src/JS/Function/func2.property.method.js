//Paper
const Newspaper = {
    //Property
    name: '朝日新聞',
    pape: '表紙',

    //Method
    changePaper: function (new_paper) {
        this.pape = new_paper;
        console.log(this.name + 'の' + this.pape + 'ページを開きました。')
    },
    readPaper: function () {
        console.log(this.name + 'の' + this.pape + 'ページを読みました。');
    },

};

//Televison
const Televison = {
    //Property
    name: 'Abema TV',
    power: "off",
    channel: 1,

    //Method 
    onTelevisionPower: function () {
        if (this.power == 'on') return;
        this.power = 'on';
        console.log(this.name + 'のチャネルを' + this.channel + 'を点けました。');
    },

    changeTelevisonChannel: function (new_channel) {
        this.channel = new_channel;
        console.log(this.name + 'のチャネルを' + this.channel + 'に変更ました。')
    },

    watchTelevisonChannel: function () {
        console.log(this.name + 'の' + this.channel + 'チチャネルを観ています。')
    },

};

//Action
Newspaper.changePaper('Abema TV');
Newspaper.readPaper();

Televison.onTelevisionPower();
Televison.changeTelevisonChannel(20);
Televison.watchTelevisonChannel(20);

Televison.changeTelevisonChannel(2);
Televison.watchTelevisonChannel(2);

Televison.changeTelevisonChannel(-10);
Televison.watchTelevisonChannel(4);