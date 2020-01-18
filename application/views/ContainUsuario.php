<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>


<div class="row mt-5">
	<div class="col-xl-12 mb-5 mb-xl-0">
		<div class="card shadow">
			<div class="card-header border-0">
				<div class="row align-items-center">
					<div class="col">
						<h3 class="mb-0">Usuario</h3>
					</div>

				</div>
			</div>
			<div class="table-responsive">
				<button class="btn btn-primary" onclick="return NuevoUsuario();">Nuevo</button>

				<div id="tblUsuario">

				</div>

			</div>
		</div>
	</div>

</div>

<div id="myModal" class="modal fade">
	<div class="modal-dialog  ">
		<div class="modal-content">

			<div class="modal-body">
				<form id="frmUsuario">
					<h4 class="modal-title">Usuario </h4>
					<input type="hidden" name="hdIdUsuario" id="hdIdUsuario" value="0"/>
					<div class="control-group">
						<label for="txtUsuario">Usuario(Debe Tener Minimo 5 caracteres y Maximo 10):</label>
						<input type="text" class="form-control" minlength="5" maxlength="10" name="txtUsuario"
							   id="txtUsuario" placeholder="Usuario"/>
					</div>
					<div class="control-group">
						<label for="txtPassword">Password(Debe Tener Minimo 5 caracteres y Maximo 10):</label>
						<input type="password" class="form-control" minlength="5" maxlength="10" name="txtPassword"
							   id="txtPassword" placeholder="Password"/>
					</div>

					<div class="control-group">
						<label for="txtNombre">Nombres:</label>
						<input type="text" class="form-control"  name="txtNombre"
							   id="txtNombre" placeholder="Nombres"/>
					</div>
					<div class="control-group">
						<label for="txtApellido">Primer Apellido:</label>
						<input type="text" class="form-control"  name="txtApellido"
							   id="txtApellido" placeholder="Primer Apellido"/>
					</div>

					<div class="control-group">
						<label for="txtSegundoApellido">Segundo Apellido:</label>
						<input type="text" class="form-control"  name="txtSegundoApellido"
							   id="txtSegundoApellido" placeholder="Segundo Apellido"/>
					</div>
					<div class="control-group">
						<label for="txtRfc">RFC:</label>
						<input type="text" class="form-control"  name="txtRfc"
							   id="txtRfc" placeholder="RFC"/>
					</div>
					<div class="control-group">
						<label for="txtRol">Rol:</label>
						<select type="text" class="form-control" name="txtRol" id="txtRol"/>
							<option value="administrador">Administrador</option>
							<option value="usuario">Usuario</option>
						</select>
					</div>
					<div class="control-group">

						<label for="txtValido">Valido:</label> &nbsp;&nbsp; <input type="checkbox"   name="txtValido"
							   id="txtValido" checked="true" />
					</div>



				</form>
				<br/>
				<div class="control-group">
					<button class="btn btn-primary" onclick="return ValidaUsuario();">Guardar</button>
					<button class="btn btn-primary" onclick="return CancelarUsuario();">Cancelar</button>
				</div>

			</div>
		</div>
	</div>
</div>
