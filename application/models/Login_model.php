<?php
/**
 * Created by Jesus Garcia.
 * Date: 29/10/2018
 * Time: 08:17 PM
 */


class Login_model extends CI_Model {

	public function __construct() {
		$this->load->database();
	}
	public function login_user($username,$password)
	{
		$this->db->where('Usuario',$username);
		$this->db->where('Password',$password);
		$this->db->where('Valido',1);
		$query = $this->db->get('usuario');
		if($query->num_rows() == 1)
		{
			return $query->row();
		}else{
			$this->session->set_flashdata('usuario_incorrecto','Los datos introducidos son incorrectos');
			redirect(base_url().'index.php/Login','refresh');
		}
	}

}
