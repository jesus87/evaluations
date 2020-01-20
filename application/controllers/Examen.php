<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Examen extends CI_Controller
{

	function __construct()
	{
		parent::__construct();
		$this->load->library(array('session', 'form_validation'));
		$this->load->helper(array('url', 'form'));
		$this->load->model('Examen_model');

	}


	/**
	 * Here save the user
	 *
	 */
	public function ActualizaComienzoExamen()
	{
		date_default_timezone_set("America/Mexico_City");
		$dt = new DateTime();
		$HoraActual= $dt->format('Y-m-d H:i:s');
		$id = $this->input->get_post('hdIdUsuarioExamen');
		$data = array(
			'FechaHoraInicio' => $HoraActual,
			'Status' => 1
		);
		$response_array['status'] = 'success';
		$success = $this->Examen_model->ActualizaUsuarioExamen($data,$id);
		$response_array['message'] = $success;
		echo json_encode($response_array);
	}
	public function ActualizaFinExamen()
	{
		date_default_timezone_set("America/Mexico_City");
		$dt = new DateTime();
		$HoraActual= $dt->format('Y-m-d H:i:s');
		$id = $this->input->get_post('hdIdUsuarioExamen');
		$aprobado = $this->input->get_post('aprobado');
		$data = array(
			'FechaHoraFin' => $HoraActual,
			'Status' => 2,
			'Aprobado' => $aprobado
		);
		$response_array['status'] = 'success';
		$success = $this->Examen_model->ActualizaUsuarioExamen($data,$id);
		$response_array['message'] = $success;
		echo json_encode($response_array);
	}
}
