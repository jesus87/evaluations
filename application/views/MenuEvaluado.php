<body>
<!-- Sidenav -->
<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
	<div class="container-fluid">
		<!-- Toggler -->
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main"
				aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<!-- Brand -->
		<a class="navbar-brand pt-0" href="<?php echo base_url(); ?>index.php/Inicio">
			<img src="<?php echo base_url(); ?>assets/img/brand/coolpet_admin.png" class="navbar-brand-img" alt="...">
		</a>
		<!-- User -->
		<ul class="nav align-items-center d-md-none">


			<li class="nav-item dropdown">
				<a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
				   aria-expanded="false">
					<div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img alt="Image placeholder" src="<?php echo base_url(); ?>assets/img/theme/team-1-800x800.jpg">
              </span>
						<span class="mb-0 text-sm  font-weight-bold">
					<?php echo $this->session->userdata('name'); ?>
				</span>
					</div>
				</a>
				<div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
					<div class=" dropdown-header noti-title">
						<h6 class="text-overflow m-0">Bienvenido!
							<?php
							echo $this->session->userdata('perfil');
							?>
						</h6>
					</div>
					<div class="dropdown-divider"></div>
					<?php
					$attributes = array('class' => 'dropdown-item');
					?>
					<?= anchor(base_url() . 'index.php/Login/logout_ci', 'Cerrar sesión', $attributes) ?>


				</div>
			</li>
		</ul>
		<!-- Collapse -->
		<div class="collapse navbar-collapse" id="sidenav-collapse-main">
			<!-- Collapse header -->
			<div class="navbar-collapse-header d-md-none">
				<div class="row">
					<div class="col-6 collapse-brand">
						<a href="<?php echo base_url(); ?>index.php/Inicio">
							<img src="<?php echo base_url(); ?>assets/img/brand/coolpet_admin.png">
						</a>

					</div>
					<div class="col-6 collapse-close">
						<button type="button" class="navbar-toggler" data-toggle="collapse"
								data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false"
								aria-label="Toggle sidenav">
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</div>

			<!-- Navigation -->
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="<?php echo base_url(); ?>index.php/Inicio">
						<i class="ni ni-tv-2 text-primary"></i> Home
					</a>
				</li>
			</ul>




			<!-- Divider Sesion -->
			<hr class="my-3">
			<!-- Heading sesion-->
			<h6 class="navbar-heading text-muted">Sesión</h6>
			<!-- Navigation sesion-->
			<ul class="navbar-nav mb-md-3">
				<li class="nav-item">
					<?php
					$attributes = array('class' => 'nav-link');
					?>
					<?= anchor(base_url() . 'index.php/Login/logout_ci', 'Cerrar sesión', $attributes) ?>

				</li>

			</ul>

		</div>
	</div>
</nav>

<!-- Main content -->
<div class="main-content">
	<!-- Top navbar -->
	<nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
		<div class="container-fluid">
			<!-- Brand -->
			<a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="#">Tablero de Administración</a>

			<!-- User -->
			<ul class="navbar-nav align-items-center d-none d-md-flex">
				<li class="nav-item dropdown">
					<a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
					   aria-expanded="false">
						<div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="<?php echo base_url(); ?>assets/img/theme/team-4-800x800.jpg">
                </span>
							<div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold">
					<?php echo $this->session->userdata('name'); ?>
				  </span>
							</div>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
						<div class=" dropdown-header noti-title">
							<h6 class="text-overflow m-0">Bienvenido!
								<?php
								echo $this->session->userdata('perfil');
								?>
							</h6>
						</div>
						<div class="dropdown-divider"></div>
						<?php
						$attributes = array('class' => 'dropdown-item'
						);
						?>
						<?= anchor(base_url() . 'index.php/Login/logout_ci', 'Cerrar sesión', $attributes) ?>
						<!--
                      <a href="#!" class="dropdown-item">
                        <i class="ni ni-user-run"></i>
                        <span>Cerrar Sesion</span>
                      </a>
                      -->
					</div>
				</li>
			</ul>
		</div>
	</nav>
	<!-- Header -->
	<div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
		<div class="container-fluid">
			<div class="header-body">

			</div>
		</div>
	</div>
	<!-- Page content -->
	<div class="container-fluid mt--7">
