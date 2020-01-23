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
		var aprobo =(calificacion >= aprobatoria ? 1: 0);


		var parametros = {
			"hdIdUsuarioExamen": $("#hdIdUsuarioExamen").val(),
			"aprobado": aprobo,
			"calificacion": calificacion
		};
		$.ajax({
			type: 'POST',
			url: "Examen/ActualizaFinExamen",
			dataType: 'json',
			data: parametros,
			success: function (msg) {

				if (msg.message == "OK") {
					Endining(calificacion,aprobatoria,aprobo);

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


	return (parseFloat(numberOfCheckedRadio + numberOfCheckedCheckBox) * 100) / parseFloat($("#hdCantidadPreguntas").val());

}
function Endining(calificacion,aprobatoria,aprobo){
	$("#divExamen").hide();
	$("#divInicio").hide();

	$("#divResultado").show('slow');

	var mensaje ="Felicidades";
	if (aprobo < 1) mensaje ="Lo Sentimos";
	$("#pResultado").html(mensaje+ " Su Calificación Ha Sido De "+ calificacion + " / 100"+"<br/> La Calificacion minima aprobatoria es de "+aprobatoria);
	return false;
}
