<?php
class Usuario_model extends CI_Model
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

		$this->db->insert('usuario', $data);


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
	public function Busca()
	{



		$query = $this->db->get('usuario');

		return $query->result();

	}

	/**
	 * Delete physical an user of database
	 * @param  int $id of the user
	 * @return  string message of result
	 */
	public function Elimina( $id)
	{

		$this->db->where("Id", $id);
		$this->db->delete("usuario");
		$error = $this->db->error();
		if ($error["message"] != "") {
			return $error["message"];
		} else {
			return "OK";
		}
	}
}