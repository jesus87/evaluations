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
	$("#txtMail").val("");
	$("#txtNombre").val("");
	$("#txtApellido").val("");
	$('#txtValido').prop('checked', true);
	$("#txtPassword").val("");


}

function ValidaUsuario() {

	if ($("#txtUsuario").val() == "") {
		alertify.alert("Es Necesario Ingresar El Nombre de Usuario");
		return false;
	}

	if ($("#hdIdUsuario").val() == "0" && $("#txtPassword").val() == "") {
		alertify.alert("Es Necesario Ingresar El Password de Usuario");
		return false;
	}
	if ($("#txtMail").val() == "") {
		alertify.alert("Es Necesario Ingresar El Mail de Usuario");
		return false;
	}
	if ($("#txtNombre").val() == "") {
		alertify.alert("Es Necesario Ingresar El Nombre del Empleado");
		return false;
	}
	if ($("#txtApellido").val() == "") {
		alertify.alert("Es Necesario Ingresar El Apellido del Empleado");
		return false;
	}


	GuardaUsuario();

	return false;
}

function GuardaUsuario() {

	var _id = $("#hdIdUsuario").val();
	var _us = $("#txtUsuario").val();
	var _mail = $("#txtMail").val();
	var _nombre = $("#txtNombre").val();
	var _apellido = $("#txtApellido").val();
	var _valido = ($('#txtValido').prop('checked') ? "1" : "0");
	var _password = $("#txtPassword").val();


	var parametros = {
		"hdIdUsuario": _id,
		"txtUsuario": _us,
		"txtMail": _mail,
		"txtNombre": _nombre,
		"txtApellido": _apellido,
		"txtValido": _valido,
		"txtPassword": _password
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
						var Mail = dataItem.Mail;
						var Nombre = dataItem.Nombre;
						var Apellido = dataItem.Apellido;

						alertify.confirm('Realmente quiere Editar La Partida ?', function (e) {
							if (e) {
								NuevoUsuario();
								$("#hdIdUsuario").val(id);
								$("#txtUsuario").val(Usuario);
								$("#txtMail").val(Mail);
								$("#txtNombre").val(Nombre);
								$("#txtApellido").val(Apellido);
								if (Valido == 1) $('#txtValido').prop('checked', true);
								else $('#txtValido').prop('checked', false);

							}
						});

					}
				}], title: "&nbsp;", width: "100px"
			},
			{
				command: [{
					name: "Delete", imageClass: "k-icon k-i-close", click: function (e) {
						e.preventDefault();
						var dataItem = this.dataItem($(e.target).closest("tr"));
						var id = dataItem.Id;
						var parametros = {
							"Id": id
						};


						alertify.confirm('Realmente quiere Eliminar La Partida ?', function (e) {
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
				field: "Mail", width: 100,
				title: "Mail", filterable: {
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
				field: "Apellido", width: 100,
				title: "Apellido", filterable: {
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
						Mail: {type: "string"},
						Nombre: {type: "string"},
						Apellido: {type: "string"}
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
