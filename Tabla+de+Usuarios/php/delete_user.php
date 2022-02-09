<?php 
include("db.php");
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "DELETE FROM usuarios WHERE ID = $id";
    $resultado = mysqli_query($conexion,$query);

    if(!$resultado){
        die("Query Failed"); 
    }

    // $_SESSION["message"] = 'Tarea Eliminada';
    // $_SESSION["message_type"] = "danger";
    header("Location: ../index.php");

}

?>