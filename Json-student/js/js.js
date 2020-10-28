"use strict";

import {$} from "../js/nQuery.js";
import {Ajax} from "../js/ajax.js";

/*
 * Event handler for fortune button - tests responseText
 */
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("student.json", txtHandler);
}

/*
 * readystatechange/load event handler 
 * aka callback function
 * for the above AJaX
 */
let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */
    
let obj = JSON.parse(e.target.responseText);    // objectify response
var tab = document.createElement("TABLE");
for(var i = 0; i < obj.length; i++){
 let row = document.createElement("tr")
 let td = document.createElement("td")
 // and use it
let txt = document.createTextNode(`Firstname: ${obj[i].firstname}  ${obj[i].lastname} Emailaddress: ${obj[i].email} Birthday: ${obj[i].birthday}`);
td.appendChild(txt);
td.style.border = "1px solid black";
row.appendChild(td)
tab.appendChild(row);
tab.style.border = "1px solid black";
$("new").appendChild(tab);



}

    
}

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);                   // kick off JS
