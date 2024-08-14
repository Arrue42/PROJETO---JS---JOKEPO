const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0


const GAME_OPTINS ={

    ROCK:'rock',
    PAPER:'paper',
    SCISSORS:'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())


}

const playMachine = () => {
    const choices = [GAME_OPTINS.ROCK,GAME_OPTINS.PAPER, GAME_OPTINS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humano:' + human + " Maquina:" + machine)

    if (human === machine) {
        result.innerHTML = " 😃 EMPATOU!"

    } else if ((human === GAME_OPTINS.PAPER && machine === GAME_OPTINS.ROCK) ||
        (human === GAME_OPTINS.ROCK && machine === GAME_OPTINS.SCISSORS) ||
        (human === GAME_OPTINS.SCISSORS && machine === GAME_OPTINS.PAPER)) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = " 😁 GANHOU!"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = " 😩 PERDEU PRA ALEXIA!"
    }

}