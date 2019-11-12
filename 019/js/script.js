window.addEventListener("DOMContentLoaded", function() {
    "use strict";
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show"); 
        }
    }

    info.addEventListener("click", function(event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = "2019-11-13";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            "total" : t,
            "hours" : hours,
            "minutes" : minutes,
            "seconds" : seconds
        };
    }
    
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.total < 0) {
                clearInterval(timeInterval);
            } else {
                if (t.hours < 10) {
                    hours.textContent = "0" + t.hours;
                } else {
                    hours.textContent = t.hours;
                }
                if (t.minutes < 10) {
                    minutes.textContent = "0" + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }
                if (t.seconds < 10) {
                    seconds.textContent = "0" + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }
            }
        }    
    }

    setClock("timer", deadline);

    //Modal

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        description = document.querySelectorAll(".description-btn"),
        descriptionBtn = document.querySelectorAll(".description-btn");



    close.addEventListener("click", function() {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    for (let a = 0; a < description.length; a++) {
        description[a].addEventListener("click", function(event) {
            if (event.target && event.target.classList.contains("description-btn")) {
                overlay.style.display = "block";
                this.classList.add("more-splash");
                document.body.style.overflow = "hidden";
            }
        });
    }

    more.addEventListener("click", function() {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
    });

});

