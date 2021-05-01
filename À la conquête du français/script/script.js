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

let answersCollection = [{
    "ansID": 0,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},
{
    "ansID": 1,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},
{
    "ansID": 2,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},
{
    "ansID": 3,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},
{
    "ansID": 4,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
}, {
    "ansID": 5,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},
{
    "ansID": 6,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},
{
    "ansID": 7,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},
{
    "ansID": 8,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},
{
    "ansID": 9,
    "choices": [{ ans: '2', choiced: true }, { ans: '3', choiced: false }, { ans: '4', choiced: false },{ans: '5',choiced:false}]
},]

let questionsCollection = [{
    "id": "1",
    "text": "1 + 1 =",
    "ansID": 0
}, {
    "id": "2",
    "text": "2 + 1 =",
    "ansID": 1
}, {
    "id": "3",
    "text": "3 + 1 =",
    "ansID": 2
}, {
    "id": "4",
    "text": "1 + 4 =",
    "ansID": 3
}, {
    "id": "5",
    "text": "2 + 10 =",
    "ansID": 4
}, {
    "id": "6",
    "text": "3 + 12 =",
    "ansID": 5
}, {
    "id": "7",
    "text": "1 + 51 =",
    "ansID": 6
}, {
    "id": "8",
    "text": "2 + 121 =",
    "ansID": 7
}, {
    "id": "9",
    "text": "3 + 541 =",
    "ansID": 8
},
{
    "id": "10",
    "text": "3 + 51 =",
    "ansID": 9
},

]

function createArray(number){
   let nbAarry = []
   for(var i=0;i<number;i++){
       nbAarry.push(i)
   }
   return nbAarry
   
}



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

const player1 = { provices: [], capitale: "", color: "#ff0000", }
const player2 = { provices: [], capitale: "", color: "#00ff00", }
const player3 = { provices: [], capitale: "", color: "#0000ff", }
const player4 = { provices: [], capitale: "", color: "#ffff00", }

const proviceList = [
    "Bretagne", "Basse- Normandie", "Haute-Normandie", "Nord Pas de Calais", "Picardie", "Iles de france", "Pays de la loire", "Centre",
    "Champagne-ardenne", "Lorraine", "Alsace", "Bourgogne", "Franche-Compte", "Pointou-charentes", "Limousin", "Alivergne", "Rhône Alpes",
    "Aquitaine", "Midi-Pyrénées", "Languedoc- roussillon", "Provence-alpes cote d'azur", "Corse",
];

const pl_list = [
    "Bretagne", "Basse- Normandie", "Haute-Normandie", "Picardie", "Nord Pas de Calais", "Champagne-ardenne", "Lorraine", "Alsace", "Franche-Compte",
    "Pays de la loire", "Aquitaine", "Midi-Pyrénées", "Languedoc- roussillon", "Provence-alpes cote d'azur", "Corse", "Rhône Alpes", "Iles de france",
    "Centre", "Limousin", "Alivergne", "Bourgogne", "Pointou-charentes"
]

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
}
document.getElementById("stgb").addEventListener("click", initplayers);

let turn = {
    player_1: false,
    player_2: false,
    player_3: false,
    player_4: false
}

function createOptions() {
    let a = document.getElementsByClassName("plrch")
    for (let i = 0; i < a.length; i++) {
        let b = document.createElement("div");
        b.innerHTML = `Joueur ${i + 1}`
        a[i].appendChild(b);
    }
    for (let i = 0; i < a.length; i++) {
        let b = document.createElement("select");
        b.setAttribute("id", `player_${i + 1}_in`);
        b.innerHTML = `                        
        <option> Bretagne</option>
        <option> Basse- Normandie</option>
        <option> Haute-Normandie</option>
        <option> Picardie</option>
        <option> Nord Pas de Calais</option>
        <option> Champagne-ardenne</option>
        <option> Lorraine</option>
        <option> Alsace</option>
        <option> Franche-Compte</option>
        <option> Pays de la loire</option>
        <option> Aquitaine</option>
        <option> Midi-Pyrénées</option>
        <option> Languedoc- roussillon</option>
        <option> Provence-alpes cote d'azur</option>
        <option> Corse</option>
        <option> Rhône Alpes</option>
        <option> Iles de france</option>
        <option> Centre</option>
        <option> Limousin</option>
        <option> Alivergne</option>
        <option> Bourgogne</option>
        <option> Pointou-charentes</option>`;
        a[i].appendChild(b);
    }
}
createOptions();

function createbtns() {
    let a = document.getElementById("bcpl");
    for (let i = 0; i < 4; i++) {
        let b = document.createElement("button");
        b.innerHTML = `Joueur ${i + 1}`
        b.setAttribute("class", "lbe");
        a.appendChild(b);
    };
};
createbtns();

function loadmap() {
    let a = document.getElementById("map_content");
    for (let i = 0; i < 22; i++) {
        let b = document.createElement("li");
        b.innerHTML = `<img class = "rg"> </img>`
        a.appendChild(b);
    }
    for (let i = 0; i < 22; i++) {
        let c = document.getElementsByClassName("rg")[i];
        c.setAttribute("alt", `img_${i}`);
        c.setAttribute("id", `image_${i}`);
        c.src = `../img/n_${i}.png`
    }
}
loadmap();

function cpn() {
    let a = document.getElementById("provincelist");
    for (let i = 0; i < 22; i++) {
        let b = document.createElement("li");
        b.setAttribute("class", "pr");
        b.setAttribute("id", `n_${i + 1}`)
        b.innerHTML = `${proviceList[i]}`;
        a.appendChild(b);
    }
}
cpn();

function init() {
    function startgame() {
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
                    dc.getElementById("prompt").style.display = "none";
                    dc.getElementById("regionchoice").style.opacity = `0`;
                    dc.getElementById("regionchoice").style.display = "block";
                    dc.getElementById("regionchoice").style.transform = "translateY(-1900px)";
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
                        dc.getElementById("regionchoice").style.display = "none";
                        dc.getElementById("startgame").style.opacity = "0";
                        dc.getElementById("startgame").style.display = "block";
                        dc.getElementById("startgame").style.transform = "translateY(-1900px)";
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

                        function createQuestions() {
                            for (let i = 0; i < regions.length; i++) {
                                regions[i].addEventListener('click', () => {
                                    let ri = Math.floor(Math.random() * 10);
                                    let ansID = questionsCollection[ri].ansID;
                                    let ans = answersCollection.filter(ans => ans.ansID === ansID)
                                    let qs = document.getElementById("question")
                                    qs.style.display = "block";
                                    qs.style.transform = "translateY(-1900px)";
                                    qs.children[0].innerHTML = questionsCollection[ri].text;
                                    let ql = document.getElementById("ql")
                                    let choiceArray = ans[0].choices
                                    let qsArray = choiceArray.map(q => q.ans)

                                    for (let i = 0; i < qsArray.length; i++) {
                                        console.log(qsArray)
                                        let li = document.createElement("li");
                                        li.setAttribute("class", "qi")
                                        li.innerHTML = `<button>${qsArray[i]}</button>`
                                        ql.appendChild(li);
                                    }

                                    let qi = document.getElementsByClassName("qi")

                                    for (let i = 0; i < qsArray.length; i++) {
                                        qi[i].addEventListener("click", () => {
                                            if (ans[0].choices[i].choiced) {
                                                let a = qi[i].querySelector("button");
                                                a.style.backgroundColor = "#00ee00";
                                                a.style.boxShadow = "10px 10px #00dd00";
                                                let numArray = createArray(qsArray.length)
                                                 let res = numArray.filter(n=>n!==i)
                                                 res.map(r=>{let b= qi[r].querySelector("button");
                                                 b.style.backgroundColor = "#ee0000";
                                                 b.style.boxShadow = "10px 10px #dd0000";
                                                })
                                            }
                                            else {
                                                let found = ans[0].choices.find(f=>f.choiced === true);
                                                 console.log(ans[0].choices.indexOf(found));
                                                 let goodAnsIndex = ans[0].choices.indexOf(found)
                                                 let goodAns = qi[goodAnsIndex].querySelector("button");
                                                 goodAns.style.backgroundColor = "#00ee00";
                                                 goodAns.style.boxShadow = "10px 10px #00dd00";
                                                 let v = qi[i].querySelector("button");
                                                 v.style.backgroundColor = "#ee0000";
                                                 v.style.boxShadow = "10px 10px #dd0000";
                                                let restErrorArray = createArray(qsArray.length).filter(f=>f !== i && f!== goodAnsIndex)
                                                // let indexError =  restErrorArray[0]
                                                for(let list in restErrorArray){
                                                   let indexNum = restErrorArray[list]
                                                   let errorElement = qi[indexNum].querySelector("button");
                                                   errorElement.style.backgroundColor = "#ee0000";
                                                   errorElement.style.boxShadow = "10px 10px #dd0000";

                                                }
                                            }
                                        })
                                    }
                                });
                            };
                        };
                        createQuestions();

                    };
                };
                change_1();
            });
        };
    };
    startgame();

    function initgame() {
        for (let i = 0; i < 22; i++) {
            document.getElementsByClassName("pr")[i].addEventListener("click", () => {
                console.log(event.target)
            })
        }
    }
    initgame();
};
