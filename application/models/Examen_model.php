<?php
class Examen_model extends CI_Model
{

	public function __construct()
	{
		$this->load->database();
	}



	/**
	 * Get Examen for user
	 * @param  int $id_user of the user
	 * @return  string message of result
	 */
	public function GetPreguntas( $idExamen,$IdsPreguntas)
	{
		// $this->db->select('* ')
		// 	->from('pregunta')
		// 	->where('Examen_IdExamen', $idExamen)
		// 	->where('Valido', 1)
		// 	->where_in('IdPregunta',$IdsPreguntas);
		// $query  =  $this->db->get();
		$sql='select * from pregunta where Examen_IdExamen='.$idExamen.' and Valido=1 and IdPregunta in ('.$IdsPreguntas.')';
		$query = $this->db->query($sql);

		$html ='<table id="tblExamen" style="display:none">';
		$contador=1;
		foreach ($query->result_array() as $row) {
			$imagen="";
			if ($row['Tipo'] == 3){
				$arrayIzquierda = $this->GetRespuestasTipoRelacion($row['IdPregunta']);
				if(empty($arrayIzquierda)) continue;
			}
			if($row['UrlImagen']!=""){
				$imagen=' <img src="../imagenes/'.$row['IdPregunta']."/".$row['UrlImagen'].'" width="40px" height="42" /> ';
			}

			$html.='<tr>';
				$html.='<td>'.$contador.'.- '.$row['Nombre'].$imagen.'</td>';
			$html.='</tr>';



			$html.='<tr>';
				$html.='<td>';
					$html.=$this->GetRespuestas($row['IdPregunta'],$row['Tipo']);
				$html.='</td>';
			$html.='</tr>';
			$html.='<tr>';
				$html.='<td></br></br></td>';
			$html.='</tr>';
			$contador = $contador + 1;
		}
		$html .='</table>';

		return $html;
	}
	public function GetRespuestas( $idPregunta, $tipo)
	{
		$this->db->select('* ')
			->from('respuesta')
			->where('Pregunta_IdPregunta', $idPregunta)
			->where('Valido', 1);
		$query  =  $this->db->get();
		$html='<table>';
		$arrayIzquierda = $this->GetRespuestasTipoRelacion($idPregunta);
		$contador=1;
		foreach ($query->result_array() as $row) {

			$imagen="";
			if($row['UrlImagen']!=""){
				$imagen=' <img src="../imagenes/'.$row['Pregunta_IdPregunta']."/".$row['IdRespuesta']."/".$row['UrlImagen'].'" width="40px" height="42" /> ';
			}

			$html.='<tr>';



			if ($tipo == 1) {
				$html .= '<td colspan="4"><input type="radio"  name="' . $row['Pregunta_IdPregunta'] . '" value="' . $row['Valor'] . '" idrespuesta="'.$row['IdRespuesta'].'">' .
					$row['Nombre'] . $imagen. '</td>';
			}
			else if($tipo == 2) {

							$html .= '<td colspan="4"><input type="checkbox"  name="' . $row['Pregunta_IdPregunta'].'_'.$contador . '" value="' . $row['Valor']  . '" idrespuesta="'.$row['IdRespuesta'].'">' .
							$row['Nombre'] . $imagen.'</td>';
			}
			else if($tipo == 3) {
				if (!empty($arrayIzquierda)) {
					$resputaMultiple = $arrayIzquierda[$contador - 1];
					$html .= '<td><div id="s' . $idPregunta . '_' . $contador . '" style="cursor: pointer;" onclick="return unir(\'' . $idPregunta . '_' . $contador . '\',\'source\',' . $resputaMultiple['IdRespuestaMultiple'] . ');"  class="supply box">' .
						' <img src="../imagenes/' . $row['Pregunta_IdPregunta'] . "/" . $resputaMultiple['UrlImagen'] . '" width="40px" height="42" /> '
						. '</div></td>';
				}

				$html.='<td width="200px"></td>';
				$html .= '<td colspan="2"><div '.' idrespuesta="'.$row['IdRespuesta'].'" value="'.$row['Valor'].'" resputaContestada="0" respuestaCorrecta="'.$row['Correcta'].'" id="d'.$idPregunta.'_'.$contador.'" style="cursor: pointer;" onclick="return unir(\''.$idPregunta.'_'.$contador.'\',\'destination\',0);"  class="box2 supplied">'.
					$row['Nombre']
					.'</div></td>';

			}
			$html.='</tr>';
			$contador= $contador + 1;
		}


		$html.='</table>';
		return $html;
	}
	public  function GetRespuestasTipoRelacion($idPregunta){
		$this->db->select('* ')
			->from('respuestamultiple')
			->where('IdPregunta', $idPregunta)
			->order_by('Orden', 'ASC');
		$query  =  $this->db->get();
		return $query->result_array();
	}
	public function ActualizaUsuarioExamen($data, $id)
	{

		$this->db->where("Id", $id);
		$this->db->update('usuarioexamen', $data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}

	}
	public function InsertaRespuestasUsuario($respuestas, $id)
	{
		$longitud=0;
		if (!empty( $respuestas ))
		{
			$longitud = count($respuestas);
		}
 		$mensajesdeerror="";

		//Recorro todos los elementos
		for($i=0; $i<$longitud; $i++){

			$data=array(
				"Respuesta_IdRespuesta" => $respuestas[$i],
				"UsuarioExamen_Id" => $id
			);
			$this->db->insert('evaluacion', $data);			
			$error = $this->db->error();
			if ($error["message"] != "") {
				$mensajesdeerror .= $error;
			}

		}

		
		if ($mensajesdeerror != "") {
			return $mensajesdeerror;
		} else {
			return "OK";
		}

	}
	public function GetExamenResultado( $id_examen)
	{

		// $sql='select examen.IdExamen as IdExamen,examen.Nombre as Nombre,
		// examen.Descripcion as Descripcion,examen.Tiempo as Tiempo,examen.CalificacionAprobatoria,
		//  examen.CantidadPreguntas,usuarioexamen.Clave,
		//  DATE_FORMAT(usuarioexamen.FechaHoraInicio,\'%Y-%m-%d %h:%i:%s\')  as FechaHoraInicio,
		//  DATE_FORMAT(usuarioexamen.FechaHoraFin,\'%Y-%m-%d %h:%i:%s\')  as    FechaHoraFin,
		//  usuarioexamen.Aprobado,usuarioexamen.Calificacion,
		//  usuario.Nombres,usuario.PrimerApellido,usuario.SegundoApellido,usuario.Rfc 
		//  from examen 
		//   join usuarioexamen on examen.IdExamen = usuarioexamen.Examen_IdExamen 
		//   join usuario on usuarioexamen.Usuario_Id = usuario.Id 
		//   where usuarioexamen.Id =' . $id_examen .' and usuarioexamen.Valido = 1';

		  $sql='select examen.IdExamen as IdExamen,examen.Nombre as Nombre,
		examen.Descripcion as Descripcion,examen.Tiempo as Tiempo,examen.CalificacionAprobatoria,
		 examen.CantidadPreguntas,usuarioexamen.Clave,
		 DATE_FORMAT(usuarioexamen.FechaHoraInicio,\'%Y-%m-%d %h:%i:%s\')  as FechaHoraInicio,
		 DATE_FORMAT(usuarioexamen.FechaHoraFin,\'%Y-%m-%d %h:%i:%s\')  as    FechaHoraFin,
		 usuarioexamen.Aprobado,usuarioexamen.Calificacion,
		 usuario.Nombres,usuario.PrimerApellido,usuario.SegundoApellido,usuario.Rfc, 
         ifnull(Incorrectas.Incorrectas,0) Incorrectas,ifnull(Correctas.Correctas,0) Correctas,
         examen.CantidadPreguntas-(ifnull(Incorrectas.Incorrectas,0) +ifnull(Correctas.Correctas,0)) SinContestar
		 from examen 
		  join usuarioexamen on (examen.IdExamen = usuarioexamen.Examen_IdExamen) 
		  join usuario on (usuarioexamen.Usuario_Id = usuario.Id )
          join ( 
          	 select ue.Id ,count(0) Incorrectas
             from examen e
             inner join usuarioexamen ue on e.IdExamen = ue.Examen_IdExamen 
             inner join evaluacion ev on (ue.Id=ev.UsuarioExamen_Id)
             inner join respuesta r on (ev.Respuesta_IdRespuesta=r.IdRespuesta and r.Valido=1)
             inner join usuario u on (ue.Usuario_Id = u.Id )
             where  ue.Valido = 1
             and ue.id=' . $id_examen .'
             and ifnull(r.Correcta,0)!=1
             group by ue.Id
          ) Incorrectas on (Incorrectas.Id=usuarioexamen.Id)
          join (
          	select ue.Id ,count(0) Correctas
             from examen e
             inner join usuarioexamen ue on e.IdExamen = ue.Examen_IdExamen 
             inner join evaluacion ev on (ue.Id=ev.UsuarioExamen_Id)
             inner join respuesta r on (ev.Respuesta_IdRespuesta=r.IdRespuesta and r.Valido=1)
             inner join usuario u on (ue.Usuario_Id = u.Id )
             where  ue.Valido = 1
             and ue.id=' . $id_examen .'
             and ifnull(r.Correcta,0)=1
             group by ue.Id
          )Correctas on (Correctas.Id=usuarioexamen.Id)
		  where usuarioexamen.Id =' . $id_examen .' and usuarioexamen.Valido = 1';

		$query = $this->db->query($sql);


		$html='<h1>No Cuenta Con Resultados </h1>';
		foreach ($query->result_array() as $row) {

			$html = '<h1>Resultados del Examen ' . $row['Clave']  . ' ' . $row['Nombre'] . '</h1>';
			$html .= '<table>';
			$html .= '<tr>';
			$html .= '<td>Descripción del Examen:</td>';
			$html .= '<td>'.  $row['Descripcion']   .'</td>';
			$html .= '</tr>';
			$html .='<tr><td colspan="2"><br/><br/></td></tr>';
			$html .= '<tr>';
			$html .= '<td>Evaluado:</td>';
			$html .= '<td>'.  $row['Nombres'] . ' ' . $row['PrimerApellido'] . ' '. $row['SegundoApellido']  .'</td>';
			$html .= '</tr>';
			$html .='<tr><td colspan="2"><br/><br/></td></tr>';
			$html .= '<tr>';
			$html .= '<td>RFC:</td>';
			$html .= '<td>'.  $row['Rfc']  .'</td>';
			$html .= '</tr>';
			$html .='<tr><td colspan="2"><br/><br/></td></tr>';
			$html .= '<tr>';
			$html .= '<td>Inicio del Examen:</td>';
			$html .= '<td>'.  $row['FechaHoraInicio']  .'</td>';
			$html .= '</tr>';
			$html .='<tr><td colspan="2"><br/><br/></td></tr>';
			$html .= '<tr>';
			$html .= '<td>Fin del Examen:</td>';
			$html .= '<td>'.  $row['FechaHoraFin']  .'</td>';
			$html .= '</tr>';
			$html .='<tr><td colspan="2"><br/><br/></td></tr>';
			$html .= '<tr>';
			$html .= '<td>Cantidad de Preguntas Contestadas Correctamente:</td>';
			$html .= '<td>'.$row['Correctas']."/". $row['CantidadPreguntas'].'</td>';
			$html .='</tr>';
			$html .= '<tr>';
			$html .= '<td>Cantidad de Preguntas Contestadas Incorrectamente:</td>';
			$html .= '<td>'.$row['Incorrectas']."/". $row['CantidadPreguntas'].'</td>';
			$html .='</tr>';
			$html .= '<tr>';
			$html .= '<td>Cantidad de Preguntas Contestadas No Contestadas:</td>';
			$html .= '<td>'.$row['SinContestar']."/". $row['CantidadPreguntas'].'</td>';
			$html .='</tr>';
			$html .='<tr><td colspan="2"><br/><br/></td></tr>';
			$html .= '<tr>';
			$html .= '<td>Calificación:</td>';
			$html .= '<td>' . round( $row['Calificacion'] ,2)  .' /100</td>';
			$html .= '</tr>';
			$html .='<tr><td colspan="2"><br/><br/></td></tr>';
			$html .= '<tr>';
			$html .= '<td colspan="2">'. ($row['Aprobado'] == 1 ? "Felicidades ": "Lo Sentimos ").'Usted Ha '.
				($row['Aprobado'] == 1 ? "Aprobado ": "Reprobado ")	.'</td>';
			$html .= '</tr>';
			$html .= '</table>';

		}
		return $html;
	}

}
