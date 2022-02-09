<?php include("include/header.php");?>
<?php include("php/db.php");?>
<body>
	<div class="contenedor">
		<header>
			<h1>Tabla de Usuarios</h1>
			<div>
				<button id="btn_cargar_usuarios" class="btn active" >Cargar Usuarios</button>
			</div>
		</header>
		<main>
			<form action="" method="" id="formulario" class="formulario">
				<input type="text" name="nombre" id="nombre" placeholder="Nombre">
				<input type="text" name="edad" id="edad" placeholder="Edad">
				<input type="text" name="pais" id="pais" placeholder="Pais">
				<input type="email" name="correo" id="correo" placeholder="Correo">
				<button type="submit" class="btn">Agregar</button>
			</form>
			<div class="error_box" id="error_box">
				<p>Se ha producido un error.</p>
			</div>
			<table id="tabla" class="tabla">
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Edad</th>
					<th>Pais</th>
					<th>Correo</th>
					<th>Aciones</th>
				</tr>
			</table>
	
			<div class="loader" id="loader"></div>
		</main>
	</div>
<?php 
include("include/footer.php");
?>
