<?php
error_reporting(0);
header('Content-type: application/json; charset=utf-8');

$nombre = $_POST['nombre'];
$edad = $_POST['edad'];
$pais = $_POST['pais'];
$correo = $_POST['correo'];

function validarDatos($nombre,$edad,$pais,$correo){
    //VALIDANDO FORMULARIO
    if ($nombre == '') {
        return false;
    }elseif($edad == '' || is_int($edad)){
        return false;
    }elseif($pais == ''){
        return false;
    }elseif($correo == ''){
        return false;
    }
    return true;//En caso de que todo este correcto
}


if (validarDatos($nombre,$edad,$pais,$correo)) {
    include("db.php");
    $conexion->set_charset("utf8");//conjunto de caracteres que permite la base de datos

    //para identifaar si exite un error
    if ($conexion->connect_errno) {
        $resuesta = ['error' => true];
    }else{
        //PREPARANDO PARA HACER UNA INSERCION 
        $statement = $conexion->prepare("INSERT INTO usuarios (nombre,edad,pais,correo) VALUES(?,?,?,?)");

        //muy impornta en esta parte con cada una de las letas siss
        $statement -> bind_param("siss",$nombre,$edad,$pais,$correo);
        $statement->execute();

        //EN CASO QUE LAS FILAS SEAN MENOR O IGUALES A 0 NO SE AGREGO NIGUN VALOR
        if($conexion->affected_rows <= 0){
            //puedo ubicar cualquier valor al arreglo
            $resuesta = ['error' => true];
        }

        $resuesta = [];

    }
}else{
    $resuesta = ['error' => true];
}

//SI NO DA UN ERROR RESPUESTA VA A SER NULO
echo json_encode($resuesta);
?>