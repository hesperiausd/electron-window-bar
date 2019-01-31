
(function () {
      
  const remote = require('electron').remote; 
  
  function init() { 
    document.getElementById("app-windowbar-minimize").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      window.minimize(); 
    });
    
    document.getElementById("app-windowbar-maximize").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      if (!window.isMaximized()) {
        window.maximize();
      } else {
        window.unmaximize();
      }	 
    });
    
    document.getElementById("app-windowbar-close").addEventListener("click", function (e) {
      const window = remote.getCurrentWindow();
      window.close();
    }); 
  }; 
  
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init(); 
    }
  };
})();