//Media
function Media(media_name) {
    //Property
    let name = media_name;

    //Method
    this.getName = function () {
        return name;
    };
    this.getInformation = function () {
        console.log(name + 'で情報を得る');
    };
}

//Televison
//Paper
function NewsPaper(media_name) {
    //親クラスのコンストラクターの読み出しにはcallを利用している
    Media.call(this, media_name);

    let page = '表紙';

    //Method
    this.changePaper = function (new_page) {
        page = new_page;
        console.log(this.getName() + 'の' + page + 'ページを開きました。');
    };
    this.readPaper = function () {
        console.log(this.getName + 'の' + page + 'ページを読みました。');
    };
}

function Television(media_name) {
    //親クラスのコンストラクターの読み出しにはcallを利用している
    Media.call(this, media_name);

    //Add property for Televison 
    let power = 'off';
    let channel = 1;
    //Method
    this.OnTelevisonPower = function () {
        if (power == 'on')
            return;
        power = 'on';
        console.log(this.getName() + 'を点けました。');
    };

    this.changedTelevisonChannel = function (new_channel) {
        //Check if the value is correct before assigning a new channel
        new_channel = parseInt(new_channel);
        //Channels are ignored except for numbers  
        if (isNaN(new_channel)) return;
        //The min number of channels is 1 and max is 100.
        if (new_channel < 1 || new_channel > 100) return;

        channel = new_channel;
        console.log(this.getName() + 'のチャネルを' + channel + 'に変更ました。');
    };

    this.watchTelevisonChannel = function () {
        console.log(this.getName() + 'の' + channel + 'チャネルを観ています。');
    };

    this.getInformation = function () {
        this.OnTelevisonPower();
        this.watchTelevisonChannel();
    };
}


//インスタンス生成
const AsahiNewPaper = new NewsPaper('朝日新聞');
const LivingTelevison = new Television('Abema TV');

//Action
AsahiNewPaper.getInformation();
LivingTelevison.getInformation();