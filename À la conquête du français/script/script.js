"use strict";

// GLOBAL ELEMENTS // 
const dc = document;
const buttons = document.querySelectorAll("button");

// prediv content 

let prelude = dc.getElementById("prelude");
let playbtn = dc.getElementById("playg");

// help page elements
let helpbtn = dc.getElementById("help");
let helppage = dc.getElementById("intructions");
let startbtn = dc.getElementsByClassName("start")[0];

// timer elements
let timerset = dc.getElementById("dis");
let timerinput = dc.getElementById("tinp");
let accepttime = dc.getElementById("acctime");
let skipacctime = dc.getElementById("skip");

// game elements
let ol = dc.getElementsByClassName("ol"); // header and game 
let playersbtns = dc.getElementsByClassName("lbe"); // these are the start player choices
let pln = dc.getElementById("pln") // the number of the player that starts 
let maingame = dc.getElementById("game");
let timer = dc.getElementById("timer");
let regions = dc.getElementsByClassName("pr");

// window events 

let promptwin = dc.getElementsByClassName("qst")[0];
let startgwin = dc.getElementsByClassName("qst")[1];
let questionw = dc.getElementsByClassName("qst")[2];
let qblitzwin = dc.getElementsByClassName("qst")[3];
let eventswin = dc.getElementsByClassName("qst")[4];

// endgame elements
let endscreen = dc.getElementById("gew");
let restartbtn = dc.getElementById("restart");
let menubtn = dc.getElementById("btm");



// TIMER FUNCTIONS //
function convertSeconds(s) {
    var min = Math.floor(s / 60);
    var sec = s % 60;
    if (sec < 10) {
        sec = "0" + sec;
    };
    return `${min} : ${sec}`;
};

function endgame() {
    maingame.style.display = "none";
    endscreen.style.display = "block";
};

function countdown() {
    let count = 0;
    let a = timerinput.value;
    if (timerinput.value == '') {
        a = 69420;
    };
    var interval = setInterval(timeit, 1000);
    let timeleft = a * 60;
    timer.innerHTML = convertSeconds(timeleft - count);
    function timeit() {
        count++
        timer.innerHTML = convertSeconds(timeleft - count);
        if (count == timeleft) {
            clearInterval(interval);
            count = 0;
            endgame();
        };
    };
};


// BUTTON EVENTS // 

window.onload = loadevents();
function loadevents() {
    helpbtn.onclick = () => {
        dc.body.style.backgroundColor = 'white';
        prelude.style.display = 'none';
        helppage.style.display = 'block';
        dc.body.style.overflowY = "scroll";
    };

    startbtn.addEventListener("click", () => {
        dc.body.style.backgroundColor = 'limegreen';
        timerset.style.display = 'block';
        helppage.style.display = 'none';
        dc.body.style.overflowY = "hidden";
    });

    playbtn.addEventListener("click", () => {
        prelude.style.display = 'none';
        timerset.style.display = 'block';
    });

    accepttime.addEventListener('click', () => {
        timerset.style.display = 'none';
        maingame.style.display = 'block';
        dc.body.style.backgroundColor = '#006994';
        init();
    });

    skipacctime.addEventListener('click', () => {
        timer.style.display = "none";
        timerset.style.display = 'none';
        maingame.style.display = 'block';
        dc.body.style.backgroundColor = '#006994';
    });

    menubtn.onclick = () => {
        endscreen.style.display = 'none';
        prelude.style.display = 'block';
        document.body.style.backgroundColor = 'limegreen';
    };

    restartbtn.onclick = () => {
        document.body.style.backgroundColor = "limegreen";
        endscreen.style.display = 'none';
        timerset.style.display = 'block';
    };
};


// GAME CONTENTS

const player1 = {provices: [],capitale: "",color: "#ff0000",}
const player2 = {provices: [],capitale: "",color: "#00ff00",}
const player3 = {provices: [],capitale: "",color: "#0000ff",}
const player4 = {provices: [],capitale: "",color: "#ffff00",}

const proviceList = [
    "Bretagne", "Basse- Normandie", "Haute-Normandie", "Nord Pas de Calais", "Picardie", "Iles de france", "Pays de la loire", "Centre", 
    "Champagne-ardenne", "Lorraine", "Alsace","Bourgogne", "Franche-Compte", "Pointou-charentes", "Limousin", "Alivergne", "Rhône Alpes", 
    "Aquitaine", "Midi-Pyrénées", "Languedoc- roussillon", "Provence-alpes cote d'azur", "Corse"
];

function initplayers() {
    let a = document.getElementById("player_1_in"); 
    let index = a.selectedIndex;
    let nomDuSelected1 = a.options[index].value;
    player1.provices.push(nomDuSelected1);
    player1.capitale = nomDuSelected1;

    
    let ab = document.getElementById(`image_${index}`); 
    ab.style.filter = "hue-rotate(0deg) brightness(1)";

    let b = document.getElementById("player_2_in"); 
    let index_2 = b.selectedIndex;
    
    let bb = document.getElementById(`image_${index_2}`); 
    bb.style.filter = "hue-rotate(150deg) brightness(1)";
    let nomDuSelected2 = b.options[index_2].value;
    player2.provices.push(nomDuSelected2);
    player2.capitale = nomDuSelected2;

    let c = document.getElementById("player_3_in"); 
    let index_3 = c.selectedIndex;
    
    let cb = document.getElementById(`image_${index_3}`); 
    cb.style.filter = "hue-rotate(240deg) brightness(1)";
    let nomDuSelected3 = c.options[index_3].value;
    player3.provices.push(nomDuSelected3);
    player3.capitale = nomDuSelected3;

    let d = document.getElementById("player_4_in"); 
    let index_4 = d.selectedIndex;
    
    let db = document.getElementById(`image_${index_4}`); 
    db.style.filter = "hue-rotate(300deg)";
    let nomDuSelected4 = d.options[index_4].value;
    player4.provices.push(nomDuSelected4);
    player4.capitale = nomDuSelected4;

    console.log('Joueur1:'+player1.capitale)
    console.log('Joueur2:'+player2.provices)
    console.log('Joueur3:'+player3.color)
    console.log('Joueur4:'+player4.capitale)

}

document.getElementById("stgb").addEventListener("click", initplayers)



function init() {
    function startgame() {
        for (let i = 0; i < regions.length; i++) {
            regions[i].addEventListener('click', () => {
                document.getElementById("question").style.display = "block";
                document.getElementById("question").style.transform = "translateY(-1900px)";
            });
        };
        promptwin.style.display = 'block';
        document.getElementById("prompt").style.transform = "translateY(-1900px)";
        for (let i = 0; i < playersbtns.length; i++) {
            playersbtns[i].addEventListener("click", () => {
                let a = event.target.innerHTML;
                function stop(ms) {
                    return new Promise(stop => setTimeout(stop, ms))
                };
                async function change_1() {
                    await stop(100);
                    let i = 100;
                    var intspace = setInterval(() => {
                        i--;
                        document.getElementById("prompt").style.opacity = `${i}%`
                    }, 10);
                    await stop(1000);
                    clearInterval(intspace);
                    document.getElementById("prompt").style.display = "none";
                    document.getElementById("regionchoice").style.opacity = `0`;
                    document.getElementById("regionchoice").style.display = "block";
                    document.getElementById("regionchoice").style.transform = "translateY(-1900px)";
                    var b = 0;
                    var intspace_2 = setInterval(() => {
                        b++;
                        document.getElementById("regionchoice").style.opacity = `${b}%`;
                    }, 10);
                    await stop(1000);
                    clearInterval(intspace_2);
                    document.getElementById("stgb").addEventListener("click", () => {
                        let c = 100;
                        setInterval(() => {
                            c--;
                            document.getElementById("regionchoice").style.opacity = `${c}%`;
                        }, 10);
                        change_2();
                    });
                    async function change_2() {
                        function stop_2(ms) {
                            return new Promise(stop => setTimeout(stop, ms));
                        }
                        await stop_2(1000);
                        document.getElementById("regionchoice").style.display = "none";
                        document.getElementById("startgame").style.opacity = "0";
                        document.getElementById("startgame").style.display = "block";
                        document.getElementById("startgame").style.transform = "translateY(-1900px)";
                        let i = 0;
                        let ab = setInterval(() => {
                            i++;
                            document.getElementById("startgame").style.opacity = `${i}%`;
                        }, 10);
                        document.getElementById("pln").innerHTML = a;
                        await stop_2(1000);
                        clearInterval(ab);
                        var g = 100;
                        setInterval(() => {
                            g--;
                            document.getElementById("startgame").style.opacity = `${g}%`;
                        }, 10);
                        countdown();
                        await stop_2(1000);
                        document.getElementById("startgame").style.display = "none";
                    };
                };
                change_1();
            });
        };
    };
    startgame();
};
