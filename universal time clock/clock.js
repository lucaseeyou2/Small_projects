"use strict";
// Get the document element
let dc = document; 

setInterval( ()=>{
    // Create a new Date each time to get the current date
    let dt = new Date(); 
    let a = dc.getElementById("utc"); 
    let b = dt.getUTCHours();
    let c = dt.getUTCMinutes();
    let d = dt.getUTCSeconds(); 
    // If the values are single digits, then add a 0. So if there is 1 it will return 01. 
    if(d.toString().length == 1){d = "0" + d;};
    if(c.toString().length == 1){c = "0" + c;};
    a.innerHTML = `${b}:${c}:${d}`; 

    // If the value suparsses 23 hours 
    if (b == 23){b.toString().replace("23", "0");};

    let j = dc.getElementById("+1"); 
    j.innerHTML = `${1 + b}:${c}:${d}`;

    let p = dc.getElementsByClassName("-5"); 
    for (let i = 0; i < p.length; i++){p[i].innerHTML=`${b-(b-18)}:${c}:${d}`;};
    // For each element in this class, apply a date with a time deviation 
    let o = dc.getElementsByClassName("-6"); 
    for (let i = 0; i < o.length; i++){o[i].innerHTML=`${b-(b-17)}:${c}:${d}`;};
    let m = dc.getElementsByClassName("-7"); 
    for (let i = 0; i < m.length; i++){m[i].innerHTML=`${b-(b-15)}:${c}:${d}`;};
    let n = dc.getElementsByClassName("-8"); 
    for (let i = 0; i < n.length; i++){n[i].innerHTML=`${b-(b-14)}:${c}:${d}`;};
    let k = dc.getElementsByClassName("-9");
    for (let i = 0; i < k.length; i++){k[i].innerHTML=`${b-(b-13)}:${c}:${d}`;};
    let l = dc.getElementsByClassName("-10"); 
    for (let i = 0; i < l.length; i++){l[i].innerHTML=`${b-(b-12)}:${c}:${d}`;};

    //  Local time
    let f = dc.getElementById("lc"); 
    let g = dt.getHours(); 
    let h = dt.getMinutes(); 
    let i = dt.getSeconds(); 

    if(i.toString().length == 1){i = "0" + i;};
    if(h.toString().length == 1){h = "0" + h;};

    f.innerHTML = `${g}:${h}:${i}`;
},10);
