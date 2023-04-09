const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const year = document.getElementById('year');
const countdown = document.getElementById('countdown');
const preloader = document.getElementById('preloader');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`Januar 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;


function updateCounter() {
    const currentTime = new Date();
    const difference = nextYear - currentTime;


    const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
    const secondsLeft = Math.floor(difference / 1000) % 60;

    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft)


    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCounter, 1000)

setTimeout(function(){
    preloader.remove();
    countdown.style.display = 'flex';
},1000)