'use strict'

function openDiv(n) {
    document.getElementsByClassName("blackscreen")[0].style.visibility="visible"
    document.getElementsByClassName("blackscreen")[0].style.opacity="1";

    document.addEventListener('mouseup',function(event){
        let over = document.getElementById('over');
        if(event.target != over && event.target.parentNode != over){
            closeDiv()
        }
    });

    let text = "Error";
    switch (n) {
        case 1:
            text = "Пройдена на 100%. Получены все 637 достижений. Во Flash версии также получены все 99 достижений"
        break
        case 2:
            text = "Пройдены все 21 официальных уровней и ещё кучу пользовательских"
        break
        case 3:
            text = "Долгое ожидание было послано ещё дальше, потому что предзаказ насильно отменил стим из-за Warner Bros. меньше, чем за неделю до выхода"
        break
        case 4:
            text = "Третья пройдена, Resurrected надо допройти, и надеяться, что будет возможность поиграть в отличную четвёртую часть"
        break
        case 5:
            text = "3D факторио, и ровно как и она, является чёрной дырой времени"
        break
    }
    document.getElementById("over").innerHTML = text;
}

function closeDiv() {
    document.getElementsByClassName("blackscreen")[0].style.visibility="hidden"
    document.getElementsByClassName("blackscreen")[0].style.opacity="0";
}