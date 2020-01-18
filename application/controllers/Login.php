<?php
/**
 * Created by  Jesus Garcia.
 * Date: 29/10/2018
 * Time: 08:06 PM
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
	/**
	 * Constructor
	 * Login is loaded
	*/
	function __construct() {
		parent::__construct();


		$this->load->model('Login_model');
		$this->load->library(array('session','form_validation'));
		$this->load->helper(array('url','form'));
	}
	/**
	 * Index
	 * Here we check if user is logged
	*/
	public function index()
	{

		switch ($this->session->userdata('perfil')) {
			case '':

				$data['token'] = $this->token();
				$data['titulo'] = 'Login con roles de usuario';
				$this->load->view('Login',$data);
				break;
			case 'administrador':

				redirect(base_url().'index.php/inicio');
				break;
			default:

				$data['token'] = $this->token();
				$data['titulo'] = 'Login con roles de usuario no definidos';
				$this->load->view('Login',$data);
				break;
		}

	}
	/**
	 * New User
	 * Here we make the validation if user exits
	*/
	public function new_user()
	{
		if($this->input->post('token') && $this->input->post('token') == $this->session->userdata('token'))
		{
			$this->form_validation->set_rules('username', 'nombre de usuario', 'required|trim|min_length[5]|max_length[10]');
			$this->form_validation->set_rules('password', 'password', 'required|trim|min_length[5]|max_length[10]');

			//lanzamos mensajes de error si es que los hay

			if($this->form_validation->run() == FALSE)
			{
				$this->index();
			}else{
				$username = $this->input->post('username');
				$password = sha1($this->input->post('password'));
				$check_user = $this->Login_model->login_user($username,$password);
				if($check_user == TRUE)
				{
					$data = array(
						'is_logued_in' => TRUE,
						'id_usuario' => $check_user->Id,
						'perfil' => $check_user->Rol,
						'username' => $check_user->Usuario,
						'name' =>$check_user->Usuario. " | ". $check_user->Nombres." ".$check_user->PrimerApellido,
						'mail' => $check_user->Rol

					);
					$this->session->set_userdata($data);
					$this->index();
				}
			}
		}else{


			$data = array(
				'is_logued_in' => FALSE,
				'id_usuario' => 0,
				'perfil' =>'',
				'username' =>'',
				'name' => '',
				'mail' =>''

			);
			$data['token'] = $this->token();
			$this->load->view('Login',$data);
		}
	}
	/**
	 * token
	 * Here token is made using md5
	*/
	public function token()
	{
		$token = md5(uniqid(rand(),true));
		$this->session->set_userdata('token',$token);
		return $token;
	}

	/**
	 * logout_ci
	 * Session is destroyed, logout
	*/

	public function logout_ci()
	{
		$this->session->sess_destroy();
		$this->index();



	}
}

