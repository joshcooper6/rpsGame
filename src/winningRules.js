export const outcomes = ['rock', 'paper', 'scissors'];

export function winningRules(player, computer) {
   if (player === 'rock' && computer === 'paper') {
    return 'lose'
   } else if (player === 'rock' && computer === 'scissors') {
    return 'win'
   } else if (player === 'scissors' && computer === 'paper') {
       return 'win'
   } else if (player === 'scissors' && computer === 'rock') {
       return 'lose'
   } else if (player === 'paper' && computer === 'scissors') {
       return 'lose'
   } else if (player === 'paper' && computer === 'rock') {
       return 'win'
   } else if (player === 'rock' && computer === 'rock') {
       return 'draw'
   } else if (player === 'scissors' && computer === 'scissors') {
        return 'draw'
    } else if (player === 'paper' && computer === 'paper') {
        return 'draw'
    } else {
        return null
    }
}