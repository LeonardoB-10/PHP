
<?php 
include("db.php");
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * FROM usuarios WHERE ID = '$id'";
    $resul = mysqli_query($conexion,$query);
    if (mysqli_num_rows($resul)==1) {
       $row = mysqli_fetch_array($resul);//tomasme todo el resultado de la consulta
       $nombre = $row['nombre'];//especificamos que resultado 
       $edad = $row['edad'];//especificamos que resultado
       $pais = $row['pais'];
       $correo = $row['correo'];
    } 
}


if(isset($_POST['update'])){//en caso que exista el metodo updatte por quiere actualizar
    $id = $_GET['id'];
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $pais = $_POST['pais'];
    $correo = $_POST['correo'];

    $query = "UPDATE usuarios set nombre = '$nombre', edad = '$edad', pais = '$pais', correo = '$correo' WHERE id = '$id' ";
    $resul = mysqli_query($conexion,$query);
    header("Location: ../index.php");
}



?>
<?php include("../include/header.php");?>
<body>
<div class="container p-4">
  <div class="row">
    <div class="col-md-4 mx-auto">
      <div class="card card-body">
          <!-- mandando los datos a edit.php y recibo los datos mendiante el metodo post-->
      <form action="edit.php?id=<?php echo $_GET['id']; ?>" method="POST">
        <div class="form-group">
            <!-- value para que muestre el valor de la variable a modificar -->
        <input name="nombre" type="text" class="form-control" value="<?php echo $nombre; ?>" placeholder="Editar Nombre"><br>
        <input name="edad" type="number" class="form-control" value="<?php echo $edad; ?>" placeholder="Editar Edad"><br>
        <input name="pais" type="text" class="form-control" value="<?php echo $pais; ?>" placeholder="Editar Pais"><br>
        <input name="correo" type="email" class="form-control" value="<?php echo $correo; ?>" placeholder="Editar Correo"><br>
        </div>
        <button class="btn btn-success" name="update">Update</button>
      </form>
      </div>
    </div>
  </div>
</div>
<?php include("../include/footer.php");?>

