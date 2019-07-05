if (confirm('Do you want to play a game?')) {
    let upperBound = 9, initialUpperBound = 9;
    let numberOfPocket = Math.floor(Math.random() * upperBound);
    let numberOfRounds = 3;
    let increaseStep = 4;
    let increasePriseTimes = 2;
    let startLoopAgain = -1;
    let firstPrize = 100, secondPrize = 50, thirdPrize = 25;
    let prizes = [firstPrize, secondPrize, thirdPrize], initialPrizes = [firstPrize, secondPrize, thirdPrize];
    let prize = 0;
    let playing = true;
    while (playing) {
        for (let i = 0; i < numberOfRounds; i++) {
            let userInput = prompt(`Choose a roulette pocket number from 0 to ${upperBound}
Attempts left: ${numberOfRounds - i}
Total prize: ${prize}$
Possible prize on current attempt: ${prizes[i]}
${numberOfPocket}`);
            let userNumberOfPocket = +userInput;
            if (userNumberOfPocket === numberOfPocket) {
                prize += prizes[i];
                if (confirm(`Congratulation, you won! You prise is ${prize}$. Do you want to continue?`)) {
                    upperBound += increaseStep;
                    numberOfPocket = Math.floor(Math.random() * upperBound);
                    for (let j = 0; j < prizes.length; j++) {
                        prizes[j] *= increasePriseTimes;
                    }
                    i = startLoopAgain;
                } else {
                    alert(`Thank you for your participation. Your prize is ${prize}$.`);
                    if (confirm('Do you want to play again?')) {
                        i = startLoopAgain;
                        prize = 0;
                        upperBound = initialUpperBound;
                        prizes = initialPrizes;
                    } else {
                        i = numberOfRounds;
                        playing = false;
                    }
                }
            } else if (userInput === null) {
                alert(`Thank you for your participation. Your prize is ${prize}$.`);
                if (confirm('Do you want to play again?')) {
                    i = startLoopAgain;
                    prize = 0;
                    upperBound = initialUpperBound;
                    prizes = initialPrizes;
                } else {
                    i = numberOfRounds;
                    playing = false;
                }
            } else {
                continue;
            }
        }
        if (playing) {
            alert(`Thank you for your participation. Your prize is ${prize}$.`);
            if (confirm('Do you want to play again?')) {
                prize = 0;
                upperBound = initialUpperBound;
                prizes = initialPrizes;
            } else {
                playing = false;
            }
        }
    }
} else {
    alert('You did not become a billionair, but can.');
}