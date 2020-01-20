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

<div id="myModal" class="modal fade">
	<div class="modal-dialog  ">
		<div class="modal-content">
			<div class="modal-header">
		        <h5 class="modal-title">Listado de Usuarios Activos</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		    </div>
			<div class="modal-body">
				
				<input type="hidden" id="IdExamen" value="0">
				<input type="hidden" id="ClaveExamen" value="">
				<div id="tblUsuario">

				</div>

			</div>
		</div>
	</div>
</div>

<div id="myModal1" class="modal fade">
	<div class="modal-dialog  ">
		<div class="modal-content">
			<div class="modal-header">
		        <h5 class="modal-title">Listado de Usuarios Agregados</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		    </div>
			<div class="modal-body">				
				<input type="hidden" id="IdExamenUA" value="0">
				<div id="tblUsuariosAgregados">

				</div>

			</div>
		</div>
	</div>
</div>