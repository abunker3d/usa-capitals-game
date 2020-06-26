var gameStart = 0;

var modeCloseBtn = document.querySelector(".close-bar");
var modeWindow = document.querySelector(".mode-menu");
var header = document.querySelector("header");
var main = document.querySelector("main");
var footer = document.querySelector("footer");

var sideBarBtn = document.querySelector(".sidebar-btn");
var helpBtn = document.querySelector(".help-btn");
var header = document.querySelector("header");

var modeWindow = document.querySelector(".mode-menu");

var modeWindowOpen = 0;

header.addEventListener("click", function(e) {
    if (e.target.className === "sidebar-btn") {
        modeWindow.classList.toggle("hide");
        header.classList.toggle("blur");
        main.classList.toggle("blur");
        footer.classList.toggle("blur");
        modeWindowOpen = Math.abs(modeWindowOpen - 1);
    } else if (e.target.className === "help-btn") {
        if (gameStart === 1) {
            areYouSure();
        }
        gameStart = 0;
        resetGame();
        quickEnd = 1;
    }
})

document.addEventListener("click", function(e) {
    if (modeWindowOpen === 1 && e.target.tagName === "BODY") {
        modeWindow.classList.toggle("hide");
        header.classList.toggle("blur");
        main.classList.toggle("blur");
        footer.classList.toggle("blur");
        modeWindowOpen = Math.abs(modeWindowOpen - 1);
    }
});

modeWindow.addEventListener("click", function(e) {
    if (e.target.className === "close-bar" || e.target.className === "close-button") {
        modeWindow.classList.toggle("hide");
        header.classList.toggle("blur");
        main.classList.toggle("blur");
        footer.classList.toggle("blur");
        modeWindowOpen = Math.abs(modeWindowOpen - 1);
    } else if (e.target.className === "mode-btn-b") {
        document.querySelector(".mode-btn-b").classList.add("mode-on");
        document.querySelector(".mode-btn-e").classList.remove("mode-on");
        document.querySelector("#allSvgText").style.display = "block";
        
    } else if (e.target.className === "mode-btn-e") {
        document.querySelector(".mode-btn-b").classList.remove("mode-on");
        document.querySelector(".mode-btn-e").classList.add("mode-on");
        document.querySelector("#allSvgText").style.display = "none";
    }
})

var correctBar = document.querySelector(".score-slider-correct");
var incorrectBar = document.querySelector(".score-slider-incorrect");

var startStopBtn = document.querySelector(".start-stop-btn");
var question = document.querySelector(".question");
var state = document.querySelector(".state");

var usaMap = document.querySelector(".usa-map");

var statesAndCapitals, currentState, quickEnd, score, incorrect;

var svgMap = document.querySelector("#svg4862");

var scoreBtn = document.querySelector(".score-btn");
var percent = document.querySelector(".percent");
var messageText = document.querySelector(".message");

function resetGame() {
    score = 0;
    incorrect = 0;

    state.style.color = "#2f7da0";

    startStopBtn.classList.add("go");
    startStopBtn.classList.remove("stop");
    startStopBtn.textContent = "Go";
    
    usaMap.style.pointerEvents = "none";

    correctBar.style.backgroundImage = "linear-gradient(90deg, rgb(47, 125, 160) " + score + "%, rgb(206, 215, 204) " + score + "%)";
    
    incorrectBar.style.backgroundImage = "linear-gradient(90deg, rgb(47, 125, 160) " + incorrect + "%, rgb(206, 215, 204) " + incorrect + "%)";
    
    currentState = "";
    
    question.textContent = ""; // White space: \xa0
    state.textContent = "Click \"GO\" to begin";
    state.style.marginBottom = "1.85rem";
    
    state.style.fontSize = "3rem";
    question.style.marginTop = "2.5rem"

    statesAndCapitals = [
    ["Alabama", "Montgomery", "text885"],
    ["Alaska", "Juneau", "text950"],
    ["Arizona", "Phoenix", "text834"],
    ["Arkansas", "Little Rock", "text873"],
    ["California", "Sacramento", "text805"],
    ["Colorado", "Denver", "text831"],
    ["Connecticut", "Hartford", ""],
    ["Delaware", "Dover", ""],
    ["Florida", "Tallahassee", "text907"],
    ["Georgia", "Atlanta", "text888"],
    ["Hawaii", "Honolulu", ""],
    ["Idaho", "Boise", "text815"],
    ["Illinois", "Springfield", "text867"],
    ["Indiana", "Indianapolis", "text899"],
    ["Iowa", "Des Moines", "text861"],
    ["Kansas", "Topeka", "text846"],
    ["Kentucky", "Frankfort", "text902"],
    ["Louisiana", "Baton Rouge", "text876"],
    ["Maine", "Augusta", "text923"],
    ["Maryland", "Annapolis", ""],
    ["Massachusetts", "Boston", ""],
    ["Michigan", "Lansing", "text908"],
    ["Minnesota", "St. Paul", "text858"],
    ["Mississippi", "Jackson", "text879"],
    ["Missouri", "Jefferson City", "text870"],
    ["Montana", "Helena", "text820"],
    ["Nebraska", "Lincoln", "text849"],
    ["Nevada", "Carson City", "text810"],
    ["NewHampshire", "Concord", ""],
    ["NewJersey", "Trenton", ""],
    ["NewMexico", "Santa Fe", "text837"],
    ["NewYork", "Albany", "text920"],
    ["NorthCarolina", "Raleigh", "text914"],
    ["NorthDakota", "Bismarck", "text855"],
    ["Ohio", "Columbus", "text905"],
    ["Oklahoma", "Oklahoma City", "text843"],
    ["Oregon", "Salem", "text800"],
    ["Pennsylvania", "Harrisburg", "text917"],
    ["RhodeIsland", "Providence", ""],
    ["SouthCarolina", "Columbia", "text891"],
    ["SouthDakota", "Pierre", "text852"],
    ["Tennessee", "Nashville", "text882"],
    ["Texas", "Austin", "text840"],
    ["Utah", "Salt Lake City", "text828"],
    ["Vermont", "Montpelier", ""],
    ["Virginia", "Richmond", "text911"],
    ["Washington", "Olympia", "text776"],
    ["WestVirginia", "Charleston", ""],
    ["Wisconsin", "Madison", "text864"],
    ["Wyoming", "Cheyenne", "text825"]
    ];

    statesAndCapitals.forEach(function(i) {
        document.getElementById(i[0]).setAttribute("class", "cls-1");
        
        if (i[2] !== "") {
            var svgChildren = document.getElementById(i[2]).childNodes;
            for (var g = 1; g < svgChildren.length; g += 2) {
                svgChildren[g].style.fill = "#878d85";
            }
        }
    });
}

document.querySelector("#allSvgText").style.display = "none";
resetGame();


// START STOP
startStopBtn.addEventListener("click", function() {
    

    gameStart = Math.abs(gameStart - 1);

    if (gameStart === 1) {
        resetGame();
        startStopBtn.classList.remove("go");
        startStopBtn.classList.add("stop");
        startStopBtn.textContent = "Stop";
        countDown(3);
        quickEnd = 0;
    } else {
        startStopBtn.textContent = "Go";
        gameStart = 0;
        resetGame();
        quickEnd = 1;
    }
});

function areYouSure() {

}

function resetStartStopBtn() {
    startStopBtn.textContent = "Go";
    startStopBtn.classList.add("go");
    startStopBtn.classList.remove("stop");
    question.textContent = "You got"; // White space: \xa0
    state.textContent = score + "% Correct";
    gameStart = 0;
}

scoreBtn.addEventListener("click", function() {
    finish.classList.toggle("finish-hidden")
    header.classList.toggle("blur");
    main.classList.toggle("blur");
    footer.classList.toggle("blur");

    resetStartStopBtn();
});

var finish = document.querySelector(".finish");

function showScore() {
    var message;

    if (score > 95) {
        message = "A+ Unstoppable!";
    } else if (score > 90) {
        message = "You're Amazing!!!";
    } else if (score > 85) {
        message = "Impressive!";
    } else if (score > 65) {
        message = "Keep going!";
    } else {
        message = "Practice makes perfect...";
    }

    finish.classList.toggle("finish-hidden")
    header.classList.toggle("blur");
    main.classList.toggle("blur");
    footer.classList.toggle("blur");

    percent.textContent = score + "%";
    messageText.textContent = message;
}

function getRandState() {
    return Math.floor(Math.random() * (statesAndCapitals.length));
}

function displayCapital() {
    currentState = getRandState();

    state.textContent = statesAndCapitals[currentState][1];

}

function gamePlay(e) {
    // showScore();
    // Check if correct
    if (e.target.id === "svg4862" || e.target.getAttribute("class") !== "cls-1") {
        return;
    } else if (e.target.id === statesAndCapitals[currentState][0]) {
        // Right
        e.target.setAttribute("class", "correct");
    
        score += 2;
    } else {
        
        // Wrong
        document.getElementById(statesAndCapitals[currentState][0]).setAttribute("class", "incorrect")
        incorrect += 2;
    }

    // Make text white    
    if (statesAndCapitals[currentState][2] !== "") {
        var svgChildren = document.querySelector("#" + statesAndCapitals[currentState][2]).childNodes;
        for (var g = 1; g < svgChildren.length; g += 2) {
            svgChildren[g].style.fill = "white";
            svgChildren[g].style.stroke = "white";
        }
    }

    statesAndCapitals.splice(currentState, 1);

    // Update UI 
    correctBar.style.backgroundImage = "linear-gradient(90deg, rgb(47, 125, 160) " + score + "%, rgb(206, 215, 204) " + score + "%)";
    
    incorrectBar.style.backgroundImage = "linear-gradient(90deg, rgb(250, 24, 62) " + incorrect + "%, rgb(206, 215, 204) " + incorrect + "%)";


    // Check if user finished
    if (statesAndCapitals.length === 0) {
        showScore();
        return;
    }
    // Show next Capital
    displayCapital();
}



svgMap.addEventListener("click", gamePlay, false);

function startGame() {

    // Styling
    state.style.color = "#2f7da0";
    usaMap.style.pointerEvents = "auto";
    question.style.marginTop = "2.5rem"
    state.style.fontSize = "3rem";
    question.textContent = "What state has the capital";
    state.style.marginBottom = "0";

    displayCapital();
}

function countDown(countLeft) {
    state.textContent = countLeft;
    countLeft--;
    state.style.fontSize = "5rem";
    question.style.marginTop = "1.9rem"
    state.style.marginBottom = "0";
    state.style.color = "#fa183e";

    var counter = setInterval(function() {
    if (countLeft < 0) {
        setTimeout(startGame, 1);
        clearInterval(counter);
    } else if (quickEnd === 1) {
        gameStart = 0;
        resetGame();
        clearInterval(counter);
    } else {
        state.textContent = countLeft;
        countLeft--;
    }

    }, 1000);
}
