const Player = Math.floor(Math.random() * 6) + 1;
const Computer = Math.floor(Math.random() * 6) + 1;
let message;

if (Player > Computer){
  message = 'YOU WON'
} else if (Player < Computer){
  message = 'YOU LOST'
} else {
  message = ' YOU DREW'
}

console.log(message);
console.log(Player, Computer);