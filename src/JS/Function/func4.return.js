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
    }

}

//Televison

const Televison = (function () {
    //Property
    const name = 'Abema TV';
    let power = 'off';
    let channel = 1;

    //Method
    return {
        onTelevisionPower: function () {
            if (power == 'on') return;
            power = 'on';
            console.log(name + 'を点けています。');
        },

        changeTelevisonChannel: function (new_channel) {
            //Check if the value is correct before assigning a new channel
            new_channel = parseInt(new_channel);
            //Channels are ignored except for numbers  
            if (isNaN(new_channel)) return;
            //The min number of channels is 1 and max is 100.
            if (new_channel < 1 || new_channel > 100) return;

            channel = new_channel;
            console.log(name + 'のチャネルを' + channel + 'に変更ました。')
        },

        watchTelevisonChannel: function () {
            console.log(name + 'の' + channel + 'チャネルを観ています。')
        }
    }
}());

//Action

//朝日新聞のAbema TVページを開きました。
Newspaper.changePaper('Abema TV');

//朝日新聞のAbema TVページを読みました。
Newspaper.readPaper();

//Turned on Abema TV
Televison.onTelevisionPower();

//You entered the wrong channel number.Please enter again!
//Incorred channel specifications are ignored.
Televison.changeTelevisonChannel(-10);
Televison.watchTelevisonChannel();
console.log('チャネル番号はありません', Televison.changeTelevisonChannel(-10));

//Abema TVのチャネルを10に変更ました
Televison.changeTelevisonChannel(10);

//Abema TVのチャネルの10に観ています
Televison.watchTelevisonChannel();
