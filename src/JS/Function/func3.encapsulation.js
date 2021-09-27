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

}

//Televison
function Televison() {
    //Property
    const name = 'Abema TV';
    let power = "off";
    let channel = 1;

    //Method 
    this.onTelevisionPower = function () {
        if (power == 'on') return;
        power = 'on';
        console.log(name + 'のチャネルを' + channel + 'を点けています。');
    };

    this.changeTelevisonChannel = function (new_channel) {
        //Check if the value is correct before assigning a new channel
        new_channel = parseInt(new_channel);
        //Channels are ignored except for numbers  
        if (isNaN(new_channel)) return;
        //The min number of channels is 1 and max is 100.
        if (new_channel < 1 || new_channel > 100) return;

        channel = new_channel;
        console.log(name + 'のチャネルを' + channel + 'に変更ました。')
    };

    this.watchTelevisonChannel = function () {
        console.log(name + 'の' + channel + 'チャネルを観ています。')
    };

};

//インスタンス生成
const LivingTelevison = new Televison();

//Action
//朝日新聞のAbema TVページを開きました。
Newspaper.changePaper('Abema TV');
//朝日新聞のAbema TVページを読みました。
Newspaper.readPaper();

//Turned on Abema TV
LivingTelevison.onTelevisionPower();

//You entered the wrong channel number.Please enter again!
//Incorred channel specifications are ignored.
LivingTelevison.channel = -10;
LivingTelevison.changeTelevisonChannel(-10);
LivingTelevison.watchTelevisonChannel();
console.log('チャネル番号ははありません。'
    + 'もう一度入力してくだいさい!', LivingTelevison.channel)

//Abema TVのチャネルを10に変更ました。
LivingTelevison.changeTelevisonChannel(10);
//Abema TVの10チャネルを観ています。
LivingTelevison.watchTelevisonChannel();
