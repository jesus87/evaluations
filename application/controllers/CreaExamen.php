<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CreaExamen extends CI_Controller
{

	function __construct()
	{
		parent::__construct();
		$this->load->library(array('session', 'form_validation'));
		$this->load->helper(array('url', 'form'));
		$this->load->model('CreaExamen_model');

	}

	public function index()
	{
		switch ($this->session->userdata('perfil')) {
			case '':
				redirect(base_url() . 'index.php/Login');
				break;
			case 'enrolador':
			case 'administrador':
				$this->load->view('Header');
				$this->load->view('Menu');
				$this->load->view('ContainCreaExamen');
				$this->load->view('Footer');
				$this->load->view('CreaExamenjs');
				break;
			default:

				redirect(base_url() . 'index.php/Login');
				break;
		}

	}

	/**
	 * Here save the user
	 *
	 */

	public function Guarda()
	{

		$id = $this->input->post('hdIdExamen');

		$data = array(
			'Nombre' => $this->input->get_post('txtTitulo'),
			'CalificacionAprobatoria' => $this->input->get_post('txtCalificacionMinima'),
			'CantidadPreguntas' => $this->input->get_post('txtCantidadPreguntas'),
			'Clave' => $this->input->get_post('txtClave'),
			'Tiempo' => $this->input->get_post('txtTiempo'),
			'Descripcion' => $this->input->get_post('txtDescripcion'),
			'Usuario_Id' => $this->session->userdata('id_usuario'),						
			'Valido' => 1
		);
		//$response_array['status'] = 'success';


		if ($id == 0) {
			//$data["Password"]  = sha1($this->input->get_post('txtPassword'));
			$success = $this->CreaExamen_model->Agrega($data);
			$response_array['message'] = $success;
		} else {

			//if( $this->input->get_post('txtPassword') != "") $data["Password"]  = sha1($this->input->get_post('txtPassword'));
			$success = $this->CreaExamen_model->Actualiza($data, $id);
			$response_array['message'] = $success;
		}

		echo json_encode($response_array);
	}

	public function GuardaPregunta()
	{

		$id = $this->input->post('hdIdPregunta');

		$data = array(
			'Tipo' => $this->input->get_post('txtTipo'),
			'Nombre' => $this->input->get_post('txtPregunta'),
			'Valor' => $this->input->get_post('txtValor'),
			'Examen_IdExamen' => $this->input->get_post('txtIdExamen'),
			'UsuarioCrea' => $this->session->userdata('username'),							
			'Valido' => 1
		);
		//$response_array['status'] = 'success';


		if ($id == 0) {
			//$data["Password"]  = sha1($this->input->get_post('txtPassword'));
			$success = $this->CreaExamen_model->AgregaPregunta($data);
			$response_array['message'] = $success;
		} else {

			//if( $this->input->get_post('txtPassword') != "") $data["Password"]  = sha1($this->input->get_post('txtPassword'));
			$success = $this->CreaExamen_model->ActualizaPregunta($data, $id);
			$response_array['message'] = $success;
		}

		echo json_encode($response_array);
	}
	
	public function ConsultaPregunta()
	{
		$IdExamen=$this->input->get_post('txtIdExamen');
		$response_array['data'] = $this->CreaExamen_model->BuscaPreguntasYRespuestas($IdExamen);

		echo json_encode($response_array);
	}

	public function GuardaRespuesta()
	{

		$id = $this->input->post('hdIdRespuesta');

		$data = array(
			
			'Nombre' => $this->input->get_post('txtRespuesta'),
			'Valor' => $this->input->get_post('txtValor'),
			'Correcta' => $this->input->get_post('txtCorrecta'),
			'Pregunta_IdPregunta' => $this->input->get_post('txtPregunta_IdPregunta'),
			'UsuarioCrea' => $this->session->userdata('username'),							
			'Valido' => 1
		);
		//$response_array['status'] = 'success';


		if ($id == 0) {
			//$data["Password"]  = sha1($this->input->get_post('txtPassword'));
			$success = $this->CreaExamen_model->AgregaRespuesta($data);
			$response_array['message'] = $success;
		} else {

			//if( $this->input->get_post('txtPassword') != "") $data["Password"]  = sha1($this->input->get_post('txtPassword'));
			$success = $this->CreaExamen_model->ActualizaRespuesta($data, $id);
			$response_array['message'] = $success;
		}

		echo json_encode($response_array);
	}
	/**
	 * Here we search all the users
	 *
	 */
	public function Busca()
	{

		$response_array['status'] = 'success';
		$response_array['message'] = "OK";
		$response_array['data'] = $this->CreaExamen_model->Busca();

		echo json_encode($response_array);
	}
	/**
	 * Here we delete all the users
	 *
	 */

	
	public function EliminaExamen()
	{

		$id = $this->input->post('IdExamen');
		//$response_array['status'] = 'success';

		$success = $this->CreaExamen_model->EliminaExamen( $id);
		$response_array['message'] = $success;
		echo json_encode($response_array);
	}

	public function EliminaRespuesta()
	{

		$id = $this->input->post('hdIdRespuesta');
		//$response_array['status'] = 'success';

		$success = $this->CreaExamen_model->EliminaRespuesta( $id);
		$response_array['message'] = $success;
		echo json_encode($response_array);
	}

	public function EliminaPregunta()
	{

		$id = $this->input->post('hdIdPregunta');
		//$response_array['status'] = 'success';

		$success = $this->CreaExamen_model->EliminaPregunta( $id);
		$response_array['message'] = $success;
		echo json_encode($response_array);
	}

	public function uploadImage()
	{
		$IdRespuestaMultiple=$this->input->get_post('IdRespuestaMultiple');
		$Tipo=$this->input->get_post('IdTipoImagen');
		$idpregunta=$this->input->get_post('IdPreguntaImagen');
		$idrespuesta=$this->input->get_post('IdRespuestaImagen');
		//$archivo=$this->input->get_post('fileProducto');
		$NombreOriginal=$_FILES['Imagen']['name'];
		$file_type = $_FILES['Imagen']['type']; //returns the mimetype

		$allowed = array("image/jpeg", "image/gif", "image/png");
		if(!in_array($file_type, $allowed)) {
		  $response_array['message'] = 'Solo se permiten imagenes de tipo JPG,PNG,GIF';		  
		  $response_array['estatus'] = 'Error';
		}else{
			$ext = pathinfo($NombreOriginal, PATHINFO_EXTENSION);
			$NombreInterno=date('m_d_Y_H_i_s').".".$ext;
			
			$url="Imagenes/";
			if($Tipo==10){
				$url.=$idpregunta."/";
			}else if($Tipo==20){
				$url.=$idpregunta."/".$idrespuesta."/";
			}else if($Tipo==30){
				$url.=$idpregunta."/"."respuestamultiple"."/";
			}
			
			if (!file_exists($url)) {
			     mkdir($url, 0777, true);
			}

			if (move_uploaded_file($_FILES['Imagen']['tmp_name'], $url.$NombreInterno)) {
				//$id=$this->input->post('hdIdProducto');
				if($Tipo==10){

					$data = array(
						'UrlImagen' => $NombreInterno
						
					);
					$success=$this->CreaExamen_model->ActualizaImagenPregunta($data,$idpregunta);
					$response_array['message']=$success;
					
				}else if($Tipo==20){
					$data = array(
						'UrlImagen' => $NombreInterno
						
					);
					$success=$this->CreaExamen_model->ActualizaImagenRespuesta($data,$idrespuesta);
					$response_array['message']=$success;
					
				}else if($Tipo==30){

					
					if($IdRespuestaMultiple==0){
						$orden=$this->CreaExamen_model->ObtenOrden($idpregunta);
						$data = array(
						'UrlImagen' => $url.$NombreInterno,
						'Orden' => $orden["Consecutivo"],
						'IdPregunta'=>$idpregunta
						);
						$success=$this->CreaExamen_model->InsertaImagenRelacionar($data,$idrespuesta);
						$response_array['message']=$success;
					}else{
						$data = array(
						'UrlImagen' => $url.$NombreInterno,
						'IdPregunta'=>$idpregunta
						);
						$success=$this->CreaExamen_model->ActualizaImagenRelacionar($data,$IdRespuestaMultiple);
						$response_array['message']=$success;
					}
					
		 			
				}
				
			    

		 		

		 		// $imagen_optimizada = $this->redimensionar_imagen($imagenFuente,'images/imagen.jpg',288,394);
		 		// imagejpeg($imagen_optimizada, $imagen_optimizada);
			} else {
			    $data = array(
                  'Id' =>0,
                  'estatus' =>'error',
                  'message' => "Error en la subida del fichero"
          		);
			    $response_array['message']= $data ;
			}
			//$response_array['status'] = 'success';
			
		}

		echo json_encode($response_array);
	}
}
