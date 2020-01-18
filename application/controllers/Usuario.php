<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario extends CI_Controller
{

	function __construct()
	{
		parent::__construct();
		$this->load->library(array('session', 'form_validation'));
		$this->load->helper(array('url', 'form'));
		$this->load->model('Usuario_model');

	}

	public function index()
	{
		switch ($this->session->userdata('perfil')) {
			case '':
				redirect(base_url() . 'index.php/Login');
				break;
			case 'administrador':
				$this->load->view('Header');
				$this->load->view('Menu');
				$this->load->view('ContainUsuario');
				$this->load->view('Footer');
				$this->load->view('Usuariojs');
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

		$id = $this->input->post('hdIdUsuario');

		$data = array(
			'Usuario' => $this->input->get_post('txtUsuario'),
			'UsuarioCrea' => $this->session->userdata('username'),
			'Nombres' => $this->input->get_post('txtNombre'),
			'PrimerApellido' => $this->input->get_post('txtApellido'),
			'SegundoApellido' => $this->input->get_post('txtSegundoApellido'),
			'Rfc' => $this->input->get_post('txtRfc'),
			'Rol' => $this->input->get_post('txtRol'),
			'Valido' => $this->input->get_post('txtValido')
		);
		$response_array['status'] = 'success';


		if ($id == 0) {
			$data["Password"]  = sha1($this->input->get_post('txtPassword'));
			$success = $this->Usuario_model->Agrega($data);
			$response_array['message'] = $success;
		} else {

			if( $this->input->get_post('txtPassword') != "") $data["Password"]  = sha1($this->input->get_post('txtPassword'));
			$success = $this->Usuario_model->Actualiza($data, $id);
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
		$response_array['data'] = $this->Usuario_model->Busca();

		echo json_encode($response_array);
	}
	/**
	 * Here we delete all the users
	 *
	 */
	public function Elimina()
	{

		$id = $this->input->post('Id');
		$response_array['status'] = 'success';

		$success = $this->Usuario_model->Elimina( $id);
		$response_array['message'] = $success;
		echo json_encode($response_array);
	}

}
