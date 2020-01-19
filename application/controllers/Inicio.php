<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller {

	function __construct() {
		parent::__construct();

		$this->load->library(array('session','form_validation'));
		$this->load->helper(array('url','form'));
	}

	public function index()
	{
		switch ($this->session->userdata('perfil')) {
			case '':
				redirect(base_url().'index.php/Login');
				break;
			case 'administrador':
				$this->load->view('Header');
				$this->load->view('Menu');
				$this->load->view('Contain');
				$this->load->view('Footer');
				break;
			default:

				redirect(base_url().'index.php/Login');
				break;
		}


	}
}
