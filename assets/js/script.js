let countDown = () => {
    let date = new Date()
    let eventDate = new Date(2022, 2, 20)

    //get current time
    let currentTime = date.getTime()

    //set event time
    let eventTime = eventDate.getTime()

    //return remaining time in millisecond
    let remainingTime = eventTime - currentTime

    let s = Math.floor(remainingTime/1000)
    let m = Math.floor(s/60)
    let h = Math.floor(m/60)
    let d = Math.floor(h/24)

    h %= 24
    m %= 60
    s %= 60

    h = (h< 10) ? "0" + h : h
    m = (m< 10) ? "0" + m : m
    s = (s< 10) ? "0" + s : s
    if(currentTime >= eventTime){
        h = 0
        m = 0
        s = 0
        d = 0
    }
    document.getElementById("days").textContent = d
    document.getElementById("days").textContent = d
    document.getElementById("hours").textContent = h
    document.getElementById("minutes").textContent = m
    document.getElementById("seconds").textContent = s
    setTimeout(countDown, 1000)
}
countDown()