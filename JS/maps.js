    // Inicializamos el mapa
  var map0 = L.map('map0').setView([21.511442020908092, -104.89671158470568], 20); // Coordenadas de León, México
  // Capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map0);
  // Marcador
  L.marker([21.511442020908092, -104.89671158470568]).addTo(map0)
    .bindPopup("¡Hola! Este es Nivel Leon.")
    .openPopup();
  // --- Fix para cuando el mapa está dentro de un popover ---
  document.getElementById("modal").addEventListener("toggle", (e) => {
    if (e.newState === "open") {
      setTimeout(() => {
        map0.invalidateSize();
      }, 100); // pequeño delay para que se redibuje bien
    }
  });


  var map1 = L.map('map1').setView([21.511327797135785, -104.89667237813504], 20); // Coordenadas de León, México
  // Capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map1);
  // Marcador
  L.marker([21.511327797135785, -104.89667237813504]).addTo(map1)
    .bindPopup("¡Hola! Este es Nivel Decoración.")
    .openPopup();
  // --- Fix para cuando el mapa está dentro de un popover ---
  document.getElementById("modal1").addEventListener("toggle", (e) => {
    if (e.newState === "open") {
      setTimeout(() => {
        map1.invalidateSize();
      }, 100); // pequeño delay para que se redibuje bien
    }
  });


var map2 = L.map('map2').setView([21.47499451910332, -104.85319681047626], 20); // Coordenadas de León, México
  // Capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map2);
  // Marcador
  L.marker([21.47499451910332, -104.85319681047626]).addTo(map2)
    .bindPopup("¡Hola! Este es Nivel Colosio.")
    .openPopup();
  // --- Fix para cuando el mapa está dentro de un popover ---
  document.getElementById("modal2").addEventListener("toggle", (e) => {
    if (e.newState === "open") {
      setTimeout(() => {
        map2.invalidateSize();
      }, 100); // pequeño delay para que se redibuje bien
    }
  });

  
  var map3 = L.map('map3').setView([21.490883568474388, -104.88358745004416], 20); // Coordenadas de León, México
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map3);
  L.marker([21.490883568474388, -104.88358745004416]).addTo(map3)
    .bindPopup("¡Hola! Este es Nivel Cd Del Valle.")
    .openPopup();
  // --- Fix para cuando el mapa está dentro de un popover ---
  document.getElementById("modal3").addEventListener("toggle", (e) => {
    if (e.newState === "open") {
      setTimeout(() => {
        map3.invalidateSize();
      }, 100); // pequeño delay para que se redibuje bien
    }
  });


    var map4 = L.map('map4').setView([21.483522592987725, -104.88727712462934], 20); // Coordenadas de León, México
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map4);
  L.marker([21.483522592987725, -104.88727712462934]).addTo(map4)
    .bindPopup("¡Hola! Este es Nivel Balagan.")
    .openPopup();
  // --- Fix para cuando el mapa está dentro de un popover ---
  document.getElementById("modal4").addEventListener("toggle", (e) => {
    if (e.newState === "open") {
      setTimeout(() => {
        map4.invalidateSize();
      }, 100); // pequeño delay para que se redibuje bien
    }
  });

  var map5 = L.map('map5').setView([21.52341209477042, -104.89957194683069], 20); // Coordenadas de León, México
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map5);
  L.marker([21.52341209477042, -104.89957194683069]).addTo(map5)
    .bindPopup("¡Hola! Este es Nivel Ejido.")
    .openPopup();
  // --- Fix para cuando el mapa está dentro de un popover ---
  document.getElementById("modal5").addEventListener("toggle", (e) => {
    if (e.newState === "open") {
      setTimeout(() => {
        map5.invalidateSize();
      }, 100); // pequeño delay para que se redibuje bien
    }
  });

  var map6 = L.map('map6').setView([21.51366896982903, -104.89218807215613], 20); // Coordenadas de León, México
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map6);
  L.marker([21.51366896982903, -104.89218807215613]).addTo(map6)
    .bindPopup("¡Hola! Este es Nivel Merida.")
    .openPopup();
  // --- Fix para cuando el mapa está dentro de un popover ---
  document.getElementById("modal6").addEventListener("toggle", (e) => {
    if (e.newState === "open") {
      setTimeout(() => {
        map6.invalidateSize();
      }, 100); // pequeño delay para que se redibuje bien
    }
  });

    var map7 = L.map('map7').setView([21.51166614758099, -104.89647000141537], 20); // Coordenadas de León, México
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map7);
  L.marker([21.51166614758099, -104.89647000141537]).addTo(map7)
    .bindPopup("¡Hola! Este es Nivel Envases.")
    .openPopup();
  // --- Fix para cuando el mapa está dentro de un popover ---
  document.getElementById("modal7").addEventListener("toggle", (e) => {
    if (e.newState === "open") {
      setTimeout(() => {
        map7.invalidateSize();
      }, 100); // pequeño delay para que se redibuje bien
    }
  });
