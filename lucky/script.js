'use strict'
let luck = parseInt( localStorage.getItem("luck"));



window.addEventListener("load", function() {
    if (localStorage.getItem("luck") == null) {
        luck = 0
        localStorage.setItem("luck", 0)
    }
    switch (luck) {
        case 2:
            document.getElementById("luckyhid2").style.display="initial";
        case 1:
            document.getElementById("luckyhid1").style.display="initial";
    }
});

function getlucky() {
    document.getElementById("lucky").innerHTML = Math.round( Math.random() * 100 );
    if (luck < 1){
        document.getElementById("luckyhid1").style.display="initial";
        luck = 1
        localStorage.setItem("luck", luck)
    }
}

function getlucky2() {
    document.getElementById("lucky").innerHTML = Math.ceil( 10 * Math.sqrt( Math.random() * 100 ) + 5 );
    if (luck < 2) {
        document.getElementById("luckyhid2").style.display="initial";
        luck = 2
        localStorage.setItem("luck", luck)
    }
}

function getlucky3() {
    let res = Math.floor(Math.random() * 6) + 1;
    switch (res) {
        case 1:
            res += ": Критический промах!<br>Вы выдохнули и пролили воду прямо на системник"
            break
        case 2:
            res += ": Промах!<br>Преподаватель почувствовал вашу неуверенность"
            break
        case 3:
            res += ": Действие?<br>Вы что-то накодили... Сложно сказать, что это работает как надо, но всё-таки работает"
            break
        case 4:
            res += ": Ход<br>Ваш код в кетсе зашёл с первого раза"
            break
        case 5:
            res += ": Попадание!<br>Вы уверенно сдаёте свою работу"
            break
        case 6:
            res += ": Критическое попадание!<br>Вы, не сказав ни слова, сдали экзамен на 100%"
            break
    }
    document.getElementById("lucky").innerHTML = "Вы бросаете шестигранник: " + res;
}

function Clear() {
    luck = 0
    localStorage.setItem("luck", 0)
    document.getElementById("lucky").innerHTML = "";
    document.getElementById("luckyhid2").style.display="none";
    document.getElementById("luckyhid1").style.display="none";
}