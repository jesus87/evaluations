<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>


<div class="row mt-5">
	<div class="col-xl-12 mb-5 mb-xl-0">
		<div class="card shadow">
			<div class="card-header border-0">
				<div class="row align-items-center">
					<div class="col">
						<h3 class="mb-0">Crear Examen</h3>
					</div>

				</div>
			</div>
			<div class="table-responsive">
				
				<button class="btn btn-primary" onclick="return NuevoExamen();">Nuevo</button>

				<div id="tblExamen">

				</div>

				
			</div>
		</div>
	</div>

</div>

<div id="myModal" class="modal fade">
	<div class="modal-dialog  ">
		<div class="modal-content">

			<div class="modal-body">
				<div id="nav-pills-tabs-component" class="tab-pane tab-example-result fade show active" role="tabpanel" aria-labelledby="nav-pills-tabs-component-tab">
                  <div class="nav-wrapper">
                    <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link mb-sm-3 mb-md-0 active show" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="false"><i class="ni ni-bag-17 mr-2"></i>General</a>
                      </li>
                      <li class="nav-item" id="Tab2" style="display: none;">
                        <a class="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-2-tab" data-toggle="tab" href="#tabs-icons-text-2" role="tab" aria-controls="tabs-icons-text-2" aria-selected="false"><i class="ni ni-badge mr-2"></i>Preguntas</a>
                      </li>
                      <!-- <li class="nav-item">
                        <a class="nav-link mb-sm-3 mb-md-0 " id="tabs-icons-text-3-tab" data-toggle="tab" href="#tabs-icons-text-3" role="tab" aria-controls="tabs-icons-text-3" aria-selected="true"><i class="ni ni-building mr-2"></i>Tamaño</a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="card shadow">
                    <div class="card-body">
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade active show" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
                          <input type="hidden" name="hdIdExamen" id="hdIdExamen" value="0"/>
                          
                          <h3>Datos Generales</h3>
                           
                         
                          <div class="form-group row">
                            <label for="txtTitulo" >Titulo:</label>
                            <div class="col-sm-12">
                              <input type="text" class="k-textbox" maxlength="50"  name="txtTitulo" id="txtTitulo" placeholder="Titulo"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="txtCalificacionMinima" >Calificacion Minima Aprobatoria por Examen:</label>
                            <div class="col-sm-12">
                              <input type="text"  name="txtCalificacionMinima" id="txtCalificacionMinima" placeholder="Calificacion Minima"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="txtCantidadPreguntas" >Cantidad de Preguntas por Examen:</label>
                            <div class="col-sm-12">
                              <input type="text"  name="txtCantidadPreguntas" id="txtCantidadPreguntas" placeholder="Cantidad Preguntas"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="txtClave" >Clave:</label>
                            <div class="col-sm-12">
                              <input type="text" class="k-textbox" maxlength="2"  name="txtClave" id="txtClave" placeholder="Clave"/>
                            </div>
                          </div>
                           <div class="form-group row">
                            <label for="txtTiempo" >Tiempo en Minutos por Examen :</label>
                            <div class="col-sm-12">
                              <input type="text"   name="txtTiempo" id="txtTiempo" placeholder="Tiempo"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="txtSubTitulo" >Descripcion:</label>
                            <div class="col-sm-12">
                              <textarea id="txtDescripcion" rows="5"></textarea> 
                            </div>
                          </div>
                          
                          <br/>
                          <div class="form-group">
                            <button class="btn btn-primary" onclick="return ValidaExamen();">Guardar</button>
                            <button class="btn btn-primary" onclick="return CancelarExamen();">Cancelar</button>
                          </div> 
                         
                        </div>
                        <div class="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                         <h3>Preguntas</h3>
                           
                          
                          	<div class="col-md-12" id="divFormularioPreguntas">
								<label for="rdUnaOpcion">Selecciona Un tipo de pregunta </label>	
								<div class="control-group">
									<input type="radio" id="rdUnaOpcion" name="TipoPregunta" value="1" >
									<label for="rdUnaOpcion">Una Opcion</label>					
								</div>
								<div class="control-group">
									<input type="radio" id="rdVariasOpcion" name="TipoPregunta" value="2" >
									<label for="rdVariasOpcion">Opcion Multiple</label>
									
								</div>
								<div class="control-group">
									<input type="radio" id="rdRelacionar" name="TipoPregunta" Value="3" >
									<label for="rdRelacionar">Relacionar</label>
									
								</div>
								
							</div> 
							
							<div class="col-md-12 row">						
													
								<div class="col-md-12 row">
									<div class="col-md-8"> 
										<input type ="hidden" id="hdIdPregunta" value="0"/>               
										<label for="txtPregunta" >Pregunta</label>  <textarea id="txtPregunta" rows="6" style="width:90%;"></textarea> 
										<button class="btn btn-primary" onclick="return ValidaPregunta();">Guardar</button>
									</div>
									<div class="col-md-4">
										<label for="txtValorPregunta" >Valor:</label>
										<input type="text" style="width:90%;"   name="txtValorPregunta" id="txtValorPregunta" placeholder="Valor de la Pregunta"/>
										

										<!--  -->

									</div>
								</div>							
											
							</div>  
							<br/>
							<br/>  
							<div class="col-md-12 row" id="divPreguntas" style="display:none;">
									
							</div>           

                        </div>
                       <!--  <div class="tab-pane fade " id="tabs-icons-text-3" role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
                          <h3>Tamaños</h3>
                          
                         

                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>

			</div>
		</div>
	</div>
</div>


<!-- <div id="myModal2" class="modal fade">
	<div class="modal-dialog  ">
		<div class="modal-content">

			<div class="modal-body">
				<input type="hidden" id="hdTipoImagen" value=""/>
				<input type="hidden" id="hdIdTabla" value="0"/>
				<label for="Imagen">Imagen</label>
				<input name="ImagenPregunta" id="Imagen"  type="file" />
			</div>
		</div>
	</div>
</div> -->

<div id="DAdjunto" style="display:none;">
	<input type="hidden" id="IdRespuestaMultiple" value="0"/>
	<input type="hidden" id="hdTipoImagen" value="0"/>
	<input type="hidden" id="hdIdPreguntaImagen" value="0"/>
	<input type="hidden" id="hdIdRespuestaImagen" value="0"/>
	<label for="Imagen">Imagen</label>
	<input name="Imagen" id="Imagen"  type="file" />
</div>