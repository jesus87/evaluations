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
			->where('Pregunta_IdPregunta', $idPregunta);
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

}
