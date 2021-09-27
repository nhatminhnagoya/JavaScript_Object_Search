//Media
class Media {
    //Property
    #name;
    //Contructor
    constructor(media_name) {
        this.#name = media_name;
    }
    get name() {
        return this.#name;
    }
    //Method
    getInformation() {
        console.log(this.name + 'で情報を得る。');
    }
    changeView(view) {
        console.log(this.name + '変更されたビュー。');
    }
}

//Paper
class Newspaper extends Media {
    //Property
    #pape = '表紙';
    //Constructor
    constructor(media_name) {
        super(media_name);
    }
    //Method
    changedPage(new_page) {
        this.#pape = new_page;
        console.log(this.name + 'の' + this.#pape + 'ページを開きました。');
    }
    readPage() {
        console.log(this.name + 'の' + this.#pape + 'ページを読みました。');
    }
    changeView(view) {
        this.changedPage(view);
        this.readPage();
    }
}

//Television
class Television extends Media {
    //Property
    #power = 'off';
    #channel = 1;
    //Constructor
    constructor(media_name) {
        super(media_name);
    }
    //Method
    onTelevisionPower() {
        if (this.#power == 'on') return;
        this.#power = 'on';
        console.log(this.name + 'を点けました。');
    }
    changedTelevisonChannel(new_channel) {

        //Check if the value is correct before assigning a new channel
        new_channel = parseInt(new_channel);
        //Channels are ignored except for numbers  
        if (isNaN(new_channel)) return;
        //The min number of channels is 1 and max is 100.
        if (new_channel < 1 || new_channel > 100) return;

        this.#channel = new_channel;
        console.log(this.name + 'の' + this.#channel + 'に変更ました。');
    }
    watchTelevisonChannel() {
        console.log(this.name + 'の' + this.#channel + 'チャネルを観ています。');
    }
    changeView(view) {
        this.changedTelevisonChannel(view);
        this.watchTelevisonChannel();
    }
};

//インスタンス生成
let medias = {
    AsahiNewspaper: new Newspaper('朝日新聞'),
    LivingTelevision: new Television('Abema TV'),
    TokaiNewspaper: new Newspaper('東海新聞')
}
//Action
Object.keys(medias).forEach((key) => {
    medias[key].getInformation();
    var random = Math.floor(Math.random() * 20) + 1;
    medias[key].changeView(random);
})
