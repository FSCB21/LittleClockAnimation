

const rotateFuncion = (e) =>{
    e.animate([
        {
            transform: 'rotatex(0deg)',
            opacity: 1
        },
        {
            transform: 'rotatex(90deg)',
            opacity: 0.5,
        },
        {
            transform: 'rotatex(0)',
            opacity: 1
        }
    ],{ duration: 500, fill:'forwards'})
}

const setHour = () =>{
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let meridiano = "am"
    if(hours>12){
        hours = hours - 12
        meridiano = "pm"
    }

    hours =hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');


    if(hoursClock.innerHTML != hours){
        setTimeout(()=>{
            hoursClock.innerHTML = hours
        },250) 
        rotateFuncion(hoursClock)
    }
    if(minutesClock.innerHTML != minutes){
        setTimeout(()=>{
            minutesClock.innerHTML = minutes
        },250)
    
        rotateFuncion(minutesClock)
    }
    if(secondsClock.innerHTML != seconds){
        setTimeout(()=>{
            secondsClock.innerHTML = seconds
        },250)
    
        rotateFuncion(secondsClock)
    }
    
    if(meridianoClock.innerHTML != meridiano){
        setTimeout(()=>{
            meridianoClock.innerHTML = meridiano
        },250)
        rotateFuncion(meridianoClock)
    }

}

setInterval(setHour, 1000)
setHour()

