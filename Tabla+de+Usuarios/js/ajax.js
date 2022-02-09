// var btn = document.getElementById('btn_cargar_usuarios');
// var loader = document.getElementById('loader');


// btn.addEventListener('click', function(){
//     var peticion = new XMLHttpRequest();//Realizando una peticion
   
// 	peticion.open('GET', 'js/datos.json');
//     loader.classList.add('active');// para la rueda de carga
  
//     peticion.onload = function(){
     
//         var datos = JSON.parse(peticion.responseText);
//         for(var i = 0; i < datos.length; i++){
// 			var elemento = document.createElement('tr');
// 			elemento.innerHTML += ("<td>" + datos[i]._id + "</td>");
// 			elemento.innerHTML += ("<td>" + datos[i].nombre + "</td>");
// 			elemento.innerHTML += ("<td>" + datos[i].edad + "</td>");
// 			elemento.innerHTML += ("<td>" + datos[i].pais + "</td>");
// 			elemento.innerHTML += ("<td>" + datos[i].correo + "</td>");
// 			document.getElementById('tabla').appendChild(elemento);
// 		}
//         console.log('hOLA');
//     }

//     peticion.onreadystatechange = function(){   
//         if (peticion.readyState == 4 && peticion.status == 200) {// si lo mostrasdo esta finalizo 2 = peticion resivida 3 = peticion procesada 4 = petcion finaalizada 
//             // 200 =  para que salga el error 404
//             loader.classList.remove('active');//PARA QUIETAR EL LOADER
//         }
//     }


//     peticion.send();//NUNCA OLVIDAR DE UBICAR ESA PARTE 
// });