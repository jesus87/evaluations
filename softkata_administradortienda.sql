-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-04-2019 a las 21:38:19
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `softkata_administradortienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `configuracion`
--

CREATE TABLE `configuracion` (
  `tituloPagina` text NOT NULL,
  `bannerSuperior` text NOT NULL,
  `bannerIzquierdo` text NOT NULL,
  `logoOriginal` text NOT NULL,
  `logoCambiado` text NOT NULL,
  `usuario` text NOT NULL,
  `footer` text NOT NULL,
  `subFooter` text NOT NULL,
  `descripcion` text NOT NULL,
  `autor` text NOT NULL,
  `copyright` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `configuracion`
--

INSERT INTO `configuracion` (`tituloPagina`, `bannerSuperior`, `bannerIzquierdo`, `logoOriginal`, `logoCambiado`, `usuario`, `footer`, `subFooter`, `descripcion`, `autor`, `copyright`) VALUES
('Correas, Guias y Todo para su Mascota | Coolpet.mx', 'Faltan 10 dias para nuestro OUTLET!', 'Envio gratis arriba de $900.00 MX', 'LOGO TOP.png', '12_21_2018_17_10_25.png', 'Usuario', '@ 2018 Coolpet.mx | COOLPET DE MÉXICO S.A.S.', 'Ciudad del carmen Campeche | México | CP 24150', 'Correas, Guias y Todo para su Mascota | Coolpet.mx', 'Coolpet.mx', 'COOLPET.MX');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccionenvio`
--

CREATE TABLE `direccionenvio` (
  `Consecutivo` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
  `Direccion` varchar(250) COLLATE utf8_bin NOT NULL,
  `Ciudad` varchar(100) COLLATE utf8_bin NOT NULL,
  `CodigoPostal` varchar(100) COLLATE utf8_bin NOT NULL,
  `Pais` varchar(250) COLLATE utf8_bin NOT NULL,
  `Estado` varchar(250) COLLATE utf8_bin NOT NULL,
  `Valido` int(11) NOT NULL,
  `FechaCrea` datetime NOT NULL,
  `UsuarioCrea` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `direccionenvio`
--

INSERT INTO `direccionenvio` (`Consecutivo`, `IdUsuario`, `Direccion`, `Ciudad`, `CodigoPostal`, `Pais`, `Estado`, `Valido`, `FechaCrea`, `UsuarioCrea`) VALUES
(1, 6, 'prueba', 'jose', 'tttttttt', 'zzzz', 'dddd', 0, '2019-03-25 01:52:28', ''),
(2, 6, 'calle palomino', 'carmen', '24140', 'mexico', 'campeche', 1, '2019-03-24 19:00:55', ''),
(3, 6, 'd', 'd', 'f', 'g', 'h', 1, '2019-03-25 01:52:55', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filtrocolor`
--

CREATE TABLE `filtrocolor` (
  `Consecutivo` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `UsuarioCrea` varchar(50) NOT NULL,
  `FechaCrea` datetime NOT NULL,
  `Valido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `filtrocolor`
--

INSERT INTO `filtrocolor` (`Consecutivo`, `Nombre`, `UsuarioCrea`, `FechaCrea`, `Valido`) VALUES
(1, 'ROSA', 'Usuario', '2018-10-20 16:26:54', 1),
(2, 'NEGRO', 'Usuario', '2018-10-09 05:20:58', 1),
(3, 'AZUL', 'Usuario', '2018-10-09 05:21:08', 1),
(4, 'SDFSDFSDFSD', 'Usuario', '2018-10-09 05:21:14', 0),
(5, 'sdfsdfsdfsdfdfds', 'Usuario', '2018-10-21 18:51:36', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filtroestampa`
--

CREATE TABLE `filtroestampa` (
  `Consecutivo` int(11) NOT NULL,
  `IdProducto` int(11) NOT NULL,
  `TipoFiltro` varchar(100) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `ImagenNameOrig` varchar(250) NOT NULL,
  `ImagenNameCam` varchar(250) NOT NULL,
  `Valido` int(11) NOT NULL,
  `UsuarioCrea` varchar(100) NOT NULL,
  `FechaCrea` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `filtroestampa`
--

INSERT INTO `filtroestampa` (`Consecutivo`, `IdProducto`, `TipoFiltro`, `Nombre`, `ImagenNameOrig`, `ImagenNameCam`, `Valido`, `UsuarioCrea`, `FechaCrea`) VALUES
(1, 0, '', 'prueba 2', 'CHALECO SALVVIDAS DEPORTIVO TIPO III.png', '10_21_2018_18_50_53.png', 0, 'Usuario', '2018-10-21 18:50:23'),
(2, 0, '', 'jkjkh', '180711_zeedog_cachorro_dropdown_starwars_brinquedo_stormtrooper1d41.jpg', '10_09_2018_07_43_47.jpg', 0, 'Usuario', '2018-10-09 07:43:41'),
(3, 1, 'Filtro Estampa', 'prueba33', 'disyuntor_tbqd330.png', '10_21_2018_18_51_09.png', 1, 'Usuario', '2018-10-21 18:51:04'),
(4, 1, 'Filtro Estampa', 'EJEMPLO FILTRO ESTAMPA2', '181015_zeedog_grid_principal_mobile_guia_milky_biscoito_800x400.jpg', '10_29_2018_02_25_27.jpg', 1, 'Usuario', '2018-10-29 02:25:10'),
(5, 1, 'Filtro Tipo', 'prueba filtro tipo1', '', '', 0, 'Usuario', '2018-10-29 02:21:20'),
(6, 1, 'Filtro Tamano', 'EJEMPLO2 F TAMANO', '', '', 1, 'Usuario', '2018-10-29 02:21:00'),
(7, 1, 'Filtro Estampa', 'SFSDFSDFSDFS', 'WhatsApp Image 2018-10-20 at 17.02.39.jpeg', '10_29_2018_02_27_29.jpeg', 0, 'Usuario', '2018-10-29 02:27:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filtrotamano`
--

CREATE TABLE `filtrotamano` (
  `Consecutivo` int(11) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `Valido` int(11) NOT NULL,
  `UsuarioCrea` varchar(100) NOT NULL,
  `FechaCrea` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `filtrotamano`
--

INSERT INTO `filtrotamano` (`Consecutivo`, `Nombre`, `Valido`, `UsuarioCrea`, `FechaCrea`) VALUES
(1, 'tamano2', 1, 'Usuario', '2018-10-21 18:38:27'),
(2, 'dfgdfg', 0, 'Usuario', '2018-10-10 05:15:29'),
(3, 'dfgdfg', 0, 'Usuario', '2018-10-10 05:15:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `filtrotipo`
--

CREATE TABLE `filtrotipo` (
  `Consecutivo` int(11) NOT NULL,
  `Nombre` varchar(250) NOT NULL,
  `Valido` int(11) NOT NULL,
  `UsuarioCrea` varchar(50) NOT NULL,
  `FechaCrea` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `filtrotipo`
--

INSERT INTO `filtrotipo` (`Consecutivo`, `Nombre`, `Valido`, `UsuarioCrea`, `FechaCrea`) VALUES
(1, 'prueba 2', 0, 'Usuario', '2018-10-21 18:28:43'),
(2, 'sdfsdfds', 1, 'Usuario', '2018-10-21 18:34:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagencomunidad`
--

CREATE TABLE `imagencomunidad` (
  `Id` int(11) NOT NULL,
  `ImgNameOriginal` text NOT NULL,
  `ImgNameCambiado` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `imagencomunidad`
--

INSERT INTO `imagencomunidad` (`Id`, `ImgNameOriginal`, `ImgNameCambiado`) VALUES
(4, 'Chrysanthemum.jpg', '12_10_2018_06_17_21.jpg'),
(5, 'Tulips.jpg', '12_10_2018_06_17_31.jpg'),
(7, 'Penguins.jpg', '12_10_2018_06_17_41.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `Consecutivo` int(11) NOT NULL,
  `IdUsuario` int(11) NOT NULL,
  `Nombre` varchar(250) COLLATE utf8_bin NOT NULL,
  `NumeroChip` varchar(250) COLLATE utf8_bin NOT NULL,
  `Especie` varchar(250) COLLATE utf8_bin NOT NULL,
  `Raza` varchar(200) COLLATE utf8_bin NOT NULL,
  `Color` varchar(100) COLLATE utf8_bin NOT NULL,
  `Valido` int(11) NOT NULL,
  `FechaCrea` datetime NOT NULL,
  `UsuarioCrea` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`Consecutivo`, `IdUsuario`, `Nombre`, `NumeroChip`, `Especie`, `Raza`, `Color`, `Valido`, `FechaCrea`, `UsuarioCrea`) VALUES
(1, 6, 'pelusa', '123-3456', '', 'french', 'negro', 1, '2019-03-25 17:10:44', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `Consecutivo` int(11) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `Logo` varchar(200) NOT NULL,
  `FechaCrea` datetime NOT NULL,
  `accesorapido` int(11) NOT NULL,
  `Valido` int(11) NOT NULL,
  `UsuarioCrea` varchar(100) NOT NULL,
  `Posicion` varchar(20) NOT NULL,
  `Url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`Consecutivo`, `Nombre`, `Logo`, `FechaCrea`, `accesorapido`, `Valido`, `UsuarioCrea`, `Posicion`, `Url`) VALUES
(1, 'prueba11', '', '0000-00-00 00:00:00', 0, 0, 'Usuario', '', ''),
(2, 'gsdffsd', '', '0000-00-00 00:00:00', 0, 0, 'Usuario', '', ''),
(3, 'PET ID', '', '0000-00-00 00:00:00', 1, 1, 'Usuario', 'Izquierda', ''),
(4, 'Gatos', '', '0000-00-00 00:00:00', 0, 0, 'Usuario', 'Izquierda', ''),
(5, 'Conocenos', '', '0000-00-00 00:00:00', 1, 1, 'Usuario', 'Derecha', 'http://google.com'),
(6, 'COOL PERRO', '', '0000-00-00 00:00:00', 0, 0, 'Usuario', 'Izquierda', ''),
(7, 'COOL CATS', '', '0000-00-00 00:00:00', 0, 0, 'Usuario', 'Izquierda', ''),
(8, 'PESOAS', '', '0000-00-00 00:00:00', 0, 0, 'Usuario', 'Izquierda', ''),
(9, 'PERROS', '', '0000-00-00 00:00:00', 0, 1, 'Usuario', 'Izquierda', ''),
(10, 'GATOS', '', '0000-00-00 00:00:00', 0, 1, 'Usuario', 'Izquierda', ''),
(11, 'COOLPETers', '', '0000-00-00 00:00:00', 0, 1, 'Usuario', 'Izquierda', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paginaayuda`
--

CREATE TABLE `paginaayuda` (
  `id` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `descripcion` text NOT NULL,
  `idtipoayuda` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `mostrar` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paginaayuda`
--

INSERT INTO `paginaayuda` (`id`, `titulo`, `descripcion`, `idtipoayuda`, `usuario`, `mostrar`) VALUES
(5, '¿Puedo añadir (o quitar) productos de una solicitud ya efectuada?', '<p><strong>Desafortunadamente, una vez que la solicitud ha sido realizada, no podemos cambiar nada de &eacute;l.</strong><br /></p><p>Si tiene alguna pregunta sobre un pedido existente, por favor, contacte con nosotros por correo electr&oacute;nico contacto@coolpet.mx informando el n&uacute;mero de pedido.<br /></p><p></p>', 3, 'Usuario', 1),
(6, '¿Puedo cambiar el método de envío de una solicitud ya efectuada?', '<p>Tambi&eacute;n no es posible. Una vez realizada la solicitud, no podemos cambiar el m&eacute;todo de env&iacute;o que se haya elegido.<br /><strong></strong></p><p></p>', 3, 'Usuario', 1),
(7, 'Donde puedo conseguir sus productos?', '<p><br />Nuestros productos se pueden encontrar justamente donde usted est&aacute; ahora! &iexcl;En nuestra p&aacute;gina! En un futuro muy pr&oacute;ximo ya vamos a tener quioscos esparcidos por algunas ciudades.</p>', 1, 'Usuario', 1),
(8, '¿Y los fletes de la devolución del producto para el cambio y envío de los nuevos productos?', '<p>Si usted solicita el cambio en hasta 07 (siete) d&iacute;as contados a partir de la fecha de recepci&oacute;n de sus productos, los costos de env&iacute;o de devoluci&oacute;n y nuevo env&iacute;o (si existe) son por nuestra cuenta.<br /></p><p>Si usted solicita el cambio despu&eacute;s de estos 7 (siete) d&iacute;as, el env&iacute;o de devoluci&oacute;n y nuevo env&iacute;o de env&iacute;o (si existe), no son cubiertos por COOLPET.<br /></p><p></p>', 2, 'Usuario', 1),
(10, '¿Cuánto cuesta enviar mi compra a mi casa?', 'Si usted invierte m&aacute;s de $ 800,00 MX en la adquisici&oacute;n de nuestros incre&iacute;bles productos, no va a costar nada, porque la gente paga el flete!<br /><br />En final de cada compra hay un campo donde t&uacute; agrega el c&oacute;digo postal de tu domicilio, con eso se calcula el precio de flete para su domicilio.&nbsp;', 4, 'Usuario', 1),
(11, '¿Como puedo saber si mi producto tiene garantia y por cuanto tiempo?', 'Nuestra garant&iacute;a asegura el cambio del producto, en cualquier momento, en caso de comprobaci&oacute;n de defectos de fabricaci&oacute;n.<br /><br />La garant&iacute;a no se aplica, sin embargo, a casos de mal uso, desgaste natural a lo largo del tiempo, uso indebido, negligencia, o cualquier modificaci&oacute;n hecha en el producto que comprometa su integridad.<br /><br />Para solicitar el uso de nuestra garant&iacute;a basta enviar un e-mail a contacto@coolpet.mx adjuntando 2 (dos) fotos y / o videos del defecto que motiv&oacute; el pedido.<br /><br />Las im&aacute;genes ser&aacute;n evaluadas por el sector de an&aacute;lisis para verificar la existencia, o no, de los factores que respaldan la emisi&oacute;n de la garant&iacute;a.<br /><br />Si no es posible establecer un diagn&oacute;stico (positivo o negativo) a trav&eacute;s de las fotos enviadas, solicitaremos el env&iacute;o del producto para su an&aacute;lisis.<br /><br />Se aprob&oacute; la emisi&oacute;n de la garant&iacute;a, procedimos con el cambio del producto defectuoso por un producto id&eacute;ntico o, si &eacute;ste no est&aacute; disponible en nuestras existencias, por cualquier otro de igual valor.', 5, 'Usuario', 1),
(12, '¿Cómo funciona el programa COOLPET SQUAD?  ', 'COOLPET SQUAD es nuestro programa de Embajadores desarrollado especialmente por COOLPET. Conozca los Asociados de COOLPET SQUAD en http://www.coolpet.mx/SQUAD. Deseas hacer parte? Escr&iacute;benos contacto@coolpet.mx.', 6, 'Usuario', 1),
(15, 'Estoy loco detrás de un diseño personalizado. ¿Qué hago?', 'Si deseas un dise&ntilde;o personalizado para tu COOLPET ID, en el submenu CREA TU PROPRIO DISE&Ntilde;O. T&uacute; puedes crear tu proprio dise&ntilde;o en enviar para nuestro equipo para creaci&oacute;n.&nbsp;', 1, 'Usuario', 1),
(16, 'Cuando van a tener más productos, a parte del COOLPET ID? ', 'Tenemos planeado de ya tener los otros productos: Collar, Correa, Harness, Keychain, Vasos, Goras, etc... para Febrero de 2019. Aguarden...', 1, 'Usuario', 1),
(17, '¿Puedo cambiar el método de envío de una solicitud ya efectuada?', 'Tambi&eacute;n no es posible. Una vez realizada la solicitud, no podemos cambiar el m&eacute;todo de env&iacute;o que se haya elegido.', 3, 'Usuario', 1),
(18, 'Mi vínculo de seguimiento no funciona, ¿qué ha ocurrido? ', 'Si su pedido ha sido hecho hace un m&aacute;ximo de dos d&iacute;as, esta demora es completamente normal, porque su pedido debe ser integrado al sistema del transportista. Si ha pasado de ese plazo, manda un e-mail para nosotros (Contato@coolpet.mx)', 3, 'Usuario', 1),
(19, 'Creo que mi producto ha presentado un defecto de fabricación. ¿Puedo cambiar?', 'Por supuesto! No s&oacute;lo puede como debe! Nos preguntamos, una vez constatado defecto de fabricaci&oacute;n, cambiar el producto por uno nuevo, garantizando la alegr&iacute;a y seguridad de su animal.<br /><br />Para accionar su Garant&iacute;a COOLPET contra defectos de fabricaci&oacute;n, usted puede enviar un e-mail con dos fotos del producto defectuoso para contacto@coolpet.mx<br />', 2, 'Usuario', 1),
(20, '¿COOLPET patrocina eventos? ', 'Si desea presentar alg&uacute;n release, o saber m&aacute;s sobre la participaci&oacute;n de COOLPET en eventos, entre en contacto con nosotros por e-mail contacto@contacto.mx', 6, 'Usuario', 1),
(21, 'Necesito fotos en alta resolución para ilustrar una materia. ¿Como puedo?', '&iexcl;S&oacute;lo pedir aqui: contato@coolpet.mx', 6, 'Usuario', 1),
(22, 'dsfads', 'asdfas', 7, 'Usuario', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paginablog`
--

CREATE TABLE `paginablog` (
  `id` int(11) NOT NULL,
  `textoImagen` text NOT NULL,
  `textoTitulo` text NOT NULL,
  `textoDescripcion` text NOT NULL,
  `url` text NOT NULL,
  `imagenOriginal` text NOT NULL,
  `imagenCambiada` text NOT NULL,
  `usuario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paginablog`
--

INSERT INTO `paginablog` (`id`, `textoImagen`, `textoTitulo`, `textoDescripcion`, `url`, `imagenOriginal`, `imagenCambiada`, `usuario`) VALUES
(2, 'Marcas', 'Marcas:', '<p>Conozca nuestras nuevas marcas</p><p>traidas para usted</p>', '#', '180914_zeedog_grid_principal_desktop_prisma_mesh_480x480.jpg', '12_09_2018_18_16_45.jpg', 'Usuario'),
(3, 'Sobre', 'Conectando a Mascotas y Personas:', '<p>Creando una comunidad nueva</p><p></p>', '#', '180914_zeedog_grid_principal_desktop_cachorro_dispensers_480x480.jpg', '12_09_2018_18_16_01.jpg', 'Usuario'),
(4, 'COOLPET NO SPOTIFY', 'Creando una comunidad nueva:', '<p>ESCUCHA TU CANCION FAVORITA CON NUESTRAS PINCHES CANCIONES</p><p></p>', '#', 'Mesa de trabajo 1.png', '12_21_2018_21_48_23.png', 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paginacontacto`
--

CREATE TABLE `paginacontacto` (
  `texto` text NOT NULL,
  `imagen` text NOT NULL,
  `correo1` text NOT NULL,
  `correo2` text NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `imagenInterna` text NOT NULL,
  `imagenThumb` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paginacontacto`
--

INSERT INTO `paginacontacto` (`texto`, `imagen`, `correo1`, `correo2`, `usuario`, `imagenInterna`, `imagenThumb`) VALUES
('<p><strong>asdcasdasdasd</strong></p><p><strong></strong></p><a href=\"http://google.com\">visitame</a>', 'facturabuburja2.jpg', 'asdasfasf', 'asdasdasdasda', 'Usuario', '10_14_2018_22_56_16.jpg', 'thumb10_14_2018_22_56_16.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paginamarca`
--

CREATE TABLE `paginamarca` (
  `titulo` text NOT NULL,
  `textoTitulo` text NOT NULL,
  `subtitulo1` text NOT NULL,
  `textoSubtitulo1` text NOT NULL,
  `subtitulo2` text NOT NULL,
  `textoSubtitulo2` text NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `imagen` text NOT NULL,
  `imagenInterna` text NOT NULL,
  `imagenThumb` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paginamarca`
--

INSERT INTO `paginamarca` (`titulo`, `textoTitulo`, `subtitulo1`, `textoSubtitulo1`, `subtitulo2`, `textoSubtitulo2`, `usuario`, `imagen`, `imagenInterna`, `imagenThumb`) VALUES
('ewweweg', 'sadfasfasDFASDFADSFA', 'asdasdDFASDFASDFASDFASDAFA', 'asdasdasdasDFASDFASDFASDFA', 'test', '<p><strong>yrsdfdfsdfsd</strong></p><p><em><span style=\"text-decoration:underline;\">dfsdfsd</span></em><strong></strong></p>', 'Usuario', 'facturaburbuja1.jpg', '10_14_2018_22_31_45.jpg', 'thumb10_14_2018_22_31_45.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paginasucursales`
--

CREATE TABLE `paginasucursales` (
  `nombre` text NOT NULL,
  `direccion` text NOT NULL,
  `telefonos` text NOT NULL,
  `horario` text NOT NULL,
  `dias` text NOT NULL,
  `imagen` text NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `id` int(11) NOT NULL,
  `imagenInterna` text NOT NULL,
  `imagenThumb` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paginasucursales`
--

INSERT INTO `paginasucursales` (`nombre`, `direccion`, `telefonos`, `horario`, `dias`, `imagen`, `usuario`, `id`, `imagenInterna`, `imagenThumb`) VALUES
('matriz', 'laguna azul', '5547148560', '16:00 - 20:00', 'lunes a sabado', 'jet.jpg', 'Usuario', 1, '10_14_2018_23_35_49.jpg', 'thumb10_14_2018_23_35_49.jpg'),
('asdasdasd', 'asdasdas', '', '', '', 'rubymine.png', 'Usuario', 5, '10_14_2018_23_34_11.png', 'thumb10_14_2018_23_34_11.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `politicas`
--

CREATE TABLE `politicas` (
  `id` int(11) NOT NULL,
  `texto` text NOT NULL,
  `link` text NOT NULL,
  `usuario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `politicas`
--

INSERT INTO `politicas` (`id`, `texto`, `link`, `usuario`) VALUES
(2, 'Codigo de politica del consumidor', 'http://www.planalto.gov.br/ccivil_03/leis/l8078.htm', 'Usuario'),
(3, 'Politica de privacidad', 'http://www.planalto.gov.br/ccivil_03/leis/l8078.htm', 'Usuario'),
(4, 'Terminos y condiciones', 'http://www.planalto.gov.br/ccivil_03/leis/l8078.htm', 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `Consecutivo` int(11) NOT NULL,
  `IdSubMenu` int(11) NOT NULL,
  `Titulo` varchar(250) NOT NULL,
  `SubTitulo` varchar(250) NOT NULL,
  `Precio` decimal(10,0) NOT NULL,
  `ImagenNameOrig` varchar(250) NOT NULL,
  `ImagenNameCam` varchar(250) NOT NULL,
  `Detalle` varchar(2000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `UltimoLanzamiento` int(11) NOT NULL,
  `Valido` int(11) NOT NULL,
  `UsuarioCrea` varchar(50) NOT NULL,
  `FechaCrea` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`Consecutivo`, `IdSubMenu`, `Titulo`, `SubTitulo`, `Precio`, `ImagenNameOrig`, `ImagenNameCam`, `Detalle`, `UltimoLanzamiento`, `Valido`, `UsuarioCrea`, `FechaCrea`) VALUES
(1, 22, 'Collar para Gatos', 'Atlanta', '234', 'Mesa de trabajo 1.png', '12_21_2018_20_26_54.png', 'COOLPET ID personalizado', 1, 0, 'Usuario', '2018-12-21 20:26:55'),
(2, 15, 'dfgdf', 'dfgdfg', '1900', '', '', '', 0, 0, 'Usuario', '2018-10-15 01:03:08'),
(3, 15, 'dfgdf', 'dfgdfg', '1900', '', '', '', 0, 0, 'Usuario', '2018-10-15 01:03:18'),
(4, 15, 'dfgdf', 'dfgdfg', '1900', '', '', '', 0, 0, 'Usuario', '2018-10-15 01:03:19'),
(5, 15, 'fgsg', 'sdfsdf', '23', '', '', '', 0, 0, 'Usuario', '2018-10-15 01:06:42'),
(6, 15, 'vxcv', 'xcvxcv', '15', 'coleira-para-gatos_atlanta_zeecat_gato_pet_active.jpg', '10_15_2018_01_09_12.jpg', '', 0, 0, 'Usuario', '2018-10-15 01:08:59'),
(7, 15, 'SDFSDFD', 'DFSDFSD', '150', 'WhatsApp Image 2018-10-20 at 17.02.39.jpeg', '10_29_2018_02_29_16.jpeg', '<ul><li>FSDFDFSD</li><li>DFSD</li><li>FSF</li><li>SDF</li><li>SDF</li><li>SD</li></ul>', 0, 0, 'Usuario', '2018-10-29 02:29:09'),
(8, 15, 'DFSD', 'SDFSDF', '140', 'WhatsApp Image 2018-10-20 at 17.02.39.jpeg', '10_29_2018_02_34_49.jpeg', '<ol><li>1DFG</li><li>2DFGDFG</li></ol>', 0, 0, 'Usuario', '2018-10-29 02:34:44'),
(9, 15, 'XXXX', 'XXXX', '140', 'Mesa de trabajo 2.png', '12_21_2018_20_27_03.png', '<p></p><ol><li>XCV</li><li>XCV</li><li>XCV</li><li>XCV</li><li>X</li></ol>', 1, 0, 'Usuario', '2018-12-21 20:27:04'),
(10, 23, 'cats', '', '2', 'Mesa de trabajo 4.png', '12_21_2018_20_27_11.png', '', 0, 0, 'Usuario', '2018-12-21 20:27:12'),
(11, 15, 'NUEVA COLECCION', 'AFFF', '450', 'Mesa de trabajo 1.png', '12_21_2018_20_38_20.png', '', 1, 0, 'Usuario', '2018-12-21 20:46:12'),
(12, 15, 'ONYX', 'COOLPET ID', '450', 'Mesa de trabajo 4.png', '12_21_2018_20_39_35.png', '', 0, 0, 'Usuario', '2018-12-21 20:41:03'),
(13, 22, 'LLAMA', '', '450', 'Mesa de trabajo 2.png', '12_21_2018_20_42_46.png', '', 0, 0, 'Usuario', '2018-12-21 20:42:57'),
(14, 23, 'ONYX', '', '450', 'Mesa de trabajo 4.png', '12_21_2018_20_42_36.png', '', 0, 0, 'Usuario', '2018-12-21 20:42:37'),
(15, 15, 'CISNEY', 'COOLPET', '450', 'Mesa de trabajo 1.png', '12_21_2018_20_47_03.png', '', 0, 0, 'Usuario', '2018-12-21 20:47:04'),
(16, 22, 'LLAMA', 'LLAMA 2', '450', 'Mesa de trabajo 2.png', '12_21_2018_20_47_41.png', '', 1, 0, 'Usuario', '2018-12-21 20:47:42'),
(17, 23, 'PET CATS2', 'PET CATS 3', '450', 'Mesa de trabajo 4.png', '12_21_2018_21_09_55.png', '', 1, 0, 'Usuario', '2018-12-21 21:09:55'),
(18, 20, 'COLECCION NUEVA', 'NUEVA 2', '450', 'Mesa de trabajo 1.png', '12_21_2018_21_11_46.png', '', 1, 0, 'Usuario', '2018-12-21 21:11:47'),
(19, 33, 'COOLPET', 'PET ID', '450', 'ABACATE R.png', '01_05_2019_13_42_36.png', '', 0, 1, 'Usuario', '2019-01-05 13:42:36'),
(20, 22, 'COOLPET ', 'PET PET', '450', 'Mesa de trabajo 2.png', '12_21_2018_21_31_19.png', '', 1, 1, 'Usuario', '2018-12-21 21:32:15'),
(21, 23, 'COOLPET PT', 'PET2', '450', 'Mesa de trabajo 4.png', '12_21_2018_21_32_36.png', '', 1, 1, 'Usuario', '2018-12-21 21:32:37'),
(22, 20, 'COOLPET 2', '', '450', 'LOGO TOP.png', '12_21_2018_21_33_31.png', '', 1, 0, 'Usuario', '2018-12-21 21:33:32'),
(23, 20, 'PRODUCTO 1', 'SUB', '4500', 'MAMAMIA R.png', '01_05_2019_13_39_39.png', '', 1, 1, 'Usuario', '2019-01-05 13:39:54'),
(24, 32, 'PRODUTO 1', 'PRO', '4500', 'TACO R.png', '01_05_2019_13_43_22.png', '', 1, 1, 'Usuario', '2019-01-05 13:43:23'),
(25, 28, 'PRO 2 ', 'PRO 3', '400', 'AHUEVO R.png', '01_05_2019_13_44_26.png', '', 1, 1, 'Usuario', '2019-01-05 13:44:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `slider`
--

CREATE TABLE `slider` (
  `Consecutivo` int(11) NOT NULL,
  `Titulo` varchar(100) NOT NULL,
  `SubTitulo` varchar(100) NOT NULL,
  `Posicion` varchar(50) NOT NULL,
  `ImagenNameOrig` varchar(250) NOT NULL,
  `ImagenNameCam` varchar(250) NOT NULL,
  `ImagenNameOrigMobile` varchar(250) NOT NULL,
  `ImagenNameCamMobile` varchar(250) NOT NULL,
  `Valido` int(11) NOT NULL,
  `UsuarioCrea` varchar(50) NOT NULL,
  `FechaCrea` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `slider`
--

INSERT INTO `slider` (`Consecutivo`, `Titulo`, `SubTitulo`, `Posicion`, `ImagenNameOrig`, `ImagenNameCam`, `ImagenNameOrigMobile`, `ImagenNameCamMobile`, `Valido`, `UsuarioCrea`, `FechaCrea`) VALUES
(1, 'MONTAÑA', 'SUBMENU', 'Izquierda', '180914_zeedog_grid_principal_desktop_cachorro_dispensers_480x480.jpg', '11_11_2018_06_55_29.jpg', 'Koala.jpg', '11_11_2018_16_45_59.jpg', 0, 'Usuario', '2018-11-27 01:46:28'),
(2, 'zc', 'cz', 'Derecha', '180914_zeedog_grid_principal_desktop_prisma_mesh_480x480.jpg', '11_11_2018_15_42_22.jpg', 'chart.png', '12_10_2018_16_10_42.png', 0, 'Usuario', '2018-11-11 15:42:12'),
(3, 'arriba', 'arriba', 'Arriba', 'chart(2).png', '12_10_2018_16_11_09.png', 'WhatsApp Image 2018-09-26 at 16.55.49.jpeg', '12_10_2018_16_11_23.jpeg', 0, 'Usuario', '2018-11-11 15:42:37'),
(4, 'abajo', 'abajo', 'Abajo', 'COOLpet.png', '12_10_2018_16_12_50.png', 'chart(1).png', '12_10_2018_16_13_01.png', 0, 'Usuario', '2018-11-11 15:42:53'),
(5, 'IZQUIERDA2', 'SUBIZQUIERDA2', 'Izquierda', 'Captura.PNG', '11_27_2018_01_49_15.PNG', '', '', 0, 'Usuario', '2018-11-27 01:49:04'),
(6, 'IZQUIERDA3', 'SUBIZQUIERD3', 'Izquierda', 'Captura.PNG', '11_27_2018_01_51_55.PNG', '', '', 0, 'Usuario', '2018-11-27 01:51:36'),
(7, 'COOLPET ID', 'CUQUI CARRION', 'Izquierda', 'naue2.jpg', '12_21_2018_01_27_52.jpg', '', '', 0, 'Usuario', '2018-12-21 01:41:11'),
(8, 'COOLPET ID 2', 'CUQUI', 'Derecha', 'frida1.jpg', '12_21_2018_01_28_39.jpg', '', '', 0, 'Usuario', '2018-12-21 01:28:43'),
(9, 'NAUE', 'D', 'Arriba', '', '', '', '', 0, 'Usuario', '2018-12-21 01:30:13'),
(10, 'CUQUI CARRION', 'COOLPET ID', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 01:42:44'),
(11, 'CUQUI CARRION', '.', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 01:43:39'),
(12, 'd', 'd', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 01:44:44'),
(13, 'f', 'f', 'Derecha', '', '', '', '', 0, 'Usuario', '2018-12-21 01:46:00'),
(14, 'CUQUI', 'COOLPET', 'Izquierda', 'Mesa de trabajo 1.png', '12_21_2018_02_24_35.png', 'Mesa de trabajo 7.png', '12_21_2018_02_30_57.png', 0, 'Usuario', '2018-12-21 02:31:00'),
(15, 'MAYA', 'COOLPET', 'Derecha', 'Mesa de trabajo 5.png', '12_21_2018_02_25_09.png', 'Mesa de trabajo 8.png', '12_21_2018_02_31_11.png', 0, 'Usuario', '2018-12-21 02:31:12'),
(16, 'NAUE', 'COOLPET', 'Arriba', 'Mesa de trabajo 3.png', '12_21_2018_02_25_28.png', 'Mesa de trabajo 1.png', '12_21_2018_02_31_19.png', 0, 'Usuario', '2018-12-21 02:31:20'),
(17, 'TACO', 'COOLPET', 'Arriba', 'Mesa de trabajo 4.png', '12_21_2018_02_25_42.png', '', '', 0, 'Usuario', '2018-12-21 02:25:43'),
(18, 'TACO', 'COOLPET', 'Abajo', 'Mesa de trabajo 4.png', '12_21_2018_02_26_43.png', 'Mesa de trabajo 6.png', '12_21_2018_02_31_29.png', 0, 'Usuario', '2018-12-21 02:31:32'),
(19, 'CUQUI', 'CARRION', 'Izquierda', 'DESKTOPMesa de trabajo 1.jpg', '12_21_2018_17_12_23.jpg', '', '', 0, 'Usuario', '2018-12-21 17:12:22'),
(20, 'CUQUI', 'CARRION', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 17:13:53'),
(21, 'CUQUI', 'CARRION', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 17:13:31'),
(22, 'CUQUI', 'CARRION', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 17:13:32'),
(23, 'CUQUI', 'CARRION', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 17:13:45'),
(24, 'CUQUI', 'CARRION', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 17:13:49'),
(25, 'CUQUI', 'CARRION', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 17:13:56'),
(26, 'CUQUI', 'CARRION', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 17:14:46'),
(27, 'CUQUI', 'CARRION', 'Izquierda', '', '', '', '', 0, 'Usuario', '2018-12-21 17:14:42'),
(28, 'TACO', 'HILLER', 'Arriba', 'Mesa de trabajo 4.png', '12_21_2018_17_16_00.png', '', '', 1, 'Usuario', '2018-12-21 17:16:04'),
(29, 'NAUE ', 'KATRINA', 'Abajo', 'Mesa de trabajo 3.png', '12_21_2018_17_16_40.png', '', '', 1, 'Usuario', '2018-12-21 17:16:41'),
(30, 'CUQUI ', 'CARRION', 'Izquierda', 'Mesa de trabajo 1.png', '12_21_2018_22_03_21.png', '', '', 1, 'Usuario', '2018-12-23 01:36:55'),
(31, 'MAYA', '.', 'Derecha', 'Mesa de trabajo 5.png', '12_21_2018_17_17_40.png', '', '', 1, 'Usuario', '2018-12-21 17:18:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `submenu`
--

CREATE TABLE `submenu` (
  `Consecutivo` int(11) NOT NULL,
  `IdMenu` int(11) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `ImagenNameOrig` varchar(250) NOT NULL,
  `ImagenNameCam` varchar(250) NOT NULL,
  `FiltroColor` int(11) NOT NULL,
  `FiltroEstampa` int(11) NOT NULL,
  `FiltroTamano` int(11) NOT NULL,
  `FiltroTipo` int(11) NOT NULL,
  `Valido` int(11) NOT NULL,
  `UsuarioCrea` varchar(100) NOT NULL,
  `FechaCrea` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `submenu`
--

INSERT INTO `submenu` (`Consecutivo`, `IdMenu`, `Nombre`, `ImagenNameOrig`, `ImagenNameCam`, `FiltroColor`, `FiltroEstampa`, `FiltroTamano`, `FiltroTipo`, `Valido`, `UsuarioCrea`, `FechaCrea`) VALUES
(1, 3, 'ryryrt', 'trabajamos.JPG', '10_07_2018_06_43_46.JPG', 0, 0, 0, 0, 0, 'Usuario', '0000-00-00 00:00:00'),
(2, 3, 'gdfdfgg', '', '', 0, 0, 0, 0, 0, 'Usuario', '0000-00-00 00:00:00'),
(3, 3, 'asdsadasd', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 05:49:17'),
(4, 3, 'yuyiiuy', 'Untitled.jpg', '10_07_2018_18_50_39.jpg', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 18:47:21'),
(5, 3, 'wwerrwe', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 18:50:48'),
(6, 3, 'gtsdfds', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 18:51:50'),
(7, 3, 'fgdfgdfgg', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 19:33:39'),
(8, 3, 'df', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 19:42:59'),
(9, 4, 'cvxcvxcvxc', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 19:45:49'),
(10, 3, 'hgfh', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 19:47:25'),
(11, 3, 'yrtyyr', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 19:47:59'),
(12, 3, 'rytryyt', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 19:49:22'),
(13, 3, 'dfhhh', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 19:52:16'),
(14, 3, 'khjkl', 'Captura.JPG', '10_07_2018_19_55_25.JPG', 0, 0, 0, 0, 0, 'Usuario', '2018-10-07 19:55:16'),
(15, 3, 'Colección coloré', 'Mesa de trabajo 1.png', '12_21_2018_21_36_21.png', 1, 1, 1, 1, 1, 'Usuario', '2018-12-23 01:44:15'),
(16, 4, 'Collares', 'zeecat_gato_banner_categoria_coleira_2560.jpg', '10_14_2018_17_32_11.jpg', 0, 0, 0, 0, 1, 'Usuario', '2018-10-14 16:15:39'),
(17, 4, 'dfgfd', 'zeecat_gato_banner_categoria_coleira_2560.jpg', '10_14_2018_17_34_07.jpg', 0, 0, 0, 0, 0, 'Usuario', '2018-10-14 17:34:02'),
(18, 4, 'rthgdfgdg', 'zeecat_gato_banner_categoria_coleira_2560.jpg', '10_14_2018_17_43_50.jpg', 0, 0, 0, 0, 0, 'Usuario', '2018-10-14 17:37:03'),
(19, 3, 'COLECCIÓN PETCHIC', 'CAVEIRA.jpg', '12_10_2018_00_39_07.jpg', 0, 1, 1, 1, 1, 'Usuario', '2018-12-10 00:39:10'),
(20, 3, 'colección Yummy', '', '', 0, 1, 1, 1, 1, 'Usuario', '2018-12-10 00:44:29'),
(21, 3, 'CREA TU COOLPET ID', 'HIPPIE.jpg', '12_10_2018_00_50_57.jpg', 0, 1, 1, 1, 0, 'Usuario', '2018-12-10 00:51:01'),
(22, 6, 'New Collection', '', '', 0, 0, 0, 0, 1, 'Usuario', '2018-12-10 16:00:56'),
(23, 7, 'New Collection', '', '', 0, 0, 0, 0, 1, 'Usuario', '2018-12-10 16:09:42'),
(24, 3, 'cooll pepe cassio', 'Mesa de trabajo 5.png', '12_21_2018_22_07_04.png', 0, 0, 0, 0, 0, 'Usuario', '2018-12-21 22:07:06'),
(25, 8, 'LLAVERO', '', '', 1, 1, 1, 1, 1, 'Usuario', '2018-12-23 01:48:11'),
(26, 8, 'TAZAS', '', '', 1, 1, 1, 1, 1, 'Usuario', '2018-12-23 01:48:29'),
(27, 3, 'COLLECION CARTOONCOOL', '', '', 1, 1, 1, 1, 1, 'Usuario', '2018-12-23 01:51:20'),
(28, 11, 'TAZA', '', '', 1, 1, 1, 1, 1, 'Usuario', '2018-12-23 01:55:13'),
(29, 11, 'LLAVAERO', '', '', 1, 1, 1, 1, 1, 'Usuario', '2018-12-23 01:55:26'),
(30, 3, 'prueba jose', '', '', 0, 0, 0, 0, 0, 'Usuario', '2018-12-23 21:32:12'),
(31, 3, 'CREA TU COOLPET ID', '', '', 1, 1, 1, 1, 1, 'Usuario', '2018-12-31 17:41:14'),
(32, 10, 'COLLAR', '', '', 1, 1, 1, 1, 1, 'Usuario', '2019-01-05 13:40:51'),
(33, 9, 'COLLAR', '', '', 1, 1, 1, 1, 1, 'Usuario', '2019-01-05 13:41:01'),
(34, 9, 'GUIAS', '', '', 1, 1, 1, 1, 1, 'Usuario', '2019-01-05 13:41:11'),
(35, 10, 'GUIAS', '', '', 1, 1, 1, 1, 1, 'Usuario', '2019-01-05 13:41:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoayuda`
--

CREATE TABLE `tipoayuda` (
  `id` int(11) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipoayuda`
--

INSERT INTO `tipoayuda` (`id`, `descripcion`) VALUES
(1, 'Nuestros Productos'),
(2, 'Cambios y Devoluciones'),
(3, 'Compras'),
(4, 'Entregas'),
(5, 'Garantias'),
(6, 'Medios y Eventos'),
(7, 'Programa de Indicación'),
(8, 'Comercial');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id` int(11) NOT NULL,
  `Usuario` varchar(10) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Rol` varchar(50) NOT NULL DEFAULT 'administrador',
  `Valido` int(11) NOT NULL DEFAULT '1',
  `Mail` varchar(500) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Apellido` varchar(100) NOT NULL,
  `Sexo` int(11) NOT NULL,
  `FechaNacimiento` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id`, `Usuario`, `Password`, `Rol`, `Valido`, `Mail`, `Nombre`, `Apellido`, `Sexo`, `FechaNacimiento`) VALUES
(1, 'admin', 'a544e0609e5f1ebf99db036bc9740d82d7da2ce0', 'administrador', 1, 'contacto@coolpet.mx', 'Cássio ', 'Pereira', 0, '0000-00-00'),
(5, 'chuy1', 'a5083dfb85980adefa5f376b49899e24342359f5', 'administrador', 1, 'jesus.garciaflores87@gmail.com', 'jesus', 'garcia', 0, '0000-00-00'),
(6, 'Jose', 'a544e0609e5f1ebf99db036bc9740d82d7da2ce0', 'usuario', 1, 'nakat@live.com.mx', 'Jose del Carmen', ' Hernandez Izquierdo', 1, '2019-03-21'),
(7, 'dfsd', '7b52009b64fd0a2a49e6d8a939753077792b0554', 'usuario', 1, 'dfsd', 'dfsf', 'dsfsd', 0, '0000-00-00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `direccionenvio`
--
ALTER TABLE `direccionenvio`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `filtrocolor`
--
ALTER TABLE `filtrocolor`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `filtroestampa`
--
ALTER TABLE `filtroestampa`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `filtrotamano`
--
ALTER TABLE `filtrotamano`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `filtrotipo`
--
ALTER TABLE `filtrotipo`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `paginaayuda`
--
ALTER TABLE `paginaayuda`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paginablog`
--
ALTER TABLE `paginablog`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paginasucursales`
--
ALTER TABLE `paginasucursales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `politicas`
--
ALTER TABLE `politicas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `submenu`
--
ALTER TABLE `submenu`
  ADD PRIMARY KEY (`Consecutivo`);

--
-- Indices de la tabla `tipoayuda`
--
ALTER TABLE `tipoayuda`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `direccionenvio`
--
ALTER TABLE `direccionenvio`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `filtrocolor`
--
ALTER TABLE `filtrocolor`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `filtroestampa`
--
ALTER TABLE `filtroestampa`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `filtrotamano`
--
ALTER TABLE `filtrotamano`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `filtrotipo`
--
ALTER TABLE `filtrotipo`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `paginaayuda`
--
ALTER TABLE `paginaayuda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `paginablog`
--
ALTER TABLE `paginablog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `paginasucursales`
--
ALTER TABLE `paginasucursales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `politicas`
--
ALTER TABLE `politicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `slider`
--
ALTER TABLE `slider`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `submenu`
--
ALTER TABLE `submenu`
  MODIFY `Consecutivo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `tipoayuda`
--
ALTER TABLE `tipoayuda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
