$(document).ready(function () {

	gvUsuario();


});


function NuevoUsuario() {
	LimpiaUsuario();
	jQuery('#myModal').modal('show');

	return false;
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

function gvUsuario() {


	var grid = $('#tblUsuario').kendoGrid({
		columns: [
			{
				command: [{
					name: "Edit", imageClass: "k-icon k-i-pencil", click: function (e) {
						e.preventDefault();
						var dataItem = this.dataItem($(e.target).closest("tr"));
						var id = dataItem.Id;
						var Usuario = dataItem.Usuario;
						var Valido = dataItem.Valido;
						var Rol = dataItem.Rol;
						var Rfc = dataItem.Rfc;
						var Nombre = dataItem.Nombres;
						var Apellido = dataItem.PrimerApellido;
						var SegundoApellido = dataItem.SegundoApellido;
						alertify.confirm('Realmente quiere Editar El Usuario '+ Usuario +' ?', function (e) {
							if (e) {
								NuevoUsuario();
								$("#hdIdUsuario").val(id);
								$("#txtUsuario").val(Usuario);
								$("#txtSegundoApellido").val(SegundoApellido);
								$("#txtNombre").val(Nombre);
								$("#txtApellido").val(Apellido);
								$("#txtRfc").val(Rfc);
								$("#txtRol").val(Rol);
								if (Valido == 1) $('#txtValido').prop('checked', true);
								else $('#txtValido').prop('checked', false);

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
						var id = dataItem.Id;
						var Usuario = dataItem.Usuario;
						var parametros = {
							"Id": id
						};


						alertify.confirm('Realmente quiere Eliminar El Usuario '+ Usuario +' ?', function (e) {
							if (e) {
								$.ajax({
									type: 'POST',
									url: 'Usuario/Elimina',
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
				}], title: "&nbsp;", width: "100px"
			},

			{
				field: "Id", width: 100,
				title: "#", filterable: {
					cell: {
						operator: "contains"
					}
				}
			},
			{
				field: "Usuario", width: 100,
				title: "Usuario", filterable: {
					cell: {
						operator: "contains"
					}
				}

			},

			{
				field: "Nombres", width: 100,
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
					$.ajax({
						type: 'POST',
						url: 'Usuario/Busca',
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
		height: 300,
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
