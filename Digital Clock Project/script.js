var hrs = document.getElementById('hrs');
var min = document.getElementById('min');
var sec = document.getElementById('sec');

setInterval(()=>{var currentTime = new Date();

    hrs.innerHTML= currentTime.getHours();
    min.innerHTML= currentTime.getMinutes();
    sec.innerHTML= currentTime.getSeconds();},1000)
