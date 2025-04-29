
const consultGeo = () =>{

  if(navigator.geolocation){
    var success = function(position){
        let latitud = position.coords.latitude
        let longitud = position.coords.longitude
  
        consultAPIFunc(latitud,longitud)
      }
      navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        let lat = 4.6097
        let long = -74.0817
        consultAPIFunc(lat, long)
    });
  }
}
//Actualizar datos cada hora
const updateDataByHour = () =>{
  let now = new Date

  if(now.getMinutes() == 0 && now.getSeconds() == 0){
    consultGeo()
  }

}
consultGeo()
setInterval(updateDataByHour, 1000)

// URL de la API que deseas consultar
const consultAPIFunc = (lat, long) =>{
  let apiUrl =`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=apparent_temperature,precipitation_probability,cloud_cover&timezone=auto&forecast_days=1`;

  // Llamamos a la función para realizar la consulta
  fetchData(apiUrl);
}



// Función para realizar la consulta
function fetchData(url) {
  // Usamos fetch para hacer la solicitud GET
  fetch(url)
    .then(response => {
      // Verificamos si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      // Convertimos la respuesta a JSON
      return response.json();
    })
    .then(data => {
        showDataInPage(data)
    })
    .catch(error => {
      // Manejamos cualquier error que ocurra durante la solicitud
      console.error('Hubo un problema con la solicitud:', error);
    });
}


const showDataInPage = data =>{

  let weather = []  
    data.hourly.time.map(e=>{
      let hour = new Date(e).getHours()
      let newElement = {
        hour,
        temperature: data.hourly.apparent_temperature[hour],
        precipitation: data.hourly.precipitation_probability[hour],
        cloud_cover: data.hourly.cloud_cover[hour],
      }
      weather.push(newElement)
    })
    udateData(weather)

}

let udateData = (weatherDay) =>{
  let now = new Date()
  if(cloudCover.innerHTML != weatherDay[now.getHours()].cloud_cover){
    cloudCover.innerHTML = weatherDay[now.getHours()].cloud_cover
    setCloudStyle(weatherDay[now.getHours()].cloud_cover)
  }

  if(gradosTemp.innerHTML != `${weatherDay[now.getHours()].temperature}C`){
    setTimeout(()=>{
      gradosTemp.innerHTML = `${weatherDay[now.getHours()].temperature}C`
    },250) 
    rotateFuncion(gradosConta)
  }
  if(porcentajePre.innerHTML != `${weatherDay[now.getHours()].precipitation}%`){
    setTimeout(()=>{
      porcentajePre.innerHTML = `${weatherDay[now.getHours()].precipitation}%`
    },250) 
    rotateFuncion(precipitacionConta)
  }
}


const setCloudStyle = (cloudCover) =>{
  ball2.classList.forEach(e=>{
    if(e != "sun" && e!= "moon"){
      ball2.classList.remove(e)
    }
  })
  cloudCover = 90
  if(cloudCover <= 25){
    return
  }else if(cloudCover > 25 && cloudCover <= 40){
    ball2.classList.add('cloud-state-1')
    ball2.innerHTML = `<div class="cloud cloud-1"></div>`
  }else if(cloudCover > 40 && cloudCover <=65){
    ball2.classList.add('cloud-state-2')
    ball2.innerHTML = `<div class="cloud cloud-1"></div><div class="cloud cloud-2"></div>`
  }else if(cloudCover > 65 && cloudCover <=85){
    ball2.classList.add('cloud-state-3')
    ball2.innerHTML = `<div class="cloud cloud-1"></div><div class="cloud cloud-2"></div><div class="cloud cloud-3"></div>`
  }else{
    ball2.classList.add('cloud-state-4')
    ball2.innerHTML = `<div class="cloud cloud-1"></div><div class="cloud cloud-2"></div><div class="cloud cloud-3"></div>`
  }
}
