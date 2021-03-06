var RespuestasUsuario=[];
var idSource='', idDestination='', typeBefore='', idRespuestaSeleccionada=0;
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
		if(e) {
			CalificarFunc();
		}
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
			"calificacion": calificacion,
			"Respuestas":RespuestasUsuario
		};
		$.ajax({
			type: 'POST',
			url: "Examen/ActualizaFinExamen",
			dataType: 'json',
			data: parametros,
			success: function (msg) {

				if (msg.message == "OK") {
					if(aprobo == 0) {
						alertify.confirm('Usted ha reprobado el examen, desea repetirlo ?', function (e) {
							if (e) {
								ReiniciarExamen($("#hdIdUsuarioExamen").val());
							}
							else{
								Endining();
							}
						});
					}
					else {
						Endining();
					}

				}
				else alertify.alert(msg.Error);
			},
			error: function (x, status, error) {
				alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
			}

		});

	return false;
}
function ReiniciarExamen(IdUsuarioExamen) {
	var parametros = {
		"IdUsuarioExamen": IdUsuarioExamen
	};
	$.ajax({
		type: 'POST',
		url: 'UsuarioExamen/RepetirUsuarioExamen',
		dataType: 'json',
		data: parametros,
		success: function (msg) {
			if (msg.message == "OK") {
				window.location.href = $("#hdUrl").val();
			} else alertify.alert(msg.Error);


		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
	return false;
}
function GetCalificacion(){
	RespuestasUsuario=[];


	var numberOfCheckedRadio=0;
	$('input[type="radio"]:checked').each( function() {
		var radio = $(this)[0];
		numberOfCheckedRadio += parseFloat( radio.value);
		RespuestasUsuario.push($(radio).attr("idrespuesta"));

	});
	var numberOfCheckedCheckBox=0;
	$('input[type="checkbox"]:checked').each( function() {
		var checkbox = $(this)[0];
		numberOfCheckedCheckBox += parseFloat( checkbox.value);
		RespuestasUsuario.push($(checkbox).attr("idrespuesta"));
	});

	var numberOfDivs=0;
	$(".box2").each(function(){
		if($(this).attr('resputaContestada') == $(this).attr('respuestaCorrecta')){
			numberOfDivs += parseFloat( $(this).attr('value'));
			RespuestasUsuario.push($(this).attr('idrespuesta'));
		}
	});


	return (parseFloat(numberOfCheckedRadio + numberOfCheckedCheckBox + numberOfDivs) * 100) / parseFloat($("#hdCantidadPreguntas").val());

}
function Endining() {
	$("#divExamen").hide();
	$("#divInicio").hide();
	$("#divHeader").show();
	$("#btnresultado").show();
	$("#divResultado").show('slow');
	$("#ropebag").remove();
	$('#time').chrony('set', { minutes: 10000 });

	var parametros = {
		"idusuarioexamen": $("#hdIdUsuarioExamen").val()
	};
	$.ajax({
		type: 'POST',
		url: 'Examen/GetResultado',
		dataType: 'json',
		data: parametros,
		success: function (msg) {
			$("#pResultado").html(msg.data);
		},
		error: function (x, status, error) {
			alert("Ocurrio un Error: " + status + "nError: " + x.responseText);
		}

	});
	return false;

}
function PrintDiv() {
	var width =screen.width;
	var height =screen.height;


	var divToPrint = document.getElementById('divResultado');

	var popupWin = window.open('', '_blank', 'width='+width+',height='+height);
	popupWin.document.open();
	popupWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</html>');
	popupWin.document.close();
}
function unir(id, type, respuestaSeleccionada){

	if (typeBefore != type){
		if (type == 'source') {
			idSource=id;
			idRespuestaSeleccionada=respuestaSeleccionada;
			$(".s"+idSource).removeAttr("resputaContestada");
			$(".s"+idSource).attr("resputaContestada",0);


			$(".box2").removeClass("s"+idSource);
			idDestination ='';
			$("[mine]").each(function(){
				if($(this).attr('mine') == "svgs"+idSource){
					$(this).remove();
				}
			});
		}
		else idDestination = id;
		if(idSource !='' && idDestination !=''){


			var classes =$("#d"+idDestination).prop("classList");
			jQuery.each( classes, function( i, val ) {
				if(val != 'box2' && val != 'supplied')
				{
					$("#d"+idDestination).removeClass(val);
					$("[mine]").each(function(){
						if($(this).attr('mine') == "svg"+val){
							$(this).remove();
						}
					});
				}
			});
			$("#d"+idDestination).addClass("s"+idSource);
			$("#d"+idDestination).removeAttr("resputaContestada");
			$("#d"+idDestination).attr("resputaContestada",idRespuestaSeleccionada);
			$('.supply').bezier({strokeColor : 'red',});
			idSource='';
			idDestination='';
			idRespuestaSeleccionada=0;
			typeBefore='';

		}
	}


	return false;
}
