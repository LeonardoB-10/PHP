<?php 
error_reporting(0);
header('Content-type: application/json; charset=utf-8');
include("db.php");

if ($conexion->connect_errno) {
    $respuesta = ['error'=> true];
}else{
    $conexion->set_charset("utf8");//PARA NO TENER PROBLEMAS CON LOS CARACTERES

    $statement = $conexion->prepare('SELECT * FROM usuarios');
    $statement->execute();//SIN ESO NO EJECUTA
    $resultados = $statement->get_result();//PARA OBTENER LOS DATOS DE LA CONSULTA

    // echo '<pre>';
    // var_dump($resultados->fetch_assoc());fetch para que muestre el resultado
    // echo '</pre>';

    $respuesta = [];
    //UN ARREGLO POR CADA UNO DE LOS RESSULTADOS QUE OBTENEMOS
    while($fila = $resultados->fetch_assoc()){
        $usuario = [
            'id'        => $fila['ID'],
            'nombre'    => $fila['nombre'],
            'edad'      => $fila['edad'],
            'pais'      => $fila['pais'],
            'correo'    => $fila['correo']
        ];
        array_push($respuesta,$usuario);//para ingresar un arreglo de arrelgos 
    }
}

echo json_encode($respuesta);
?>