// Code your solutions in this file

function writeCards(name, event) {
    let thankYou = []
    for (let i = 0; i < name.length; i++){
        thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        
    }
    return thankYou
}

writeCards();

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i--);
    }
}
countDown(10)