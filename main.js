// const header = document.getElementById("text");

// console.log(header);

// const random = ["yep", "this", "works"];

// for (let i = 0; i < random.length; i++) {
//     console.log(random[i]);
// }

// let lang = ["lv()", "eng()", "ru()"];

// function lv() {
//     document.getElementById("test").innerHTML = hi[0];
// }

// if (lang === lv()) {
//     document.getElementById("test").innerHTML = hi[0];
// }
// else if (lang === eng()) {
//     document.getElementById("test").innerHTML = hi[1];
// }
// else if (lang === lang[2]) {
//     document.getElementById("test").innerHTML = hi[2];
// }




// Augšpusē atstāju dažas lietiņas, kuras testēju

// Datu kopa zem nosaukuma "hi"
const hi = ["Sveiki!", "Hello!", "привет!"];

// Funkcija izsauc attiecīgo dropdown pogu, no iepriekš html a tagā ievietoto onclick="" funkciju
function lv() {
    // Funkcijas uzdevumā, izsaucu h1 elementu ar tā uzdoto "id", kas šajā gadījumā bija "test".
    // "innerHTML" norāda uz to, ka šajā elementā tiks ievietots kāds cits elements.
    // "= hi[0]" attiecīgi norāda to, ka es vēlos ievietot pirmo elementu no "hi" datu kopas
    // h1 tagā.
    document.getElementById("test").innerHTML = hi[0];
}
function eng() {
    document.getElementById("test").innerHTML = hi[1];
}
function ru() {
    document.getElementById("test").innerHTML = hi[2];
}





