//Function Media
function Media(media_name) {
    //Property
    let name = media_name;
    //Method

    this.getName = function () {
        return name;
    };

    this.getInformation = function () {
        console.log(name + 'で情報を得る。')
    };

    this.changedView = function (view) {
        console.log(name + '変更されたビュー。')

    };

}
//Newspaper
const Newspaper = function (media_name) {
    // 親クラスのコンストラクタを call で呼び出して継承する。
    Media.call(this, media_name);
    //Add to property
    let page = '表紙';

    //Create method
    this.changedPage = function (new_page) {
        page = new_page;
        console.log(this.getName() + 'の' + page + 'ページを開きました。')
    };

    this.readPage = function () {
        console.log(this.getName() + 'の' + page + 'ページを読みました。')
    };

    this.changedView = function (view) {
        this.changedPage(view);
        this.readPage();
    };
}

//Function Televison
function Television(media_name) {
    // 親クラスのコンストラクタを call で呼び出して継承する。
    Media.call(this, media_name);
    // Additional properties as a TV
    let power = 'off';
    let channel = 1;

    //Create method
    this.OnTelevionPower = function () {
        if (power == 'on') return;
        power = 'on';
        console.log(this.getName() + 'を点けました。');
    };

    this.ChangedTelevisonChannel = function (new_channel) {
        //Check if the value is correct before assigning a new channel
        new_channel = parseInt(new_channel);
        //Channels are ignored except for numbers  
        if (isNaN(new_channel)) return;
        //The min number of channels is 1 and max is 100.
        if (new_channel < 1 || new_channel > 100) return;

        channel = new_channel;
        console.log(this.getName() + 'のチャネルを' + channel + 'に変更しました。')
    };

    this.WatchTelevisonChannel = function () {
        console.log(this.getName() + "の" + channel + "チャンネルを観ます。");
    };

    this.getInformation = function () {
        this.OnTelevionPower();
        this.WatchTelevisonChannel();
    };

    this.changedView = function (view) {
        this.ChangedTelevisonChannel(view);
        this.WatchTelevisonChannel();
    };
}

//インスタンス生成
let medias = {
    AsahiNewspaper: new Newspaper("朝日新聞"),
    LivingTelevision: new Television("Abema TV"),
    ToukaiNewspaper: new Newspaper("東海新聞"),
}

//Action
Object.keys(medias).forEach(function (key) {
    medias[key].getInformation();
    var random = Math.floor(Math.random() * 20) + 1;
    medias[key].changedView(random);
});

