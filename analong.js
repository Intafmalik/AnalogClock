const hrs = document.getElementById("hourHand")
const min = document.getElementById("minuteHand")
const sec = document.getElementById("secondHand")


function AnalongClock () {

    const time = new Date()

    let hr_time = time.getHours()
    let min_time = time.getMinutes()
    let sec_time = time.getSeconds()

    let hrs_rotation = hr_time * 30 + min_time /2
    let min_rotation = min_time * 6
    let sec_rotation = sec_time * 6
     

    hrs.style.transform = `rotate(${hrs_rotation}deg)`
    min.style.transform = `rotate(${min_rotation}deg)`
    sec.style.transform = `rotate(${sec_rotation}deg)`

}

setInterval(AnalongClock, 1000)
