<?php
/**
 * Created by Jesus Garcia.
 * Date: 29/10/2018
 * Time: 07:59 PM
 */
?>
<!DOCTYPE html>
<html lang="MX">
<head>
	<title>Examenes | Acceso</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="<?php echo base_url(); ?>/assets/img/brand/icono.fw.png"/>
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css"
		  href="<?php echo base_url(); ?>/Login_v3/vendor/bootstrap/css/bootstrap.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css"
		  href="<?php echo base_url(); ?>/Login_v3/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css"
		  href="<?php echo base_url(); ?>/Login_v3/fonts/iconic/css/material-design-iconic-font.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/Login_v3/vendor/animate/animate.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css"
		  href="<?php echo base_url(); ?>/Login_v3/vendor/css-hamburgers/hamburgers.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css"
		  href="<?php echo base_url(); ?>/Login_v3/vendor/animsition/css/animsition.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/Login_v3/vendor/select2/select2.min.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css"
		  href="<?php echo base_url(); ?>/Login_v3/vendor/daterangepicker/daterangepicker.css">
	<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/Login_v3/css/util.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/Login_v3/css/main.css">
	<!--===============================================================================================-->
	<style>
			input.button_add {
			
			
			border: 0.5px solid #000;
			background:  url(<?php echo base_url(); ?>/assets/img/brand/finger.png)no-repeat 10px center;
			font-family: Poppins-Medium;
			font-size: 16px;
			color: #555555;
			line-height: 1.2;
			display: -webkit-box;
			display: -webkit-flex;
			display: -moz-box;
			display: -ms-flexbox;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			min-width: 120px;
			height: 50px;
			border-radius: 25px;
			position: relative;
			cursor:pointer;
    z-index: 1;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;						
		}
		

	</style>

</head>
<body>
<?php
	$username = array('name' => 'username', 'placeholder' => 'Nombre de usuario', 'class' => 'input100');
	$password = array('name' => 'password', 'placeholder' => 'Password', 'class' => 'input100');
	$submit = array('name' => 'submit', 'value' => 'Iniciar sesión', 'title' => 'Iniciar sesión', 'class' => 'login100-form-btn');
	$attributes = array('class' => 'login100-form validate-form');
?>
<div class="limiter">
	<div class="container-login100" style="background-image: url('<?php echo base_url(); ?>/Login_v3/images/bg-01.jpg');">
		<div class="wrap-login100">

			<!--<form class="login100-form validate-form">-->
			<?=
			form_open(base_url() . 'index.php/Login/new_user', $attributes) ?>

					<span >

						<img style="width: 100%;" src="<?php echo base_url(); ?>assets/img/brand/coolpet_admin.png">
					</span>

				<!-- <span class="login100-form-title p-b-34 p-t-27">
						INGRESO
				</span> -->

				<div class="wrap-input100 validate-input" data-validate="Enter username">
					<!--<input class="input100" type="text" name="username" placeholder="Nombre de Usuario">-->
					<?= form_input($username) ?>
					<span class="focus-input100" data-placeholder="&#xf207;"></span>
				</div>
				<p>
					<?=
					form_error('username')
					?>
				</p>
				<div class="wrap-input100 validate-input" data-validate="Enter password">
					<!--<input class="input100" type="password" name="pass" placeholder="Password">-->
					<?= form_password($password) ?>
					<span class="focus-input100" data-placeholder="&#xf191;"></span>
				</div>
				<p>
					<?=
						form_error('password')
					?>
				</p>



				<div class="container-login100-form-btn">
					<!--
					<button class="login100-form-btn">
						Login
					</button>
					-->

					<?= form_hidden('token', $token) ?>
					<div class="row">
						<div class="col-6">
							<?= form_submit($submit) ?>
						</div>
						<div class="col-6">
							<input type="button" name="button" value="    Huella" title="Iniciar sesión" class="button_add">
							
						</div>
				  </div>
					
					

                    <?php
						if ($this->session->flashdata('usuario_incorrecto')) {
					?>
					<div class="text-center p-t-90">
						<a class="txt1" href="#">
							<?= $this->session->flashdata('usuario_incorrecto') ?>
						</a>
					</div>
                    <?php
                    }
                    ?>

				</div>
				<!--======================================FORGOT  PASSWORD=========================================================-->
				<!--
				<div class="text-center p-t-90">
					<a class="txt1" href="#">
						Forgot Password?
					</a>
				</div>
				-->
				<!--======================================FORGOT PASSWORD=========================================================-->

			<!--</form>-->
			<?= form_close() ?>
		</div>
	</div>
</div>


<div id="dropDownSelect1"></div>

<!--===============================================================================================-->
<script src="<?php echo base_url(); ?>/Login_v3/vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
<script src="<?php echo base_url(); ?>/Login_v3/vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
<script src="<?php echo base_url(); ?>/Login_v3/vendor/bootstrap/js/popper.js"></script>
<script src="<?php echo base_url(); ?>/Login_v3/vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
<script src="<?php echo base_url(); ?>/Login_v3/vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
<script src="<?php echo base_url(); ?>/Login_v3/vendor/daterangepicker/moment.min.js"></script>
<script src="<?php echo base_url(); ?>/Login_v3/vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
<script src="<?php echo base_url(); ?>/Login_v3/vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
<script src="<?php echo base_url(); ?>/Login_v3/js/main.js"></script>

</body>
</html>
