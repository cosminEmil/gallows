let letters = []; let words = ["car", "animal", "house", "iphone", "macbook", "coffee"];
let winnerCnt = 0;

function generateGame() {
    let randomNr = Math.floor(Math.random() * words.length);
    let word = words[randomNr];
    for (let i = 0; i < word.length; ++i) {
        letters.push(word[i]);
        let letter = document.createElement("input");
        letter.setAttribute('type', 'text');
        letter.setAttribute('class', 'letter');
        letter.setAttribute('id', i);
        letter.setAttribute('size', '2');
        let game = document.getElementById('game');
        game.appendChild(letter);
    }
}


function checkLetter() {
    let unCheckedLetter = document.getElementById('unCheckedLetter').value;
    let message = document.getElementById("message");
    if (letters.includes(unCheckedLetter)) {
        let index = letters.indexOf(unCheckedLetter);
        let letter = document.getElementById(index);
        letter.value = unCheckedLetter;
        letters[index] = "";
        ++winnerCnt;
        if (winnerCnt == letters.length) {
            message.innerText = "you're lucky mate, you won this time."
        }
    } else {
        let lifesNr = document.getElementById('lifesNr').value; 
        if (lifesNr > 1) {
            document.getElementById('lifesNr').stepDown(1);
        } else {
            message.innerText = "you're dead mate";
        }
    }
}

