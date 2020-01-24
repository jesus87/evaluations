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

		$contador=1;
		foreach ($query->result_array() as $row) {

			$imagen="";
			if($row['UrlImagen']!=""){
				$imagen=' <img src="../imagenes/'.$row['Pregunta_IdPregunta']."/".$row['IdRespuesta']."/".$row['UrlImagen'].'" width="40px" height="42" /> ';
			}

			$html.='<tr>';



			if ($tipo == 1) {
				$html .= '<td><input type="radio"  name="' . $row['Pregunta_IdPregunta'] . '" value="' . $row['Valor'] . '">' .
					$row['Nombre'] . $imagen. '</td>';
			}
			else if($tipo == 2) {

							$html .= '<td><input type="checkbox"  name="' . $row['Pregunta_IdPregunta'].'_'.$contador . '" value="' . $row['Valor']  . '">' .
							$row['Nombre'] . $imagen.'</td>';
			}

			$html.='</tr>';
			$contador= $contador + 1;
		}


		$html.='</table>';
		return $html;
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
	public function GetExamenResultado( $id_examen)
	{

		$sql='select examen.IdExamen as IdExamen,examen.Nombre as Nombre,
		examen.Descripcion as Descripcion,examen.Tiempo as Tiempo,examen.CalificacionAprobatoria,
		 examen.CantidadPreguntas,usuarioexamen.Clave,
		 DATE_FORMAT(usuarioexamen.FechaHoraInicio,\'%Y-%m-%d %h:%i:%s\')  as FechaHoraInicio,
		 DATE_FORMAT(usuarioexamen.FechaHoraFin,\'%Y-%m-%d %h:%i:%s\')  as    FechaHoraFin,
		 usuarioexamen.Aprobado,usuarioexamen.Calificacion,
		 usuario.Nombres,usuario.PrimerApellido,usuario.SegundoApellido,usuario.Rfc 
		 from examen 
		  join usuarioexamen on examen.IdExamen = usuarioexamen.Examen_IdExamen 
		  join usuario on usuarioexamen.Usuario_Id = usuario.Id 
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
			$html .= '<td>Cantidad de Preguntas:</td>';
			$html .= '<td>'. $row['CantidadPreguntas'].'</td>';
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
