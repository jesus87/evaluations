$(document).ready(function () {


	if($("#hdTiempoAux").val() != $("#hdTiempo").val()){
		Init();
	}



});
function Init(){
	$("#btnComenzar").attr("disabled","disabled");
	$("#tblExamen").show('slow');
	$("#timer").show('slow');
	$("#btnCalificar").removeAttr("disabled");
	$("#btnCalificar").show();

	$('#time').chrony({
		minutes: $("#hdTiempo").val(),
		finish: function() {
			CalificarFunc();
		}
	});
}
function Comenzar(){

	var parametros = {
		"hdIdUsuarioExamen": $("#hdIdUsuarioExamen").val()

	};

	$.ajax({
		type: 'POST',
		url: "Examen/ActualizaComienzoExamen",
		dataType: 'json',
		data: parametros,
		success: function (msg) {

			if (msg.message == "OK") {
				Init();

			}
			else alertify.alert(msg.Error);
		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
	return false;
}
function Calificar() {


	alertify.confirm('Realmente Desea Finalizar el Examen ?', function (e) {

		CalificarFunc();
	});
	return false;
}
function CalificarFunc() {
		$("#btnCalificar").attr("disabled","disabled");
		var calificacion = GetCalificacion();
		var aprobatoria = $("#hdCalificacionAprobatoria").val();



		var parametros = {
			"hdIdUsuarioExamen": $("#hdIdUsuarioExamen").val(),
			"aprobado": (calificacion >= aprobatoria ? 1: 0)
		};
		$.ajax({
			type: 'POST',
			url: "Examen/ActualizaFinExamen",
			dataType: 'json',
			data: parametros,
			success: function (msg) {

				if (msg.message == "OK") {
					Endining(calificacion,aprobatoria);

				}
				else alertify.alert(msg.Error);
			},
			error: function (x, status, error) {
				alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
			}

		});

	return false;
}
function GetCalificacion(){


	var numberOfCheckedRadio=0;
	$('input[type="radio"]:checked').each( function() {
		var radio = $(this)[0];
		numberOfCheckedRadio += parseFloat( radio.value);

	});
	var numberOfCheckedCheckBox=0;
	$('input[type="checkbox"]:checked').each( function() {
		var checkbox = $(this)[0];
		numberOfCheckedCheckBox += parseFloat( checkbox.value);

	});


	return parseFloat(numberOfCheckedRadio + numberOfCheckedCheckBox);

}
function Endining(calificacion,aprobatoria){
	$("#divExamen").hide();
	$("#divInicio").hide();

	$("#divResultado").show('slow');
	$("#pResultado").text("Su Calificación Ha Sido De "+ calificacion + " / 100");
	return false;
}
