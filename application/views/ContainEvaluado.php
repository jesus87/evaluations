<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>


<div class="row mt-5">
	<div class="col-xl-12 mb-5 mb-xl-0">
		<div class="card shadow">

			<div id="divHeader"  style="display: <?php echo ($toShow =='none'? 'block':'none');?>" class="table-responsive">
				<p><?php echo $message;?></p>

				<div id="divResultado" style="display: none;" class="row align-items-center">
					<div id="pResultado" class="col">

					</div>

				</div>
				<br/>
				<br/>
				<button id="btnresultado" style="display: none;" class="btn btn-primary" onclick="PrintDiv();">Imprimir</button>
			</div>
			<?php if ($toShow !='none'){ ?>
			<div id="divExamen" style="display: <?php echo $toShow;?>" class="table-responsive">
				<h1 style="display: none">Bienvenido al Examen <?php echo $Clave.' '.$Nombre;?></h1>
				<p style="display: none">El cual lo evaluará en <strong><?php echo $Descripcion;?></strong></p>
				<p style="display: none">Usted cuenta con un tiempo de   <strong><?php echo $Tiempo.' Minutos';?></strong></p>
				<input type="hidden" id="hdTiempo" value="<?php echo $Tiempo;?>" />
				<input type="hidden" id="hdTiempoAux" value="<?php echo $TiempoAux;?>" />
				<input type="hidden" id="hdIdUsuarioExamen" value="<?php echo $IdUsuarioExamen;?>" />
				<input type="hidden" id="hdCalificacionAprobatoria" value="<?php echo $CalificacionAprobatoria;?>" />
				<input type="hidden" id="hdCantidadPreguntas" value="<?php echo $CantidadPreguntas;?>" />
				<input type="hidden" id="hdUrl" value="<?php echo base_url().'index.php/Inicio'; ?>" />

				<button class="btn btn-primary" id="btnComenzar" onclick="return Comenzar();">Comenzar</button>

				</br>
				</br>
				<div id="timer" style="display: none">
					<p>Tiempo restante</p><div id="time"></div>
				</div>
				</br>
				</br>


				<?php echo $Preguntas?>
				</br>
				<button  style="display: none" class="btn btn-primary" id="btnCalificar" disabled="disabled" onclick="return Calificar();">Calificar</button>


			</div>
			<?php } ?>

		</div>
	</div>

</div>
<br/>
<?php if($toShow == 'none'){ ?>
	<br/>
	<br/>
	<br/>
<?php } ?>






    
