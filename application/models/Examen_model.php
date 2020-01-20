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
	public function GetPreguntas( $idExamen)
	{
		$this->db->select('* ')
			->from('pregunta')
			->where('Examen_IdExamen', $idExamen);
		$query  =  $this->db->get();
		$html ='<table id="tblExamen" style="display:none">';
		$contador=1;
		foreach ($query->result_array() as $row) {
			$html.='<tr>';
				$html.='<td>'.$contador.'.- '.$row['Nombre']. '</td>';
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

			$html.='<tr>';



			if ($tipo == 1) {
				$html .= '<td><input type="radio"  name="' . $row['Pregunta_IdPregunta'] . '" value="' . $row['Valor'] . '">' .
					$row['Nombre'] . '</td>';
			}
			else if($tipo == 2) {

							$html .= '<td><input type="checkbox"  name="' . $row['Pregunta_IdPregunta'].'_'.$contador . '" value="' . $row['Valor']  . '">' .
							$row['Nombre'] . '</td>';
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
