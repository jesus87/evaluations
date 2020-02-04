var cont=0;
var cont1=0;
$(document).ready(function () {

	
	IniciarControles();
	gvExamen();

	// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	// //  e.target // newly activated tab
	// //    e.relatedTarget // previous active tab
	// console.log(e);
	// 	if($("#hdIdExamen").val()=="0"){
	// 		// if(e.){

	// 		// }
	// 		// e.relatedTarget
	// 	}   

	// })
	$("#Imagen").kendoUpload({
        async: {
            saveUrl: 'CreaExamen/uploadImagen',
            autoUpload: false
        },
        multiple: false,
        upload:onuploadImagen,
        success: function (evt) {
            //console.log(evt);
              if(evt.response.status=="Error"){
                 $(".k-upload-files.k-reset").find("li").remove();
                  alertify.alert(evt.response.message);
              }else{
              	consultaPregunta();
              	ocultarKendoWindow();

              }
              //else{
                  //$("#tblProducto").data("kendoGrid").dataSource.read();
                  //alertify.alert("La Imagen Subio Correctamente")
              //}
        }
        //,enabled:false
    });


});

function ocultarKendoWindow(){
	$("#DAdjunto").data("kendoWindow").close();
}

function onuploadImagen(e){
    
    postUrl="CreaExamen/uploadImage?IdRespuestaMultiple="+$("#IdRespuestaMultiple").val()+"&IdTipoImagen="+$("#hdTipoImagen").val()+"&IdPreguntaImagen="+$("#hdIdPreguntaImagen").val()+"&IdRespuestaImagen="+$("#hdIdRespuestaImagen").val();
    this.options.async.saveUrl = postUrl;
    
}

function IniciarControles(){
	$("#txtCalificacionMinima").kendoNumericTextBox();
	$("#txtCantidadPreguntas").kendoNumericTextBox();
	$("#txtTiempo").kendoNumericTextBox();
	$("#txtValorPregunta").kendoNumericTextBox();
}

function NuevoExamen() {
	LimpiaExamen();
	jQuery('#myModal').modal('show');

	return false;
}

function CancelarExamen() {

	jQuery('#myModal').modal('hide');

	return false;
}

function LimpiaExamen() {
	$("#Tab2").hide();
	$("#hdIdExamen").val("0");
	$("#txtTitulo").val("");	
	$("#txtCalificacionMinima").data("kendoNumericTextBox").value(0);
	$("#txtCantidadPreguntas").data("kendoNumericTextBox").value(0);
	$("#txtClave").val("");
	$("#txtTiempo").data("kendoNumericTextBox").value(0);
	$("#txtDescripcion").val("");
	



}

function ValidaExamen() {

	if ($("#txtTitulo").val() == "" ) {
		alertify.alert("Es Necesario Ingresar el Titulo");
		return false;
	}
	

	if ($("#txtCalificacionMinima").val() == "0" ) {
		alertify.alert("Es Necesario Ingresar la Calificacion Minima Aprobatoria por Examen");
		return false;
	}
	if ($("#txtCantidadPreguntas").val() == "") {
		alertify.alert("Es Necesario Ingresar la Cantidad de Preguntas por Examen");
		return false;
	}
	if ($("#txtClave").val() == "") {
		alertify.alert("Es Necesario Ingresar la Clave del Examen");
		return false;
	}

	if ($("#txtTiempo").val() == "" ) {
		alertify.alert("Es Necesario Ingresar el Tiempo en Minutos por Examen");
		return false;
	}

	GuardaExamen();

	return false;
}

function GuardaExamen() {

	var _id = $("#hdIdExamen").val();
	var _titulo = $("#txtTitulo").val();
	var _calificacionminima = $("#txtCalificacionMinima").data("kendoNumericTextBox").value();
	var _cantidadpreguntas = $("#txtCantidadPreguntas").data("kendoNumericTextBox").value();
	var _clave = $("#txtClave").val();
	var _tiempo = $("#txtTiempo").data("kendoNumericTextBox").value();
	var _descripcion = $("#txtDescripcion").val();
	



	var parametros = {
		"hdIdExamen": _id,
		"txtTitulo": _titulo,
		"txtCalificacionMinima": _calificacionminima,
		"txtCantidadPreguntas": _cantidadpreguntas,
		"txtClave": _clave,
		"txtTiempo": _tiempo,
		"txtDescripcion": _descripcion

	};

	$.ajax({
		type: 'POST',
		url: "CreaExamen/Guarda",
		dataType: 'json',
		data: parametros,

		success: function (msg) {
			//console.log(msg);
			if (msg.message.Respuesta == "OK") {
				$("#hdIdExamen").val(msg.message.Id);
				$("#tblExamen").data("kendoGrid").dataSource.read();
				$("#Tab2").show();
				alertify.alert("Examen Guardado Correctamente");
			}
			else alertify.alert(msg.message.Respuesta);
		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
	return false;
}

function gvExamen() {


	var grid = $('#tblExamen').kendoGrid({
		columns: [
			{
				command: [{
					name: "Edit", imageClass: "k-icon k-i-pencil", click: function (e) {
						e.preventDefault();
						var dataItem = this.dataItem($(e.target).closest("tr"));
						var id = dataItem.IdExamen;
						var Titulo = dataItem.Nombre;
						var CalificacionAprobatoria = dataItem.CalificacionAprobatoria;
						var CantidadPreguntas = dataItem.CantidadPreguntas;
						var Clave = dataItem.Clave;
						var Tiempo = dataItem.Tiempo;
						var Descripcion = dataItem.Descripcion;
						
						
							alertify.confirm('Realmente quiere Editar El Examen ' + Titulo + ' ?', function (e) {
								if (e) {

									NuevoExamen();
									$("#Tab2").show();
									$("#hdIdExamen").val(id );
									$("#txtTitulo").val(Titulo);
									$("#txtCalificacionMinima").data("kendoNumericTextBox").value(CalificacionAprobatoria);
									$("#txtCantidadPreguntas").data("kendoNumericTextBox").value(CantidadPreguntas);
									$("#txtClave").val(Clave);
									$("#txtTiempo").data("kendoNumericTextBox").value(Tiempo);
									$("#txtDescripcion").val(Descripcion);
									consultaPregunta();

								}
							});
						
					}
				}], title: "&nbsp;", width: "100px"
			},
			{
				command: [{
					name: "Del", imageClass: "k-icon k-i-close", click: function (e) {
						e.preventDefault();
						var dataItem = this.dataItem($(e.target).closest("tr"));
						var Titulo = dataItem.Nombre;
						var id = dataItem.IdExamen;
						// var Usuario = dataItem.Usuario;
						// var rol = dataItem.Rol;
						var parametros = {
							"IdExamen": id
						};

						// if (rol == 'administrador'){

						alertify.confirm('Realmente quiere Eliminar El Examen: '+ Titulo +' ?', function (e) {
							if (e) {
								$.ajax({
									type: 'POST',
									url: 'CreaExamen/EliminaExamen',
									dataType: 'json',
									data: parametros,
									success: function (msg) {
										if (msg.message == "OK") {
											$("#tblExamen").data("kendoGrid").dataSource.read();

										}
										else alertify.alert(msg.Error);


									},
									error: function (x, status, error) {
										alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
									}

								});

							}
						});
						// }
						// else alertify.alert("Usted no cuenta con los permisos para realizar esta acción");
					}
				}], title: "&nbsp;", width: "100px"
			},


			{
				field: "Nombre", width: 100,
				title: "Titulo", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Descripcion", width: 100,
				title: "Descripcion", filterable: {
					cell: {
						operator: "contains"
					}
				}

			}
			,

			{
				field: "Clave", width: 100,
				title: "Clave", filterable: {
					cell: {
						operator: "contains"
					}
				}

			}
			,

			{
				field: "Tiempo", width: 100,
				title: "Tiempo", filterable: {
					cell: {
						operator: "contains"
					}
				}

			}
			,

			{
				field: "CalificacionAprobatoria", width: 100,
				title: "Calificacion Aprobatoria", filterable: {
					cell: {
						operator: "contains"
					}
				}

			}
			,

			{
				field: "CantidadPreguntas", width: 100,
				title: "Cantidad Preguntas", filterable: {
					cell: {
						operator: "contains"
					}
				}

			}
			,

			{
				field: "Usuario", width: 100,
				title: "Usuario", filterable: {
					cell: {
						operator: "contains"
					}
				}

			}

		],
		dataSource: {
			type: 'json',
			schema: {
				model: {
					fields: {
						IdExamen: {type: "string"},
						Nombre: {type: "string"},
						Descripcion: {type: "string"},
						Clave: {type: "string"},
						Tiempo: {type: "string"},
						CalificacionAprobatoria: {type: "string"},
						CantidadPreguntas: {type: "string"},
						Usuario: {type: "string"}
					}
				}
			},
			transport: {
				read: function (options) {
					$.ajax({
						type: 'POST',
						url: 'CreaExamen/Busca',
						dataType: 'json',
						data: '',
						contentType: 'application/json; charset=utf-8',
						success: function (msg) {

							options.success(msg.data);

						},
						error: function (x, status, error) {
							alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
						}

					});
				}
			},
			pageSize: 10
		},
		
		filterable: {
			mode: "row"
		},
		sortable: true,
		pageable: {
			refresh: true,
			pageSizes: true,
			buttonCount: 5
		},
		selectable: "single",
		scrollable: true

	}).data("kendoGrid");//fin del grid
}

function ValidaPregunta() {
	var TipoPreguntarespuesta=$('input:radio[name=TipoPregunta]:checked').val();
	if (TipoPreguntarespuesta == "") {
		alertify.alert("Es Necesario Ingresar la Cantidad de Preguntas por Examen");
		return false;
	}

	if ($("#txtPregunta").val() == "" ) {
		alertify.alert("Es Necesario Ingresar la Descripcion de la Pregunta");
		return false;
	}
	
	if ($("#txtValorPregunta").val() == "" ) {
		alertify.alert("Es Necesario Ingresar el Valor de la Pregunta");
		return false;
	}
	
	GuardaPregunta();
	

	return false;
}

function LimpiaPregunta(){
	$("#hdIdPregunta").val(0);
	$("#txtPregunta").val("");
	$("#txtValorPregunta").data("kendoNumericTextBox").value(0);
}

// function AgregarPregunta(){
// 	//var TipoPreguntarespuesta=$("#hdTipoPreguntaRespuesta").val();
// 	$("#divPreguntas").show();
// 	var pregunta= $("#txtPregunta").val();
// 	//$("#lbPregunta").html(pregunta);
// 	cont++;
// 	var TipoPreguntarespuesta=$('input:radio[name=TipoPregunta]:checked').val();
// 	if(TipoPreguntarespuesta=="1"){
		
// 		preguntaNueva(1,pregunta,cont);
// 	}else if(TipoPreguntarespuesta=="2"){
		
// 		preguntaNueva(2,pregunta,cont);
// 	}else if(TipoPreguntarespuesta=="3"){
		
// 		preguntaNueva(3,pregunta,cont);
// 	}
// }

function GuardaPregunta(){
	var _id = $("#hdIdPregunta").val();
	var _pregunta = $("#txtPregunta").val();
	var _tipo = $('input:radio[name=TipoPregunta]:checked').val();
	var _valor = $("#txtValorPregunta").data("kendoNumericTextBox").value();
	var _idexamen = $("#hdIdExamen").val();
	



	var parametros = {
		"hdIdPregunta": _id,
		"txtPregunta": _pregunta,
		"txtTipo": _tipo,
		"txtValor": _valor,
		"txtIdExamen":_idexamen

	};

	$.ajax({
		type: 'POST',
		url: "CreaExamen/GuardaPregunta",
		dataType: 'json',
		data: parametros,

		success: function (msg) {

			if (msg.message == "OK") {
				// $("#tblExamen").data("kendoGrid").dataSource.read();
				// $("#Tab2").show();
				//CancelarUsuario();
				//AgregarPregunta();
				consultaPregunta();
				LimpiaPregunta();
			}
			else alertify.alert(msg.Error);
		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
	return false;
}

function EditarPregunta(Idpregunta,Pregunta,Tipo,Valor){
	$("#hdIdPregunta").val(Idpregunta);
	if(Tipo==1)
	{
		$("#rdUnaOpcion").prop("checked",true);
	}else if(Tipo==2)
	{
		$("#rdVariasOpcion").prop("checked",true);
	}else if(Tipo==3)
	{
		$("#rdRelacionar").prop("checked",true);
	}

	$("#txtPregunta").val(Pregunta);
	$("#txtValorPregunta").data("kendoNumericTextBox").value(Valor);
	
	
	 $('#myModal').animate({
        scrollTop: $("#divFormularioPreguntas").offset().top
    }, 2000);

	 return false;
}

function EliminarPregunta(IdPregunta,tipo){

	alertify.confirm('Realmente quiere Eliminar la Pegunta ?', function (e) {
		if (e) {
			var parametros = {
				"hdIdPregunta": IdPregunta

			};

			$.ajax({
				type: 'POST',
				url: "CreaExamen/EliminaPregunta",
				dataType: 'json',
				data: parametros,

				success: function (msg) {

					if (msg.message == "OK") {
						// $("#tblExamen").data("kendoGrid").dataSource.read();
						// $("#Tab2").show();
						//CancelarUsuario();
						//AgregarPregunta();
						consultaPregunta();
					}
					else alertify.alert(msg.Error);
				},
				error: function (x, status, error) {
					alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
				}

			});
		}
	});
	return false;
}
function consultaPregunta(){
	var _idexamen = $("#hdIdExamen").val();
	var parametros = {
		
		"txtIdExamen":_idexamen

	};
	$.ajax({
		type: 'POST',
		url: "CreaExamen/ConsultaPregunta",
		dataType: 'json',
		data: parametros,

		success: function (msg) {
			 console.log(msg);
			if (msg.data.Respuesta == "OK") {
				// $("#tblExamen").data("kendoGrid").dataSource.read();
				// $("#Tab2").show();
				//CancelarUsuario();
				//AgregarPregunta();
				if(msg.data.Html!=""){
					$("#divPreguntas").show();
				}
				$("#divPreguntas").html(msg.data.Html );
				cont1=parseInt(msg.data.Cont1);
			}
			else alertify.alert(msg.Error);
		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
}

/*function preguntaNueva(tipo,pregunta,cont){
	
	var html='<div class="col-md-12 row" id="Pregunta'+cont+'" >'+
									'<div class="col-md-8"> '+
											'<input type="hidden" id="hdTipoPreguntaRespuesta'+cont+'" value="'+tipo+'">'+             
											'<label >'+pregunta+'</label> '+
											
									'</div>'+
									'<div class="col-md-4">'+                
											'<button class="btn btn-primary" onclick="return AddRespuesta('+cont+','+tipo+');">+Respuesta</button>'+
									'</div>'+
								'</div> <br/><br/>';
	
	$("#divPreguntas").append(html);
	
}*/

function AddRespuesta(IdPregunta,tipo){
	cont1++;
	console.log(cont1);
	if(tipo==1){
		var htmlResp='<div class="col-md-12 row" id="divPreguntaRespuesta'+cont1+'" >'+
									'&nbsp;'+
									'<div class="col-md-6 row"> '+	
											'<div class="col-md-8">'+										
											'<input type="radio" name="rdbPR'+IdPregunta+'" id="rdbPR'+cont1+'"><textarea id="txtRespuesta'+cont1+'" rows="6" style="width:90%;"></textarea>'+
											'</div>'+
											'<div class="col-md-4">'+	
											'<label for="txtValor'+cont1+'">Valor</label><input type="text" id="txtValor'+cont1+'" style="width:90%;" />'+	
											'</div>'+					
									'</div>'+
									'<div class="col-md-5">'+                
											'<button class="btn btn-success" onclick="return GuardaRespuesta(0,'+cont1+','+IdPregunta+','+tipo+');">GR</button>'+
											'<button class="btn btn-danger" onclick="return EliminaRespuesta(0,'+cont1+','+IdPregunta+','+tipo+');">ER</button>'+
									'</div>'+
								'</div> <br/><br/>';
	}else if(tipo==2){
		var htmlResp='<div class="col-md-12 row" id="divPreguntaRespuesta'+cont1+'" >'+
									'&nbsp;'+
									'<div class="col-md-6 row"> '+	
											'<div class="col-md-8">'+										
											'<input type="checkbox" name="chkPR'+IdPregunta+'" id="chkPR'+cont1+'"><textarea id="txtRespuesta'+cont1+'" rows="6" style="width:90%;"></textarea>'+
											'</div>'+
											'<div class="col-md-4">'+	
											'<label for="txtValor'+cont1+'">Valor</label><input type="text" id="txtValor'+cont1+'" style="width:90%;" />'+	
											'</div>'+						
									'</div>'+
									'<div class="col-md-5">'+                
											'<button class="btn btn-success" onclick="return GuardaRespuesta(0,'+cont1+','+IdPregunta+','+tipo+');">GR</button>'+
											'<button class="btn btn-danger" onclick="return EliminaRespuesta(0,'+cont1+','+IdPregunta+','+tipo+');">ER</button>'+
									'</div>'+
								'</div> <br/><br/>';
	}else if(tipo==3){
		var htmlResp='<div class="col-md-12 row" id="divPreguntaRespuesta'+cont1+'" >'+
									'&nbsp;'+
									'<div class="col-md-6 row"> '+	
											'<div class="col-md-8">'+										
											'<textarea id="txtRespuesta'+cont1+'" rows="6" style="width:90%;"></textarea>'+
											'</div>'+
											'<div class="col-md-4">'+	
											'<label for="txtValor'+cont1+'">Valor</label><input type="text" id="txtValor'+cont1+'" style="width:90%;" />'+	
											'</div>'+						
									'</div>'+
									'<div class="col-md-5">'+

									'</div>'+
									'<div class="col-md-1">'+  
											//'<button class="btn btn-warning" onclick="return AdjuntarImagen(0,'+cont1+','+IdPregunta+','+tipo+');">AI</button>'+              
											'<button class="btn btn-success" onclick="return GuardaRespuesta(0,'+cont1+','+IdPregunta+','+tipo+');">GR</button>'+
											'<button class="btn btn-danger" onclick="return EliminaRespuesta(0,'+cont1+','+IdPregunta+','+tipo+');">ER</button>'+
									'</div>'+
								'</div> <br/><br/>';
	}
	$("#Pregunta"+IdPregunta).append(htmlResp);
}

function GuardaRespuesta(IdRespuesta,contador,IdPregunta,tipo){

	var _id = IdRespuesta;
	var _idpregunta= IdPregunta;

	///se obtiene el texto de la respuesta
	var _respuesta;
	if(IdRespuesta==0){
		_respuesta = $("#txtRespuesta"+contador).val();
	}else{
		_respuesta = $("#txtRespuesta"+IdRespuesta).val();
	}

	///se obtiene cual es la correcta
	var _esCorrecta=0;
	if(tipo==1){
		if(IdRespuesta==0){
			_esCorrecta= ($('#rdbPR'+contador).is(':checked')==true?1:0);
		}else{
			_esCorrecta= ($('#rdbPR'+IdRespuesta).is(':checked')==true?1:0);
		}
		
	}else if(tipo==2){
		if(IdRespuesta==0){
			_esCorrecta= ($('#chkPR'+contador).is(':checked')==true?1:0);
		}else{
			_esCorrecta= ($('#chkPR'+IdRespuesta).is(':checked')==true?1:0);
		}
	}

	var _valor;
	if(IdRespuesta==0){
		_valor = $("#txtValor"+contador).val();
	}else{
		_valor = $("#txtValor"+IdRespuesta).val();
	}

	// var _tipo = $('input:radio[name=TipoPregunta]:checked').val();
	// var _valor = $("#txtValorPregunta").data("kendoNumericTextBox").value();
	// var _idexamen = $("#hdIdExamen").val();
	



	var parametros = {
		"hdIdRespuesta": _id,
		"txtPregunta_IdPregunta": _idpregunta,
		"txtRespuesta": _respuesta,
		"txtValor": _valor,
		"txtCorrecta":_esCorrecta

	};

	$.ajax({
		type: 'POST',
		url: "CreaExamen/GuardaRespuesta",
		dataType: 'json',
		data: parametros,

		success: function (msg) {

			if (msg.message == "OK") {
				// $("#tblExamen").data("kendoGrid").dataSource.read();
				// $("#Tab2").show();
				//CancelarUsuario();
				//AgregarPregunta();
				consultaPregunta();
			}
			else alertify.alert(msg.Error);
		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
	return false;
}

function EliminaRespuesta(IdRespuesta,Contador,IdPregunta,tipo){

	alertify.confirm('Realmente quiere Eliminar la Respuesta ?', function (e) {
		if (e) {
			var parametros = {
				"hdIdRespuesta": IdRespuesta

			};

			$.ajax({
				type: 'POST',
				url: "CreaExamen/EliminaRespuesta",
				dataType: 'json',
				data: parametros,

				success: function (msg) {

					if (msg.message == "OK") {
						// $("#tblExamen").data("kendoGrid").dataSource.read();
						// $("#Tab2").show();
						//CancelarUsuario();
						//AgregarPregunta();
						consultaPregunta();
					}
					else alertify.alert(msg.Error);
				},
				error: function (x, status, error) {
					alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
				}

			});
		}
	});
	return false;
}

function AdjuntarImagen(IdRespuestaMultiple,TipoImagen,IdPregunta,IdRespuesta){
	$("#IdRespuestaMultiple").val(IdRespuestaMultiple);
	$("#hdTipoImagen").val(TipoImagen);
	$("#hdIdPreguntaImagen").val(IdPregunta);
	$("#hdIdRespuestaImagen").val(IdRespuesta);
	 $("#DAdjunto").kendoWindow({
                        //width: "600px",
                        title: "Adjuntar Imagen",
                        visible: false,
                        modal:true
                       
                    }).data("kendoWindow").center().open();
	return false;

}