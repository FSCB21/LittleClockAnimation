if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/LittleClockAnimation/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })

  var beforeInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

  
}



  function errorHandler(e){
      console.log('error: ' + e);
  }
  
  
  function eventHandler(event){
    beforeInstallPrompt = event;
    document.getElementById('installBtn').removeAttribute('disabled');
  }
  
  function instalar() {
    if (beforeInstallEvent) beforeInstallPrompt.prompt();
  }