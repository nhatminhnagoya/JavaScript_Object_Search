const newspaper = '朝日新聞';
const television_name = 'Abema TV';

let newspaper_page = '表紙';
let television_power = 'off';
let television_channel = 1;


//Action

newspaper_page = 'テレビランキング';
console.log(newspaper_page + 'の' + newspaper_page + 'ページを開きました。');
console.log(newspaper_page + 'の' + newspaper_page + 'ページを詠みました。');

if (television_power != 'on') {
    television_power = 'on';
    console.log(television_name + 'を点けています。');
};

television_channel = '20';
console.log(television_name + 'のチャンネルを' + television_channel + 'に変更ました。');
console.log(television_name + 'で' + television_channel + 'チャネルを観ます');

television_channel = '2';
console.log(television_name + 'のチャンネルを' + television_channel + 'に変更ました。');
console.log(television_name + 'で' + television_channel + 'チャネルを観ます');

television_channel = '10';
console.log(television_name + 'のチャンネルを' + television_channel + 'に変更ました。');
console.log(television_name + 'で' + television_channel + 'チチャネルを観ています。');

