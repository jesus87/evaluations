<?php
class UsuarioExamen_model extends CI_Model
{

	public function __construct()
	{
		$this->load->database();
	}

	/**
	 * Add new User
	 * @param $data model of user
	 * @return string of query
	 */
	
	public function Agrega($data)
	{

		//return $data["IdUsuario"];
		$RClave=$this->ObtieneFolio($data['IdExamen'],$data["ClaveExamen"]);
		$RIds=$this->ObtieneIdsPregunstas($data['IdExamen']);
		//return $RClave;
		if($RClave["Respuesta"]=="OK"){
			$data = array(
				'Clave' => $RClave["Mensaje"],
				'Status' => 0,
				'Valido' => 1,
				'Examen_IdExamen' => $data['IdExamen'],
				'Usuario_Id' => $data['IdUsuario'],
				'Consecutivo' => $RClave["Consecutivo"],
				'IdsPreguntas' => $RIds['Mensaje']
			);
			
			$this->db->insert('usuarioexamen', $data);
			$error = $this->db->error();
			if ($error["message"] != "") {
				return $error["message"];
			} else {
				return "OK";
			}

		}else{
			return $RClave["Mensaje"];
		}

		
	}

	public function ObtieneFolio($IdExamen,$inicial){
		//$data="";
		$sql='select max(consecutivo) Consecutivo from usuarioexamen where Examen_IdExamen='.$IdExamen;
		//return $query;
		$Consecutivo=0;
		$query = $this->db->query($sql);
		foreach($query->result_array() AS $row) {
				$Consecutivo=$row["Consecutivo"];	
		}
			//$result=$error->result();
			
			//$row = $query->row();

			
			//$Consecutivo=$ret[0]->Consecutivo;

			if($Consecutivo==0){
				$Consecutivo=1;
			}else{
				$Consecutivo=$Consecutivo+1;
			}
			$Clave="";
			if(strlen($Consecutivo)==1){
				$Clave=$inicial."00000".$Consecutivo;
			}else if(strlen($Consecutivo)==2){
				$Clave=$inicial."0000".$Consecutivo;
			}else if(strlen($Consecutivo)==3){
				$Clave=$inicial."000".$Consecutivo;
			}else if(strlen($Consecutivo)==4){
				$Clave=$inicial."00".$Consecutivo;
			}else if(strlen($Consecutivo)==5){
				$Clave=$inicial."0".$Consecutivo;
			}else if(strlen($Consecutivo)==6){
				$Clave=$inicial.$Consecutivo;
			}

			$data["Respuesta"]="OK";
			$data["Mensaje"]= $Clave;
			$data["Consecutivo"]=$Consecutivo;
			
		
		return $data;
	}

	public function ObtieneIdsPregunstas($IdExamen){
		//$data="";
		$sql='select CantidadPreguntas from examen where IdExamen='.$IdExamen;
		//return $query;
		$CantidadPreguntas=0;
		$query = $this->db->query($sql);
		foreach($query->result_array() AS $row) {
				$CantidadPreguntas=$row["CantidadPreguntas"];	
		}

		$sql1="select group_concat(random.IdPregunta) IdsPreguntas from (
				SELECT p.IdPregunta FROM examen e 
				inner join pregunta p on(e.IdExamen=p.Examen_IdExamen)
				where e.IdExamen=".$IdExamen." and p.valido=1
				ORDER BY RAND()
				LIMIT ".$CantidadPreguntas."
				)random";
		//return $query;
		$IdsPreguntas="";
		$query1 = $this->db->query($sql1);
		foreach($query1->result_array() AS $row1) {
				$IdsPreguntas=$row1["IdsPreguntas"];	
		}
			


			$data["Respuesta"]="OK";
			$data["Mensaje"]= $IdsPreguntas;
			//$data["Consecutivo"]=$Consecutivo;
			
		
		return $data;
	}
	/**
	 * Update values of user
	 * @param $data is the values to update
	 * @param  $id is the key of the user
	 * @return string of query
	 */
	public function Actualiza($data, $id)
	{

		$this->db->where("Id", $id);
		$this->db->update('usuario', $data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}

	}

	/**
	 * Search all the users
	 * @return users
	 */
	public function UsuariosAgregados()
	{



		$query = $this->db->query("SELECT ue.Id,concat(u.Nombres,' ',u.PrimerApellido,' ',u.SegundoApellido) Nombre,e.Nombre Examen,ue.Calificacion,e.CalificacionAprobatoria,e.CantidadPreguntas,ue.Clave,ue.Status,case when isnull(Aprobado)=1 THEN 'Aprobado' else 'Reprobado' END Aprobado,ue.FechaHoraInicio,ue.FechaHoraFin,ue.TiempoTrascurrio,ue.FechaCrea FROM usuario u 
		inner join usuarioexamen ue on(u.Id=ue.Usuario_Id and ue.valido=1)
		inner join examen e on (ue.Examen_IdExamen=e.IdExamen and e.valido=1)");

		return $query->result();

	}


	public function UsuariosDisponibles($IdExamen)
	{



		$query = $this->db->query("SELECT u.Id,u.Nombres,u.PrimerApellido,u.SegundoApellido,u.Usuario,u.Password,u.Valido,u.Rol,u.Rfc 
			FROM usuario u 
			left join usuarioexamen ue on(u.Id=ue.Usuario_Id and ue.valido=1)
			left join examen e on (ue.Examen_IdExamen=e.IdExamen and e.valido=1)
			where ue.id is null
			and u.Rol='usuario'
			and (ue.Examen_IdExamen is null or ue.Examen_IdExamen=".($IdExamen==''?0:$IdExamen).")");

		return $query->result();

	}

	
	public function BuscaExamen()
	{


		$query = $this->db->get("examen");

		return $query->result();

	}

	/**
	 * Delete physical an user of database
	 * @param  int $id of the user
	 * @return  string message of result
	 */
	public function EliminarUsuarioExamen( $id)
	{
		$data = array(
				'Valido' => 0
			);
		$this->db->where("Id", $id);
		$this->db->update("usuarioexamen",$data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}

	}
}
