
const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

//local save toggletheme=dark
const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
    localStorage.setItem('theme', theme);
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


const dt = document.querySelector(".dt");
const lt = document.querySelector(".lt");

dt.addEventListener("click", btnClick);
lt.addEventListener("click", btnClick);

function btnClick() {
    console.log(dt.classList);
    dt.classList.toggle("hidden");
    console.log(lt.classList);
    lt.classList.toggle("hidden");
  }


  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline="January 01 2023 00:00:00 GMT+0300"; //timer
  initializeClock('countdown', deadline);

  




