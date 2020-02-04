<?php
class CreaExamen_model extends CI_Model
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

		$this->db->insert('examen', $data);
		$id=$this->db->insert_id();

		$error = $this->db->error();

		

		$resp="";
		if ($error["message"] != "") {
			$resp=$error["message"];
		} else {
			$resp="OK";
		}
		$respuesta=array(
			"Respuesta" => $resp,
			"Id"=> $id
		);
		return $respuesta;
	}

	public function Actualiza($data,$id)
	{

		$this->db->where("IdExamen", $id);
		$this->db->update('examen', $data);

		$error = $this->db->error();
		$resp="";
		if ($error["message"] != "") {
			$resp=$error["message"];
		} else {
			$resp="OK";
		}
		$respuesta=array(
			"Respuesta" => $resp,
			"Id"=> $id
		);
		return $respuesta;
	}

	public function AgregaPregunta($data)
	{

		$this->db->insert('pregunta', $data);


		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}
	}
	
	/**
	 * Update values of user
	 * @param $data is the values to update
	 * @param  $id is the key of the user
	 * @return string of query
	 */
	public function ActualizaPregunta($data, $id)
	{

		$this->db->where("IdPregunta", $id);
		$this->db->update('pregunta', $data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}

	}

	public function AgregaRespuesta($data)
	{	
		if($data["Correcta"]==1){
			$this->PonEnCerosRespuestaCorrecta($data["Pregunta_IdPregunta"]);
		}

		$this->db->insert('respuesta', $data);


		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {

			return "OK";
		}
	}

	
	public function ActualizaRespuesta($data, $id)
	{
		if($data["Correcta"]==1){
			$this->PonEnCerosRespuestaCorrecta($data["Pregunta_IdPregunta"]);
		}

		$this->db->where("IdRespuesta", $id);
		$this->db->update('respuesta', $data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}

	}

	public function PonEnCerosRespuestaCorrecta($IdPregunta){
		$data=array(
			"Correcta"=>0
		);
		$this->db->where("Pregunta_IdPregunta", $IdPregunta);
		$this->db->update('respuesta', $data);
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
	public function Busca()
	{


		$query = $this->db->query('SELECT e.IdExamen,e.Nombre,e.Descripcion,e.Clave,e.Tiempo,e.CalificacionAprobatoria,e.CantidadPreguntas,concat(u.Nombres,\' \',u.PrimerApellido) Usuario FROM examen e inner join usuario u on (e.Usuario_Id=u.Id) where e.Valido=1');
		//$query = $this->db->get();
		return $query->result();
	}

	public function BuscaPreguntasYRespuestas($IdExamen){
		$query = $this->db->query('SELECT IdPregunta,Tipo,Nombre,round(Valor,2)Valor,UrlImagen FROM pregunta  where Valido=1 and Examen_IdExamen='.$IdExamen);
		//$query = $this->db->get();

		$contador=0;
		//$contador1=0;
		$html="";
		$contador3=0;
		foreach ($query->result_array() as $row) {
			$contador=$row['IdPregunta'];
			$contador3++;
			$RespuestaR=$this->BuscaRespuesta($row['IdPregunta'],$row['Tipo']);
			// if($contador1<=$RespuestaR["Contador"]){
			// 	$contador1=$RespuestaR["Contador"];
			// }
			
			$imagen="";
			if($row['UrlImagen']!=""){
				$imagen=' <img src="../imagenes/'.$row['IdPregunta']."/".$row['UrlImagen'].'" width="90%" height="90%" /> ';
			}
			$Respuesta=$RespuestaR["Html"];
			$html.='<div class="col-md-12 row" id="Pregunta'.$row['IdPregunta'].'" >'.
									'<div class="col-md-12 row">'.
									'<div class="col-md-5"> '.
											'<label>'.$contador3.'.-</label>'.
											//'<input type="hidden" id="hdTipoPreguntaRespuesta'.$row['IdPregunta'].'" value="'.$row['Tipo'].'">'.             
											'<label >'.$row['Nombre'].'</label> '.
											
									'</div>'.
									'<div class="col-md-2">'.
											$imagen.									
									'</div>'.
									'<div class="col-md-2 row"> '.
										'<button class="btn btn-warning" onclick="return AdjuntarImagen(0,10,'.$row['IdPregunta'].',0);">AI</button>'.    
										'<button class="btn btn-success" onclick="return EditarPregunta('.$row['IdPregunta'].',\''.$row['Nombre'].'\','.$row['Tipo'].','.$row['Valor'].');">MP</button>'.
										'<button class="btn btn-danger" onclick="return EliminarPregunta('.$row['IdPregunta'].','.$row['Tipo'].');">EP</button>'.
									'</div>'.
									'<div class="col-md-3">'.                
											'<button class="btn btn-primary" onclick="return AddRespuesta('.$row['IdPregunta'].','.$row['Tipo'].');">+Respuesta</button>'.
											
									'</div>'.
									'</div><br/><br/>'.
									$Respuesta
									.
								'</div> <br/><br/>';
		}

		$maximo=$this->ObtieneMaximo($IdExamen);

		$data = array(
                  'Respuesta' =>"OK",   
                  'Html' =>$html,               
                  'Cont' => $contador,
                  'Cont1' => $maximo["Consecutivo"]
          );
		
		return $data;
	}

	public function ObtieneMaximo($IdExamen){
		//$data="";
		$sql="SELECT MAX(r.IdRespuesta) Maximo FROM examen e inner join pregunta p on(e.IdExamen=p.Examen_IdExamen)	inner join respuesta r on (p.IdPregunta=r.Pregunta_IdPregunta)where e.IdExamen=".$IdExamen;
		//return $query;
		$Consecutivo=0;
		$query = $this->db->query($sql);
		foreach($query->result_array() AS $row) {
				$Consecutivo=$row["Maximo"];	
		}
		
		$data["Respuesta"]="OK";
		$data["Consecutivo"]=$Consecutivo;
			
		
		return $data;
	}

	public function BuscaRespuesta($IdPregunta,$Tipo){
		//$query = $this->db->query('SELECT IdRespuesta,Nombre,Correcta,round(Valor,2) Valor,UrlImagen FROM respuesta  where Valido=1 and Pregunta_IdPregunta='.$IdPregunta );
		$query = $this->db->query("SELECT r.IdRespuesta,r.Nombre,r.Correcta,round(r.Valor,2) Valor,r.UrlImagen,0 IdRespuestaMultiple,'' UrlImagenRelaciona
			FROM pregunta p 
			inner JOIN respuesta r on(p.IdPregunta=r.Pregunta_IdPregunta)
			where p.Valido=1 
			and r.Valido=1
			and p.Tipo!=3
			and p.IdPregunta=".$IdPregunta."

			union all

			SELECT r.IdRespuesta,r.Nombre,r.Correcta,round(r.Valor,2) Valor,r.UrlImagen,ifnull(rm.IdRespuestaMultiple,0) IdRespuestaMultiple,ifnull(rm.UrlImagen,'')UrlImagenRelaciona
			FROM pregunta p 
			inner JOIN respuesta r on(p.IdPregunta=r.Pregunta_IdPregunta)
			left join respuestamultiple rm on(r.Correcta=rm.IdRespuestaMultiple)
			where p.Valido=1 
			and r.Valido=1
			and p.Tipo=3
			and p.IdPregunta=".$IdPregunta );

		//$query = $this->db->get();

		$contador=0;
		$htmlResp="";
		foreach ($query->result_array() as $row) {
			$contador++;

			$checked="";
			if($row['Correcta']==1){
				$checked='checked="checked"';
			}

			if($Tipo==1){
				$imagen="";
				if($row['UrlImagen']!=""){
					$imagen=' <img src="../Imagenes/'.$IdPregunta.'/'.$row['IdRespuesta'].'/'.$row['UrlImagen'].'" width="90%" height="90%" /> ';
				}
				$htmlResp.='<div class="col-md-12 row" id="divPreguntaRespuesta'.$row['IdRespuesta'].'" >'.
											'&nbsp;'.
											'<div class="col-md-6 row"> '.								'<div class="col-md-8">'.	
													'<input type="radio" '.$checked.' name="rdbPR'.$IdPregunta.'" id="rdbPR'.$row['IdRespuesta'].'"><textarea id="txtRespuesta'.$row['IdRespuesta'].'"  rows="6" style="width:90%;">'.$row['Nombre'].'</textarea>'.	
													'</div>'.	
													'<div class="col-md-4">'.	
													'<label for="txtValor'.$row['IdRespuesta'].'">Valor</label><input type="text" id="txtValor'.$row['IdRespuesta'].'" value="'.$row['Valor'].'" style="width:90%;" />'.	
													'</div>'.
											'</div>'.
											'<div class="col-md-5">'.
											$imagen.									
											'</div>'.
											'<div class="col-md-1">'.
													'<button class="btn btn-warning" onclick="return AdjuntarImagen(0,20,'.$IdPregunta.','.$row['IdRespuesta'].');">AI</button>'.                    
													'<button class="btn btn-success" onclick="return GuardaRespuesta('.$row['IdRespuesta'].',0,'.$IdPregunta.','.$Tipo.');">GR</button>'.
													'<button class="btn btn-danger" onclick="return EliminaRespuesta('.$row['IdRespuesta'].',0,'.$IdPregunta.','.$Tipo.');">ER</button>'.
											'</div>'.
										'</div> <br/><br/>';
			}else if($Tipo==2){
				$imagen="";
				if($row['UrlImagen']!=""){
					$imagen=' <img src="../Imagenes/'.$IdPregunta.'/'.$row['IdRespuesta'].'/'.$row['UrlImagen'].'" width="90%" height="90%" /> ';
				}
				$htmlResp.='<div class="col-md-12 row" id="divPreguntaRespuesta'.$row['IdRespuesta'].'" >'.
											'&nbsp;'.
											'<div class="col-md-6 row"> '.								'<div class="col-md-8">'.		
													'<input type="checkbox" '.$checked.' name="chkPR'.$IdPregunta.'" id="chkPR'.$row['IdRespuesta'].'"><textarea id="txtRespuesta'.$row['IdRespuesta'].'" rows="6" style="width:90%;">'.$row['Nombre'].'</textarea>'.
													'</div>'.
													'<div class="col-md-4">'.	
													'<label for="txtValor'.$row['IdRespuesta'].'">Valor</label><input type="text" id="txtValor'.$row['IdRespuesta'].'" value="'.$row['Valor'].'" style="width:90%;" />'.	
													'</div>'.		
											'</div>'.
											'<div class="col-md-5">'.
											$imagen.									
											'</div>'.
											'<div class="col-md-1">'. 
													'<button class="btn btn-warning" onclick="return AdjuntarImagen(0,20,'.$IdPregunta.','.$row['IdRespuesta'].');">AI</button>'.                    
													'<button class="btn btn-success" onclick="return GuardaRespuesta('.$row['IdRespuesta'].',0,'.$IdPregunta.','.$Tipo.');">GR</button>'.
													'<button class="btn btn-danger" onclick="return EliminaRespuesta('.$row['IdRespuesta'].',0,'.$IdPregunta.','.$Tipo.');">ER</button>'.
											'</div>'.
										'</div> <br/><br/>';
			}else if($Tipo==3){
				$imagen="";
				if($row['UrlImagenRelaciona']!=""){
					$imagen=' <img src="../'.$row['UrlImagenRelaciona'].'" width="90%" height="90%" /> ';
				}
				$htmlResp.='<div class="col-md-12 row" id="divPreguntaRespuesta'.$row['IdRespuesta'].'" >'.
											'&nbsp;'.
											'<div class="col-md-6 row"> '.								
													'<div class="col-md-8">'.		
													'<textarea id="txtRespuesta'.$row['IdRespuesta'].'" rows="6" style="width:90%;">'.$row['Nombre'].'</textarea>'.
													'</div>'.
													'<div class="col-md-4">'.	
													'<label for="txtValor'.$row['IdRespuesta'].'">Valor</label><input type="text" id="txtValor'.$row['IdRespuesta'].'" value="'.$row['Valor'].'" style="width:90%;" />'.	
													'</div>'.		
											'</div>'.
											'<div class="col-md-5">'.
											$imagen.									
											'</div>'.
											'<div class="col-md-1">'.
													'<button class="btn btn-warning" onclick="return AdjuntarImagen('.$row['IdRespuestaMultiple'].',30,'.$IdPregunta.','.$row['IdRespuesta'].');">AI</button>'.                
													'<button class="btn btn-success" onclick="return GuardaRespuesta('.$row['IdRespuesta'].',0,'.$IdPregunta.','.$Tipo.');">GR</button>'.
													'<button class="btn btn-danger" onclick="return EliminaRespuesta('.$row['IdRespuesta'].',0,'.$IdPregunta.','.$Tipo.');">ER</button>'.
											'</div>'.
										'</div> <br/><br/>';
			}
		}
		$data["Html"]=$htmlResp;
		$data["Contador"]=$contador;

		return $data;
	}

	/**
	 * Delete physical an user of database
	 * @param  int $id of the user
	 * @return  string message of result
	 */
	public function EliminaExamen( $id)
	{
		$data=array(
			"Valido"=>0
		);

		$this->db->where("IdExamen", $id);
		$this->db->update("examen",$data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}
	}

	public function EliminaRespuesta( $id)
	{
		$data=array(
			"Valido"=>0
		);

		$this->db->where("IdRespuesta", $id);
		$this->db->update("respuesta",$data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}
	}

	public function EliminaPregunta( $id)
	{
		$data=array(
			"Valido"=>0
		);

		$this->db->where("IdPregunta", $id);
		$this->db->update("pregunta",$data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}
	}

	
	public function ObtenOrden($IdPregunta){
		//$data="";
		$sql="SELECT MAX(Orden) Maximo FROM respuestamultiple where IdPregunta=".$IdPregunta;
		//return $query;
		$Consecutivo=0;
		$query = $this->db->query($sql);
		foreach($query->result_array() AS $row) {
				$Consecutivo=$row["Maximo"];	
		}
		
		$data["Respuesta"]="OK";
		$data["Consecutivo"]=$Consecutivo+1;
			
		
		return $data;
	}

	public function InsertaImagenRelacionar($data,$IdRespuesta)
   {

       $this->db->insert('respuestamultiple', $data);
       $id=$this->db->insert_id('respuestamultiple');

       $error = $this->db->error();
        if ($error["message"]!="") {
          //return $error["message"];
          $data = array(
                  'Id' =>$id,   
                  'estatus' =>'error',               
                  'message' => $error["message"]
          );
          return $data ;
        }else{
        	$RespRAct=$this->ActualizaIdRespuestaMultipleEnRespuesta($IdRespuesta,$id);
        	if($RespRAct=="OK"){
        		$data = array(
                  'Id' =>$id,
                  'estatus' =>'OK',
                  'message' => ""
          		);
          		return $data ;
        	}else{
        		$data = array(
                  'Id' =>$id,
                  'estatus' =>'error',
                  'message' => "No Actualizo el Id en la tabla Respuesta"
          		);
          		return $data ;
        	}
           
          	
          //return "OK";
        }
      //return TRUE;
   }

   public function ActualizaImagenRelacionar($data,$IdRespuestaMultiple)
   {
   		$this->db->where("IdRespuestaMultiple", $IdRespuestaMultiple);
       $this->db->update('respuestamultiple', $data);

       //$id=$this->db->insert_id('respuestamultiple');

       $error = $this->db->error();
        if ($error["message"]!="") {
          //return $error["message"];
          $data = array(
                  'Id' =>$id,   
                  'estatus' =>'error',               
                  'message' => $error["message"]
          );
          return $data ;
        }else{
        	
        	$data = array(
                 'Id' =>$IdRespuestaMultiple,
                 'estatus' =>'OK',
                 'message' => ""
          	);
          	return $data ;
        	
           
          	
          //return "OK";
        }
      //return TRUE;
   }

   public function ActualizaIdRespuestaMultipleEnRespuesta($IdRespuesta,$IdRespuestaMultiple){
   		$data=array(
			"Correcta"=>$IdRespuestaMultiple
		);
		$this->db->where("IdRespuesta", $IdRespuesta);
		$this->db->update('respuesta', $data);
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}
   }

    public function ActualizaImagenRespuesta($data,$IdRespuesta)
   {
   		$this->db->where("IdRespuesta", $IdRespuesta);
       $this->db->update('respuesta', $data);

       //$id=$this->db->insert_id('respuestamultiple');

       $error = $this->db->error();
        if ($error["message"]!="") {
          return $error["message"];
         
        }else{
        	  	
          return "OK";
        }
      //return TRUE;
   }

    public function ActualizaImagenPregunta($data,$IdPregunta)
   {
   		$this->db->where("IdPregunta", $IdPregunta);
       $this->db->update('pregunta', $data);

       //$id=$this->db->insert_id('respuestamultiple');

       $error = $this->db->error();
        if ($error["message"]!="") {
          return $error["message"];
         
        }else{
        	  	
          return "OK";
        }
      //return TRUE;
   }
	/**
	 * Get Examen for user
	 * @param  int $id_user of the user
	 * @return  string message of result
	 */
	// public function GetExamen( $id_user)
	// {

	// 	$this->db->select('usuarioexamen.Id, examen.IdExamen as IdExamen,examen.Nombre as Nombre, examen.Clave as Clave,
	// 	examen.Descripcion as Descripcion,examen.Tiempo as Tiempo,examen.CalificacionAprobatoria,
	// 	 examen.CantidadPreguntas, usuarioexamen.FechaHoraInicio,
	// 	 DATE_FORMAT(usuarioexamen.FechaHoraInicio,\'%Y-%m-%d %h:%i:%s\')  as DiferenciaFecha,IdsPreguntas')
	// 		->from('examen')
	// 		->join('usuarioexamen', 'examen.IdExamen = usuarioexamen.Examen_IdExamen')
	// 		->where('usuarioexamen.Usuario_Id', $id_user)
	// 		->where('usuarioexamen.Valido', 1)
	// 		->where('usuarioexamen.Status != ', 2);
	// 	return  $this->db->get();
	// }

	
}
