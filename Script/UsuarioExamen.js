$(document).ready(function () {

	gvUsuarioExamen();
	gvUsuario();
	gvUsuarioAgregados();
});


function AgregarUsuario() {

	var entityGrid = jQuery("#tblExamenes").data("kendoGrid");
    var selectedItem = entityGrid.dataItem(entityGrid.select());

    if (selectedItem != undefined) {


        var Id = selectedItem.IdExamen;
        var Clave = selectedItem.Clave;
        //var folio = selectedItem.Folio;
        $("#IdExamen").val(Id);
        $("#ClaveExamen").val(Clave);
       	//LimpiaUsuario();
       	$("#tblUsuario").data("kendoGrid").dataSource.read();
		jQuery('#myModal').modal('show');

    }
    else {

        alertify.alert("Seleccione un Examen Para Poder Agregar Usuarios.");


    }

    
	return false;
}

function AbreModalusuariosAgregados(){

	jQuery('#myModal1').modal('show');
	$("#tblUsuariosAgregados").data("kendoGrid").dataSource.read();

}

function CancelarUsuario() {

	jQuery('#myModal').modal('hide');

	return false;
}

function LimpiaUsuario() {

	$("#hdIdUsuario").val("0");
	$("#txtUsuario").val("");
	$("#txtPassword").val("");
	$("#txtNombre").val("");
	$("#txtApellido").val("");
	$("#txtSegundoApellido").val("");
	$("#txtRfc").val("");
	$("#txtRol").val("usuario");
	$('#txtValido').prop('checked', true);



}

function ValidaUsuario() {

	if ($("#txtUsuario").val() == "" ) {
		alertify.alert("Es Necesario Ingresar El Nombre de Usuario");
		return false;
	}
	if ( $("#txtUsuario").val().length < 5 ) {
		alertify.alert("El Nombre de Usuario debe contener al menos 5 caracteres");
		return false;
	}

	if ($("#hdIdUsuario").val() == "0" && $("#txtPassword").val() == "") {
		alertify.alert("Es Necesario Ingresar El Password de Usuario");
		return false;
	}
	if ($("#txtPassword").val() != "" && $("#txtPassword").val().length < 5 ) {
		alertify.alert("El Password debe contener al menos 5 caracteres");
		return false;
	}
	if ($("#txtNombre").val() == "") {
		alertify.alert("Es Necesario Ingresar El Nombre");
		return false;
	}
	if ($("#txtApellido").val() == "") {
		alertify.alert("Es Necesario Ingresar El  Primer Apellido");
		return false;
	}


	GuardaUsuario();

	return false;
}

function GuardaUsuario() {

	var _id = $("#hdIdUsuario").val();
	var _us = $("#txtUsuario").val();
	var _password = $("#txtPassword").val();
	var _nombre = $("#txtNombre").val();
	var _apellido = $("#txtApellido").val();
	var _segundoApellido = $("#txtSegundoApellido").val();
	var _rfc = $("#txtRfc").val();
	var _rol = $("#txtRol").val();
	var _valido = ($('#txtValido').prop('checked') ? "1" : "0");



	var parametros = {
		"hdIdUsuario": _id,
		"txtUsuario": _us,
		"txtPassword": _password,
		"txtNombre": _nombre,
		"txtApellido": _apellido,
		"txtSegundoApellido": _segundoApellido,
		"txtRfc": _rfc,
		"txtRol": _rol,
		"txtValido": _valido,

	};

	$.ajax({
		type: 'POST',
		url: "Usuario/Guarda",
		dataType: 'json',
		data: parametros,

		success: function (msg) {

			if (msg.message == "OK") {
				$("#tblUsuario").data("kendoGrid").dataSource.read();
				CancelarUsuario();
			}
			else alertify.alert(msg.Error);
		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
	return false;
}

function gvUsuarioExamen() {


	var grid = $('#tblExamenes').kendoGrid({
		columns: [

			{
				command: [{
					name: "Evaluados", imageClass: "k-icon k-i-close", click: function (e) {
						e.preventDefault();
						var dataItem = this.dataItem($(e.target).closest("tr"));
						var id = dataItem.Id;
						var Usuario = dataItem.Usuario;
						var Nombre =dataItem.Nombre;
						
						$("#IdExamenUA").val(id);

						alertify.confirm('Desea ver los usuarios agregados al examen: '+Nombre, function (e) {
							if (e) {
																		
								AbreModalusuariosAgregados();

							}
						});

					}
				}], title: "&nbsp;", width: "100px"
			},

			{
				field: "IdExamen", width: 100,
				title: "#", filterable: {
					cell: {
						operator: "contains"
					}
				}
			},
			{
				field: "Nombre", width: 100,
				title: "Nombre", filterable: {
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

			},
			{
				field: "Clave", width: 100,
				title: "Clave", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Tiempo", width: 100,
				title: "Tiempo", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "CalificacionAprobatoria", width: 100,
				title: "Calificacion Minima", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "CantidadPreguntas", width: 100,
				title: "No.Preguntas", filterable: {
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
						CantidadPreguntas: {type: "string"}
					}
				}
			},
			transport: {
				read: function (options) {
					$.ajax({
						type: 'POST',
						url: 'UsuarioExamen/BuscaExamen',
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

function gvUsuario() {


	var grid = $('#tblUsuario').kendoGrid({
		columns: [
			
			{
				command: [{
					name: "Agregar", imageClass: "k-icon k-i-close", click: function (e) {
						e.preventDefault();
						var dataItem = this.dataItem($(e.target).closest("tr"));
						var IdUsuario = dataItem.Id;
						var Nombre = dataItem.Nombres;
						var IdExamen = $("#IdExamen").val();
						var ClaveExamen = $("#ClaveExamen").val();
						var parametros = {
							"IdUsuario": IdUsuario,
							"IdExamen":IdExamen,
							"ClaveExamen":ClaveExamen
						};


						alertify.confirm('Realmente quiere Agregar el usuario '+ Nombre +' ?', function (e) {
							if (e) {
								$.ajax({
									type: 'POST',
									url: 'UsuarioExamen/Agregar',
									dataType: 'json',
									data: parametros,
									success: function (msg) {
										if (msg.message == "OK") {
											$("#tblUsuario").data("kendoGrid").dataSource.read();

										}
										else alertify.alert(msg.Error);


									},
									error: function (x, status, error) {
										alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
									}

								});

							}
						});

					}
				}], title: "&nbsp;", width: "150px"
			},

			{
				field: "Nombres", width: 150,
				title: "Nombres", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "PrimerApellido", width: 100,
				title: "P.Apellido", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "SegundoApellido", width: 100,
				title: "S.Apellido", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Rfc", width: 100,
				title: "RFC", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Rol", width: 100,
				title: "Rol", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Valido", width: 100,
				title: "Valido", filterable: {
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
						Id: {type: "string"},
						Usuario: {type: "string"},
						Password: {type: "string"},
						Valido: {type: "string"},
						Rfc: {type: "string"},
						Nombres: {type: "string"},
						PrimerApellido: {type: "string"},
						SegundoApellido: {type: "string"},
						Rol: {type: "string"}
					}
				}
			},
			transport: {
				read: function (options) {
					var parametros = {
							"IdExamen": ($("#IdExamen").val()==''?0:$("#IdExamen").val())							
						};
					
					$.ajax({
						type: 'POST',
						url: 'UsuarioExamen/UsuariosDisponibles',
						dataType: 'json',
						data: parametros,
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
		resizable: true,
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
function gvUsuarioAgregados() {


	var grid = $('#tblUsuariosAgregados').kendoGrid({
		columns: [

			{
				command: [{
					name: "Eliminar", imageClass: "k-icon k-i-close", click: function (e) {
						e.preventDefault();
						var dataItem = this.dataItem($(e.target).closest("tr"));
						var IdUsuarioExamen = dataItem.Id;
						var Nombre = dataItem.Nombre;
						//var IdExamen = $("#IdUsuarioExamen").val();
						var parametros = {
							"IdUsuarioExamen": IdUsuarioExamen
						};


						alertify.confirm('Realmente quiere Eliminar el usuario '+ Nombre +' del examen ?', function (e) {
							if (e) {
								$.ajax({
									type: 'POST',
									url: 'UsuarioExamen/EliminarUsuarioExamen',
									dataType: 'json',
									data: parametros,
									success: function (msg) {
										if (msg.message == "OK") {
											$("#tblUsuariosAgregados").data("kendoGrid").dataSource.read();

										}
										else alertify.alert(msg.Error);


									},
									error: function (x, status, error) {
										alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
									}

								});

							}
						});

					}
				}], title: "&nbsp;", width: "150px"
			},
			{
				command: [{
					name: "Imprimir Calificacion", imageClass: "k-icon k-i-close", click: function (e) {
						e.preventDefault();
						var dataItem = this.dataItem($(e.target).closest("tr"));
						var IdUsuarioExamen = dataItem.Id;
						var Nombre = dataItem.Nombre;

						PrintDiv(IdUsuarioExamen);



					}
				}], title: "&nbsp;", width: "150px"
			},
			{
				field: "Nombre", width: 150,
				title: "Evaluado", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Examen", width: 100,
				title: "Examen", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},

			{
				field: "Clave", width: 100,
				title: "Folio Examen", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Status", width: 100,
				title: "Status", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Aprobado", width: 100,
				title: "Resultado", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "Calificacion", width: 100,
				title: "Calificacion", filterable: {
					cell: {
						operator: "contains"
					}
				}

			}
			,
			{
				field: "FechaHoraInicio", width: 100,
				title: "Fecha Inicio", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},
			{
				field: "FechaHoraFin", width: 100,
				title: "Fecha Fin", filterable: {
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
						Id: {type: "string"},
						Nombre: {type: "string"},
						Examen: {type: "string"},
						Tiempo: {type: "string"},
						CalificacionAprobatoria: {type: "string"},
						CantidadPreguntas: {type: "string"},
						Clave: {type: "string"},
						Status: {type: "string"},
						Aprovado: {type: "string"},
						FechaHoraInicio: {type: "string"},
						FechaHoraFin: {type: "string"},
						TiempoTranscurrido: {type: "string"},
						FechaHoraFin: {type: "string"}
					}
				}
			},
			transport: {
				read: function (options) {
					var parametros = {
						"IdExamen": ($("#IdExamenUA").val()==''?0:$("#IdExamenUA").val())

					};
					$.ajax({
						type: 'POST',
						url: 'UsuarioExamen/UsuariosAgregados',
						dataType: 'json',
						data: parametros,
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
		resizable: true,
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
function PrintDiv(id) {
	var parametros = {
		"idusuarioexamen": id
	};
	$.ajax({
		type: 'POST',
		url: 'Examen/GetResultado',
		dataType: 'json',
		data: parametros,
		success: function (msg) {

			var popupWin = window.open('', '_blank', 'width=300,height=300');
			popupWin.document.open();
			popupWin.document.write('<html><body onload="window.print()">' + msg.data + '</html>');
			popupWin.document.close();
		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
	return false;
}
