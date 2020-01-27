<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UsuarioExamen extends CI_Controller
{

	function __construct()
	{
		parent::__construct();
		$this->load->library(array('session', 'form_validation'));
		$this->load->helper(array('url', 'form'));
		$this->load->model('UsuarioExamen_model');

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
				$this->load->view('ContainUsuarioExamen');
				$this->load->view('Footer');
				$this->load->view('UsuarioExamenjs');
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

	public function Agregar()
	{

		$IdUsuario = $this->input->get_post('IdUsuario');
		$IdExamen = $this->input->get_post('IdExamen');
		$ClaveExamen = $this->input->get_post('ClaveExamen');
		//$data = array(
		//	'IdUsuario' => $IdUsuario,
		//	'IdExamen' => $IdExamen
		//);
		//$response_array['status'] = 'success';
		$data["IdUsuario"]=$IdUsuario ;
		$data["IdExamen"]=$IdExamen;
		$data["ClaveExamen"]=$ClaveExamen;
		//echo $data["IdUsuario"];		
		$success = $this->UsuarioExamen_model->Agrega($data);
		$response_array['message'] = $success;
		
		echo json_encode($response_array);
	}
	/**
	 * Here we search all the users
	 *
	 */
	public function BuscaExamen()
	{

		$response_array['status'] = 'success';
		$response_array['message'] = "OK";
		$response_array['data'] = $this->UsuarioExamen_model->BuscaExamen();

		echo json_encode($response_array);
	}

	public function UsuariosAgregados()
	{
		$IdExamen = $this->input->get_post('IdExamen');
		$response_array['status'] = 'success';
		$response_array['message'] = "OK";
		$response_array['data'] = $this->UsuarioExamen_model->UsuariosAgregados($IdExamen);

		echo json_encode($response_array);
	}

	public function UsuariosDisponibles()
	{
		$IdExamen = $this->input->get_post('IdExamen');
		$response_array['status'] = 'success';
		$response_array['message'] = "OK";
		$response_array['data'] = $this->UsuarioExamen_model->UsuariosDisponibles($IdExamen);

		echo json_encode($response_array);
	}

	/**
	 * Here we delete all the users
	 *
	 */
	public function EliminarUsuarioExamen()
	{

		$id = $this->input->post('IdUsuarioExamen');
		$response_array['status'] = 'success';

		$success = $this->UsuarioExamen_model->EliminarUsuarioExamen( $id);
		$response_array['message'] = $success;
		echo json_encode($response_array);
	}
	public function RepetirUsuarioExamen()
	{

		$id = $this->input->post('IdUsuarioExamen');
		$response_array['status'] = 'success';

		$success = $this->UsuarioExamen_model->RepetirUsuarioExamen( $id);
		$response_array['message'] = $success;
		echo json_encode($response_array);
	}
}
