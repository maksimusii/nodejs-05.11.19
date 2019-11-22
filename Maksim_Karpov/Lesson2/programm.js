const readline = require('readline');
const random = require('random');
var player_side;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// coin_side = randome.boolean();
console.log('Угадайте сторону упавшей монеты');
console.log('Введите 1 если выбрали решку или 2 если выбрали орел');
rl.on('line', (cmd) => {
    if (cmd === 'exit') {
        rl.close()
    }
console.log('Угадайте сторону упавшей монеты');
console.log('Введите 1 если выбрали решку или 2 если выбрали орел');
if (cmd === '1') {
    player_side = true;
    console.log('Вы загадали решку')
} else if (cmd === '2') {
    player_side = false,
    console.log('Вы загадали орел')
}else {
    console.log('Вы загадали неправильно')
}

if (random.boolean() === player_side){
    console.log('Вы угадали');
} 

if  (random.boolean() != player_side && player_side === true||false){
    console.log('Вы не угадали');
}


});