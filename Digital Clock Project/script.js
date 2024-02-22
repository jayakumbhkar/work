var hrs = document.getElementById('hrs')
var min = document.getElementById('min')
var sec = document.getElementById('sec')

setInterval(()=>{
    var currentTime = new Date()
    // console.log(currentTime)

    hrs.innerText= currentTime.getHours()
    min.innerText= currentTime.getMinutes()
    sec.innerText= currentTime.getSeconds()

  
    } ,1000)


    