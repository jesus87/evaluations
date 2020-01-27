<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller {

	function __construct() {
		parent::__construct();

		$this->load->library(array('session','form_validation'));
		$this->load->helper(array('url','form'));
		$this->load->model('Usuario_model');
		$this->load->model('Examen_model');


	}

	public function index()
	{
		switch ($this->session->userdata('perfil')) {
			case '':
				redirect(base_url().'index.php/Login');
				break;
			case 'enrolador':
			case 'administrador':
				$this->load->view('Header');
				$this->load->view('Menu');
				$this->load->view('Contain');
				$this->load->view('Footer');
				break;
			case 'usuario':
				$this->load->view('Header');
				$this->load->view('MenuEvaluado');
				date_default_timezone_set("America/Mexico_City");
				$query = $this->Usuario_model->GetExamen($this->session->userdata('id_usuario'));

				if ($query->num_rows() > 0) {
					$usuarioExamen = $query->row();

					$data['IdExamen'] = $usuarioExamen->IdExamen;
					$data['Nombre'] = $usuarioExamen->Nombre;
					$data['Clave'] = $usuarioExamen->Clave;
					$data['Descripcion'] = $usuarioExamen->Descripcion;
					$data['Tiempo'] = $usuarioExamen->Tiempo;
					$data['TiempoAux'] = $usuarioExamen->Tiempo;
					$dt = new DateTime($usuarioExamen->FechaHoraInicio);
					$HoraInicio = $dt->format('Y-m-d H:i:s');
					$data['FechaHoraInicio'] = $HoraInicio;
					$diff = $dt->diff(new DateTime());
					$minutes = ($diff->days * 24 * 60) +
						($diff->h * 60) + $diff->i;
					$dt = new DateTime();
					$HoraActual = $dt->format('Y-m-d H:i:s');
					$data['HoraActual'] = $HoraActual;
					$data['DiferenciaFecha'] = $minutes;
					$data['CalificacionAprobatoria'] = $usuarioExamen->CalificacionAprobatoria;
					$data['CantidadPreguntas'] = $usuarioExamen->CantidadPreguntas;
					$preguntas = $this->Examen_model->GetPreguntas($usuarioExamen->IdExamen,$usuarioExamen->IdsPreguntas);
					$data['Preguntas'] = $preguntas;
					$data['IdUsuarioExamen'] = $usuarioExamen->Id;
					if ($minutes >= $usuarioExamen->Tiempo) {
						$data['toShow'] = 'none';
						$data['message'] = 'Usted No Cuenta Con Examenes Por El Momento';
					} else {
						if ($minutes > 0) {
							$data['Tiempo'] = $usuarioExamen->Tiempo - $minutes;
							$data['TiempoAux'] = $usuarioExamen->Tiempo;

						}
						$data['toShow'] = 'block';
						$data['message'] = '';
					}

				}
				else{
					$data['toShow'] = 'none';
					$data['message'] = 'Usted No Cuenta Con Examenes Por El Momento';
				}
				$this->load->view('ContainEvaluado', $data);
				$this->load->view('Footer');
				$this->load->view('Evaluadojs');
				break;
			default:

				redirect(base_url().'index.php/Login');
				break;
		}


	}
}
