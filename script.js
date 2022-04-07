'use strict'

function cacheUpdate() {
    let lastVersionTime = Date.UTC(2022, 4, 1, 22, 0, 0);
    let lastCacheDate = localStorage.getItem("lastCacheDate");
    
    let reload;
    if (lastCacheDate) {
        if (lastVersionTime > lastCacheDate) {
            reload = true;
        }
    }

    localStorage.setItem("lastCacheDate", Date.now());

    if (reload) {
        location.reload(true);
    }
}

function image1() {
    document.getElementById("img").style.width="100%"
    document.getElementById("button").innerHTML = "Уберите картинку!";
    document.getElementById("button").setAttribute("onclick", "image2()");
}

function image2() {
    document.getElementById("img").style.width="0%"
    document.getElementById("button").innerHTML = "Фух...";
    document.getElementById("button").setAttribute("onclick", "image1()");
}

function smesh1() {
    document.getElementsByClassName("text")[0].style.display="inline";
    document.getElementById("smesh").setAttribute("onclick", "smesh2()");
    document.getElementById("text2").innerHTML = ""

    document.getElementsByClassName("text")[0].addEventListener("keyup", event=>{
        if(event.key !== "Enter") return;
        smesh2()
    })
}

function smesh2() {
    if (document.getElementsByClassName("text")[0].value !== "") {
        let greet = Math.floor(Math.random() * 5) + 1;
        switch (greet) {
            case 1:
                greet = "Привет, "
                break
            case 2:
                greet = "Доброго дня, "
                break
            case 3:
                greet = "Гуд морнинг, "
                break
            case 4:
                greet = "Здравствуй, "
                break
            case 5:
                greet = "Алоха, "
                break
        }
        document.getElementById("text2").innerHTML = greet + document.getElementsByClassName("text")[0].value + "!";
    }

    document.getElementsByClassName("text")[0].style.display="none";
    document.getElementsByClassName("text")[0].value = "";
    document.getElementById("smesh").setAttribute("onclick", "smesh1()");
}