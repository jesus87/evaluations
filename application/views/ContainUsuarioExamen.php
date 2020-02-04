<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>


<div class="row mt-5">
	<div class="col-xl-12 mb-5 mb-xl-0">
		<div class="card shadow">
			<div class="card-header border-0">
				<div class="row align-items-center">
					<div class="col">
						<h3 class="mb-0">Asignar Usuarios a Examen</h3>
						<input type="hidden" id="hdRolUsuario" value="<?php echo $this->session->userdata('perfil');?>" />
					</div>

				</div>
			</div>
			<div class="table-responsive">
				<button class="btn btn-primary" onclick="return AgregarUsuario();">Agregar Usuario</button>

				<div id="tblExamenes">

				</div>

			</div>
		</div>
	</div>

</div>

<div id="myModal" style="display:none;">
	<!-- <h5 class="modal-title">Listado de Usuarios Activos</h5> -->
	<br/>
	<br/>
	<div class="row">
		<input type="hidden" id="IdExamen" value="0">
		<input type="hidden" id="ClaveExamen" value="">
		<div id="tblUsuario">

		</div>
	</div>
</div>

<div id="myModal1" style="display:none;">
	<!-- <h5 class="modal-title">Listado de Usuarios Agregados</h5> -->
	<br/>
	<br/>
	<div class="row">
		<input type="hidden" id="IdExamenUA" value="0">
		<div id="tblUsuariosAgregados">

		</div>
	</div>
</div>
