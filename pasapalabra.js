
const STATUS_FAILED = 'failed'
const STATUS_UNANSWERED = 'unanswered'
const STATUS_CORRECT = 'correct'
let letterBackground = "";
let lastQuestionIndex;
let currentQuestion;

const questions = [
    {
        letterID: "A",
        letter: "a",
        answer: "atento",
        status: STATUS_UNANSWERED,
        question:
            "CON LA A. Observador",
    },
    {
        letterID: "B",
        letter: "b",
        answer: "bingo",
        status: STATUS_UNANSWERED,
        question:
            "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
        letterID: "C",
        letter: "c",
        answer: "carambola",
        status: STATUS_UNANSWERED,
        question: "CON LA C. Una jugada de mucha fortuna",
    },/*
    {
        letterID: "D",
        letter: "d",
        answer: "diarrea",
        status: STATUS_UNANSWERED,
        question:
            "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
        letterID: "E",
        letter: "e",
        answer: "empanada",
        status: STATUS_UNANSWERED,
        question:
            "CON LA E. Alimento muy popular en Galicia",
    },
    {   
        letterID: "F",
        letter: "f",
        answer: "facil",
        status: STATUS_UNANSWERED,
        question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
        letterID: "G",
        letter: "g",
        answer: "galaxia",
        status: STATUS_UNANSWERED,
        question:
            "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {   
        letterID: "H",
        letter: "h",
        answer: "harakiri",
        status: STATUS_UNANSWERED,
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {   
        letterID: "I"
        letter: "i",
        answer: "iglesia",
        status: STATUS_UNANSWERED,
        question: "CON LA I. Templo cristiano",
    },
    {   
        letterID: "H"
        letter: "J",
        answer: "jabali",
        status: STATUS_UNANSWERED,
        question:
            "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {   
        letterID: "K"
        letter: "k",
        answer: "kamikaze",
        status: STATUS_UNANSWERED,
        question:
            "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {   
        letterID: "L"
        letter: "l",
        answer: "licantropo",
        status: STATUS_UNANSWERED,
        question: "CON LA L. Hombre lobo",
    },
    {   
        letterID: "M"
        letter: "m",
        answer: "misantropo",
        status: STATUS_UNANSWERED,
        question:
            "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {   
        letterID: "N"
        letter: "n",
        answer: "necedad",
        status: STATUS_UNANSWERED,
        question: "CON LA N. Demostración de poca inteligencia",
    },
    {   
        letterID: "Ñ"
        letter: "ñ",
        answer: "señal",
        status: STATUS_UNANSWERED,
        question:
            "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {   
        letterID: "O"
        letter: "o",
        answer: "orco",
        status: STATUS_UNANSWERED,
        question:
            "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {   
        letterID: "P"
        letter: "p",
        answer: "protoss",
        status: STATUS_UNANSWERED,
        question:
            "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    }, 
    {   
        letterID: "Q"
        letter: "q",
        answer: "queso",
        status: STATUS_UNANSWERED,
        question:
            "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    {   
        letterID: "R"
        letter: "r",
        answer: "raton",
        status: STATUS_UNANSWERED,
        question: "CON LA R. Roedor",
    },
    {   
        letterID: "S"
        letter: "s",
        answer: "stackoverflow",
        status: STATUS_UNANSWERED,
        question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
        letterID: "T"
        letter: "t",
        answer: "terminator",
        status: STATUS_UNANSWERED,
        question:
            "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
        letterID: "U"
        letter: "u",
        answer: "unamuno",
        status: STATUS_UNANSWERED,
        question:
            "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
        letterID: "V"
        letter: "v",
        answer: "vikingos",
        status: STATUS_UNANSWERED,
        question:
            "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
        letterID: "W"
        letter: "w",
        answer: "sandwich",
        status: STATUS_UNANSWERED,
        question:
            "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
        letterID: "X"
        letter: "x",
        answer: "botox",
        status: STATUS_UNANSWERED,
        question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
        letterID: "Y"
        letter: "y",
        answer: "peyote",
        status: STATUS_UNANSWERED,
        question:
            "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
        letterID: "Z"
        letter: "z",
        answer: "zen",
        status: STATUS_UNANSWERED,
        question:
            "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },*/

];

const players = [
    {
        player: 1,
        name: "TU",
        score: 0,
        fails: 0,
    },
    {
        player: 2,
        name: "PataNegra",
        score: 12,
        fails: 15,
    },
    {
        player: 3,
        name: "Iracundo",
        score: 18,
        fails: 9,
    },

];

//reset question status before new game played
const resetQuestionStatus = () => {
    for (let keys in questions) {
        questions[keys].status = STATUS_UNANSWERED;
    };
};
// set the feedback - score line to hidden while asking questions
const elFeedback = document.querySelector('#feedback');

document.querySelector('.scores-onResults').style.display = 'none';
document.querySelector('#first').style.display = 'none';
document.querySelector('#second').style.display = 'none';
document.querySelector('#third').style.display = 'none';

//all actions required when the game finishes
const userFinished = () => {
    //document.getElementById('countdown').innerText = 0;
    document.querySelector('#feedback').innerText = `¡Felicidades! Has terminado con una puntuación de ${players[0].score} y ${players[0].fails} fallos.`;

    let gameButtons = document.querySelectorAll('.onGame');
    for (let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].style.display = "none";
    };
    let endGameResults = document.querySelectorAll('.scores-onResults');
    for (let i = 0; i < endGameResults.length; i++) {
        endGameResults[i].style.display = "block";
    };
    sortScores();
};
//all actions required when game is NOT finished. Maybe time is out, maybe end is clicked.
const userDidNotFinish = () => {
    document.querySelector('#feedback').innerText = `Has terminado el juego con una puntuación de ${players[0].score} y ${players[0].fails} fallos. Hasta pronto.`

    let gameButtons = document.querySelectorAll('.onGame');
    for (let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].style.display = "none";
    }
    let endGameResults = document.querySelectorAll('.scores-onResults');
    for (let i = 0; i < endGameResults.length; i++) {
        endGameResults[i].style.display = "none";
    }
    document.getElementById('countdown').style.display = "none";
    document.querySelector('#timeTitle').style.display = "none";
};

//actions required to start the timer when user clicks start
let start = document.querySelector('#start');
let timer;

function resetClock() {
    clearInterval(timer);
    const startingMinutes = 2;
    let time = startingMinutes * 60;
    const countdownEl = document.getElementById('countdown');

    const frame = () => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
        if (time === 0) {
            time += 0;
            return userDidNotFinish()
        }
    }
    timer = setInterval(frame, 1000);
};

function resetScores() {
    players[0].score = 0;
    players[0].fails = 0;
    lastQuestionIndex = 0;
    currentQuestion = questions[lastQuestionIndex];
    letterBackground = "A";
};

function showGame() {
    let letras = document.querySelectorAll('.letra');
    for (let i = 0; i < letras.length; i++) {
        letras[i].style.background = '#2906eb';
    };
    let gameButtons = document.querySelectorAll('.onGame');
    for (let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].style.display = "block";
    }
    let endGameResults = document.querySelectorAll('.scores-onResults');
    for (let i = 0; i < endGameResults.length; i++) {
        endGameResults[i].style.display = "none";
    }
    document.getElementById('end').style.visibility = "visible";
}

//start the game when user clicks start
start.addEventListener('click', function () {
    resetClock();
    resetScores();
    resetQuestionStatus();
    showGame();
    playGame();
});
// pasapalabra when user clicks
const pasapalabrabtn = document.querySelector('#pasapalabra');
pasapalabrabtn.addEventListener('click', () => {
    elFeedback.innerText = "OK";
    lastQuestionIndex = nextIndexQuestion(lastQuestionIndex + 1);
    currentQuestion = questions[lastQuestionIndex];
    document.querySelector('#questions').innerText = currentQuestion.question;
    setTimeout(() => { elFeedback.innerText = '' }, 2000);
});
//end game when user clicks
const endbtn = document.querySelector('#end');
endbtn.addEventListener('click', () => {
    return userDidNotFinish();
});

// create a basic players ranking
const sortScores = () => {
    let playersArray = [[players[0].name, players[0].score], [players[1].name, players[1].score], [players[2].name, players[2].score]];
    let scoreBoard = playersArray.sort((a, b) => b[1] - a[1]);
    document.querySelector('#scoreboard').innerText = "Aquí tienes tu clasificación";
    document.querySelector('#first').innerText = scoreBoard[0];
    document.querySelector('#second').innerText = scoreBoard[1];
    document.querySelector('#third').innerText = scoreBoard[2];
}
// iterate through the questions, accounting for the ones unanswered.
const nextIndexQuestion = (start) => {
    for (let j = start; j < questions.length; j++) {
        if (questions[j].status === STATUS_UNANSWERED) {
            return j;
        }
    };
    for (let i = 0; i < start; i++) {
        if (questions[i].status === STATUS_UNANSWERED) {
            return i;
        }
    };
};

const currentPlayer = players[0];
lastQuestionIndex = 0;
const btn = document.querySelector('#answerBtn');
currentQuestion = questions[lastQuestionIndex];

//start the game
const playGame = () => {
    document.querySelector('#questions').innerText = currentQuestion.question;
    elFeedback.innerText = ''
};
//capture and evaluate user's answer
btn.addEventListener('click', () => {
    let userAnswer = document.querySelector('#answerText').value;
    letterBackground = currentQuestion.letterID;
    let isCorrect = userAnswer === currentQuestion.answer;

    if (isCorrect) {
        currentPlayer.score += 1;
        elFeedback.innerText = "Correct! 1 point for you.";
        currentQuestion.status = STATUS_CORRECT;
        document.getElementById(letterBackground).style.background = "green";
        setTimeout(() => { document.querySelector('#answerText').value = '' }, 1500)
    } else if (!isCorrect) {
        elFeedback.innerText = "Incorrect!.";
        currentPlayer.fails += 1;
        currentQuestion.status = STATUS_FAILED;
        document.getElementById(letterBackground).style.background = "red";
        setTimeout(() => { document.querySelector('#answerText').value = '' }, 1500)
    };
    if (!questions.some(q => q.status === STATUS_UNANSWERED)) {
        return userFinished()
    }
    lastQuestionIndex = nextIndexQuestion(lastQuestionIndex + 1);
    currentQuestion = questions[lastQuestionIndex];
    document.querySelector('#questions').innerText = currentQuestion.question;
    setTimeout(() => { elFeedback.innerText = '' }, 1500);
});
