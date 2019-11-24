const readline = require('readline');
const random = require('random');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// coin_side = randome.boolean();
console.log('Угадайте сторону упавшей монеты');
console.log('Введите 1 если выбрали решку или 2 если выбрали орел');
rl.on('line', (cmd) => {
    var player_side;
    var comp_side;
    if (cmd === 'exit') {
        rl.close()
    }
console.log('Угадайте сторону упавшей монеты');
console.log('Введите 1 если выбрали решку или 2 если выбрали орел');
if (cmd === '1') {
    player_side = true;
    
} else if (cmd === '2') {
    player_side = false;
    
}else {
    console.log('Вы загадали неправильно')
}
comp_side = random.boolean();

if ( comp_side === player_side){
    console.log('Вы угадали');
}else if  (comp_side !== player_side && player_side === true || false){
    console.log('Вы не угадали');
}else {
    console.log('Вы указали не правильное значение');
}
console.log(`Загаданный вариант: ${comp_side}. Вариант игрока: ${player_side}.`);
});