var btn_cargar = document.getElementById("btn_cargar_usuarios"),
  error_box = document.getElementById("error_box"),
  tabla = document.getElementById("tabla"),
  formulario = document.getElementById("formulario"),
  loader = document.getElementById("loader");

var usuario_nombre, usuario_edad, usuario_pais, usuario_correo;

function cargarUusarios() {
  //PARA QUE VUELVA A CAGAR DE NUEVO TODO DEL DIV TABLA
  tabla.innerHTML =
    "<tr><th>ID</th><th>Nombre</th><th>Edad</th><th>Pais</th><th>Correo</th><th>Aciones</th></tr>";

  var peticion = new XMLHttpRequest(); //Realizando una peticion
  peticion.open("GET", "php/leer-datos.php");
  loader.classList.add("active"); // para la rueda de carga

  peticion.onload = function () {
    //var datos = peticion.responseText;//LOS DATOS SOLO SON TEXTO
    var datos = JSON.parse(peticion.responseText); //TRANFORMADO JSON
    console.log("datos", datos);
    //PARA QUE MUESTRE UN ERROR SI LA CONEXION ESTA MAL
    // $.ajax({url:"../php/edit.php",method: "post",data: {emps: JSON.stringify(datos)},success: function(res){
    //     console.log("Sera que funciono"+res);
    // }});
    if (datos.error) {
      //accediendo a los datos del php
      error_box.classList.add("active");
      console.log("error");
    } else {
      for (let i = 0; i < datos.length; i++) {
        var elemento = document.createElement("tr");
        elemento.innerHTML += "<td>" + datos[i].id + "</td>";
        elemento.innerHTML += "<td>" + datos[i].nombre + "</td>";
        elemento.innerHTML += "<td>" + datos[i].edad + "</td>";
        elemento.innerHTML += "<td>" + datos[i].pais + "</td>";
        elemento.innerHTML += "<td>" + datos[i].correo + "</td>";
        elemento.innerHTML += `<td><a href="php/edit.php?id=${datos[i].id}" name="nombre1" class="btn btn-secondary" style="background: #6c757d;" ><i class="fas fa-marker"></i></a>
                                    <a href="php/delete_user.php?id=${datos[i].id}" class="btn btn-danger" style="background: #dc3545;"><i class="far fa-trash-alt"></i></a></td>`;
        tabla.appendChild(elemento);
      }
    }
    console.log(datos + "dads");
  };

  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 && peticion.status == 200) {
      // si lo mostrasdo esta finalizo 2 = peticion resivida 3 = peticion procesada 4 = petcion finaalizada
      // 200 =  para que salga el error 404
      loader.classList.remove("active"); //PARA QUITAR EL LOADER
    }
  };

  peticion.send(); //NUNCA OLVIDAR DE UBICAR ESA PARTE
}

function agregarUsuarios(e) {
  e.preventDefault();

  var peticion = new XMLHttpRequest();
  peticion.open("POST", "php/insertar_usuario.php");
  usuario_nombre = formulario.nombre.value.trim(); //PARA QUITAR LOS ESPACIOS DEL FORMULARIO
  usuario_edad = parseInt(formulario.edad.value.trim());
  usuario_pais = formulario.pais.value.trim();
  usuario_correo = formulario.correo.value.trim();

  if (formulario_valido()) {
    error_box.classList.remove("active");

    var parametros =
      "nombre=" +
      usuario_nombre +
      "&edad=" +
      usuario_edad +
      "&pais=" +
      usuario_pais +
      "&correo=" +
      usuario_correo;
    peticion.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    ); //imporante cuando queremos enviar datos
    loader.classList.add("active"); //para que cargue el circulo

    peticion.onload = function () {
      cargarUusarios();
      formulario.nombre.value = "";
      formulario.edad.value = "";
      formulario.pais.value = "";
      formulario.correo.value = "";
    };

    if (peticion.readyState == 4 && peticion.status == 200) {
      // si lo mostrasdo esta finalizo 2 = peticion resivida 3 = peticion procesada 4 = petcion finaalizada
      // 200 =  para que salga el error 404
      loader.classList.remove("active"); //PARA QUIETAR EL LOADER
    }

    peticion.send(parametros); //cuando se quiere pasar los valores de javascritp a php
  } else {
    error_box.classList.add("active");
    error_box.innerHTML = "Por favor complete el formulario correctamente";
  }
}

btn_cargar.addEventListener("click", function () {
  cargarUusarios();
});

formulario.addEventListener("submit", function (e) {
  //DE DONDE SACO EL NOMBRE FORMULARIO?
  agregarUsuarios(e);
});

function formulario_valido() {
  if (usuario_nombre == "") {
    return false;
  } else if (isNaN(usuario_edad)) {
    return false;
  } else if (usuario_pais == "") {
    return false;
  } else if (usuario_correo == "") {
    return false;
  }

  return true;
}
