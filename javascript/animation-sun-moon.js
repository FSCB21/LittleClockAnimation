/* function makeEaseOut(timing) {
        
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function arcoAnima(timeFraction) {
    timeFraction = timeFraction *2

    if(timeFraction >=1.3){
      timeFraction= timeFraction-2
      return -13.3*Math.pow(timeFraction,3)-5 // Y = -5-13.3X^^3
    }else if(timeFraction <= 1.3 && timeFraction >=0.7){
      return -(Math.pow((11 - 11 * timeFraction) / 5, 2))// Y = ((-11 - 11X)/5)^^2
    }else{
      return 13.3*Math.pow(timeFraction,3)-5// Y = -5+13.3X^^3
    }

  }
  function quad(timeFraction) {
    return timeFraction;
  } 
  const animateCircle = (timef) =>{
    
    let height = window.innerHeight - ball.clientHeight;
    height = height * 10 / 100
    let width = (window.innerWidth - ball.clientWidth);
    animate({
      duration: timef*1000,
      timing: makeEaseOut(arcoAnima),
      draw: function(progress) {
        ball.style.top = height * progress + 'px'
      }
    });

    animate({
      duration: timef*1000,        
      timing: makeEaseOut(quad),
      draw: function(progress) {
        ball.style.left = width * progress + "px"
      }
    });
  }
 */

  const setCirclePosition = (e) =>{
    let height = window.innerHeight - ball2.clientHeight;
    height = height * 10 / 100
    let width = (window.innerWidth - ball2.clientWidth);


    let fraccionTiem = 1*2/43200

    let now = new Date()

    let hrs = now.getHours()
    let mts = now.getMinutes()
    let seg = now.getSeconds()

    console.log(hrs)
    if(hrs >= 6 && hrs< 18){
      ball2.classList.add("sun")
      ball2.classList.remove("moon")
      document.documentElement.style.setProperty('--background-color', '#3498db');
      document.documentElement.style.setProperty('--background-color-clock', '#157ebb');
      document.documentElement.style.setProperty('--background-color-seccion-digital-clock','rgb(23, 109, 161)');
      document.documentElement.style.setProperty('--border-color-clock', 'rgba(24, 190, 202, 0.322)');
    }else{
      ball2.classList.add("moon")
      ball2.classList.remove("sun")
      document.documentElement.style.setProperty('--background-color-clock', 'rgb(37, 35, 57)');
      document.documentElement.style.setProperty('--background-color', 'rgb(25, 23, 45)');
      document.documentElement.style.setProperty('--background-color-seccion-digital-clock','#302e43');
      document.documentElement.style.setProperty('--border-color-clock', 'rgba(56, 59, 141, 0.363) ');
    }
    

    if(hrs>12){
      hrs = hrs - 12
    }


    let seghrs = hrs * 3600
    let segmts = mts * 60
    

    let segActual = seg + segmts + seghrs

    let segActualMas6Horas = 0
    if(segActual > 21600){
      segActualMas6Horas = segActual - 21600
    }else{
      segActualMas6Horas = segActual + 21600
    }

    let timeFraction = segActualMas6Horas * fraccionTiem

    let posY = 0
    
    if(timeFraction <= 0.7){
      posY = Math.abs(13.3 * Math.pow(timeFraction,3)-6)
    }else if(timeFraction <= 1.3 && timeFraction >=0.7){
      posY = Math.pow((11-11*timeFraction)/5,2)+1
    }else{
      let timeFraction_2 = timeFraction -2
      posY = Math.abs(-13.3*Math.pow(timeFraction_2,3)-6)
    }

    let posX = timeFraction / 2
    e.style.top = height * (posY) + 'px'
    e.style.left = width * posX + "px"

  }

/*   setInterval(()=>animateCircle(6), 6000);
  animateCircle(6); */

  setInterval(()=>setCirclePosition(ball2), 1000)
  setCirclePosition(ball2)
  
