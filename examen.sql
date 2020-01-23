-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-01-2020 a las 20:37:30
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examen`
--

CREATE TABLE `examen` (
  `IdExamen` int(11) NOT NULL,
  `Nombre` varchar(200) DEFAULT NULL,
  `Descripcion` varchar(500) DEFAULT NULL,
  `Clave` varchar(2) DEFAULT NULL,
  `Tiempo` int(11) DEFAULT NULL,
  `CalificacionAprobatoria` decimal(18,6) DEFAULT NULL,
  `FechaCrea` datetime DEFAULT CURRENT_TIMESTAMP,
  `Usuario_Id` int(11) NOT NULL,
  `CantidadPreguntas` int(11) DEFAULT NULL,
  `Valido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `examen`
--

INSERT INTO `examen` (`IdExamen`, `Nombre`, `Descripcion`, `Clave`, `Tiempo`, `CalificacionAprobatoria`, `FechaCrea`, `Usuario_Id`, `CantidadPreguntas`, `Valido`) VALUES
(1, 'Evaluacion de Señalamientos', 'Examen para evaluar a los usuarios sobre los señalamientos.', 'LM', 30, '80.000000', NULL, 2, 20, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `IdPregunta` int(11) NOT NULL,
  `Tipo` int(11) DEFAULT NULL,
  `Nombre` varchar(1000) DEFAULT NULL,
  `Valor` decimal(18,6) DEFAULT NULL,
  `UrlImagen` varchar(200) DEFAULT NULL,
  `Valido` int(11) DEFAULT NULL,
  `FechaCrea` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioCrea` varchar(50) DEFAULT NULL,
  `Examen_IdExamen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`IdPregunta`, `Tipo`, `Nombre`, `Valor`, `UrlImagen`, `Valido`, `FechaCrea`, `UsuarioCrea`, `Examen_IdExamen`) VALUES
(1, 1, 'El control del tránsito se realiza mediante señales y dispositivos reglamentarios, Humanas, Gráficas, Electromecánicas, Marcas en el pavimento y Sonoras.', '0.000000', '', 1, NULL, 'admin', 1),
(2, 1, 'Existen tres tipos de señales gráficas, ¿Cuáles son?', '0.000000', '', 1, NULL, 'admin', 1),
(3, 1, '¿Cuál es el objeto de las señales restrictivas', '0.000000', '', 1, NULL, 'admin', 1),
(4, 1, '¿Qué significa la luz roja?', '0.000000', '', 1, NULL, 'admin', 1),
(5, 1, '¿Cuál es la velocidad máxima en la ciudad', '0.000000', '', 1, NULL, 'admin', 1),
(6, 1, 'Factores que intervienen en los accidentes de tránsito:', '0.000000', '', 1, NULL, 'admin', 1),
(7, 1, '¿Qué es transito?', '0.000000', '', 1, NULL, 'admin', 1),
(8, 1, '¿Qué indica las líneas continuas a la orilla del camino?', '0.000000', '', 1, NULL, 'admin', 1),
(9, 1, '¿Cuál es el dispositivo de seguridad que evita que el impacto sea mayor en un choque de transito?', '0.000000', '', 1, NULL, 'admin', 1),
(10, 1, '¿Cuáles son las obligaciones tanto como conductor y acompañante que debe de hacer al momento de descender del vehículo?', '0.000000', '', 1, NULL, 'admin', 1),
(11, 1, '¿Qué señal de Tránsito indica que comenzara una carretera sinuosa?', '0.000000', '', 1, NULL, 'admin', 1),
(12, 1, 'si su teléfono celular suena mientras está conduciendo y no tienes un dispositivo de manos libre, usted debe:', '0.000000', '', 1, NULL, 'admin', 1),
(13, 1, 'Está conduciendo por una calle de la ciudad y ve vehículo de emergencia con luces intermitentes detrás de usted. ¿Qué debería hacer?', '0.000000', '', 1, NULL, 'admin', 1),
(14, 1, 'Llega a una intersección con señal de ALTO en las cuatro esquinas al mismo tiempo que el conductor a su izquierda. ¿Quién tiene el derecho de pase?', '0.000000', '', 1, NULL, 'admin', 1),
(15, 1, 'Esta señal significa:', '0.000000', 'Pregunta15_Imagen.png', 1, NULL, 'admin', 1),
(16, 2, '¿Cuáles son las técnicas para evitar accidentes al ser sobrepasado?', '0.000000', '', 1, NULL, 'admin', 1),
(17, 1, 'La técnica para evitar accidentes en vueltas es tener suficiente anticipación con las luces direccionales o con la mano. Al voltear ceder el paso a los peatones.', '0.000000', '', 1, NULL, 'admin', 1),
(18, 1, 'Las causas más comunes de los accidentes de tráfico son el exceso de velocidad, Alcohol y drogas, los despistes, el mal tiempo, la fatiga, el uso del teléfono celular, los neumáticos.', '0.000000', '', 1, NULL, 'admin', 1),
(19, 1, 'Habitualmente suele consistir en un bordillo de cierta altura que imposibilita que un vehículo pueda invadir el sentido contrario en las zonas no habilitadas para ello.', '0.000000', '', 1, NULL, 'admin', 1),
(20, 1, 'Antes de encender el vehículo, el conductor deberá:', '0.000000', '', 1, NULL, 'admin', 1),
(21, 1, 'Si usted conduce un vehículo en estado de ebriedad o bajo la influencia de algún estupefaciente, está cometiendo:', '0.000000', '', 1, NULL, 'admin', 1),
(22, 1, 'Usar teléfono u otro aparato de radiocomunicación mientras conduce se considera:', '0.000000', '', 1, NULL, 'admin', 1),
(23, 1, 'Las placas, el engomado y la tarjeta de circulación son documentos:', '0.000000', '', 1, NULL, 'admin', 1),
(24, 1, '¿Cuál es el significado de la luz ámbar o amarilla en los semáforos?', '0.000000', '', 1, NULL, 'admin', 1),
(25, 1, '¿Qué significa esta señalética?', '0.000000', 'Pregunta15_Imagen.png', 1, NULL, 'admin', 1),
(26, 1, 'La vuelta a la derecha, ¿es siempre continua?', '0.000000', '', 1, NULL, 'admin', 1),
(27, 1, '¿Qué distancia puede recorrer un vehículo en reversa?', '0.000000', '', 1, NULL, 'admin', 1),
(28, 3, 'Señala con una línea a que marca de pavimento pertenece la imagen:', '0.000000', '', 0, NULL, 'admin', 1),
(29, 3, 'Relaciona la respuesta de las siguientes señales:', '0.000000', '', 0, NULL, 'admin', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

CREATE TABLE `respuesta` (
  `IdRespuesta` int(11) NOT NULL,
  `Nombre` varchar(1000) DEFAULT NULL,
  `Valor` decimal(18,6) DEFAULT NULL,
  `Correcta` int(11) DEFAULT NULL,
  `UrlImagen` varchar(200) DEFAULT NULL,
  `Valido` int(11) DEFAULT NULL,
  `FechaCrea` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioCrea` varchar(50) DEFAULT NULL,
  `Pregunta_IdPregunta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `respuesta`
--

INSERT INTO `respuesta` (`IdRespuesta`, `Nombre`, `Valor`, `Correcta`, `UrlImagen`, `Valido`, `FechaCrea`, `UsuarioCrea`, `Pregunta_IdPregunta`) VALUES
(1, 'A) SI', '1.000000', 1, '', 1, '2020-01-18 21:23:16', 'admin', 1),
(2, 'B) NO', '0.000000', 0, '', 1, '2020-01-18 21:23:16', 'admin', 1),
(3, 'A) preventivas, restrictivas e informativas', '1.000000', 1, '', 1, '2020-01-18 21:23:16', 'admin', 2),
(4, 'B) restrictivas, gráficas, informativas', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 2),
(5, 'C) preventivas, sociales, gráficas', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 2),
(6, 'A) Indicar determinadas limitaciones o prohibiciones que regulen el tránsito.', '1.000000', 1, '', 1, '2020-01-18 21:23:17', 'admin', 3),
(7, 'B) advertir la existencia y naturaleza de un peligro.', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 3),
(8, 'C) Prohibiciones reglamentarias', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 3),
(9, 'A) Que pueden iniciar la marcha respetando después de ceder el paso a los peatones que se encuentran cruzando y que hayan iniciado el cruce protegidos por la luz roja; los que vayan en movimiento pueden avanzar.', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 4),
(10, 'B) PRECAUCIÓN y avisa a los conductores que la luz roja esta próxima.', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 4),
(11, 'C) Es una señal de ALTO debiendo los conductores detener sus vehículos ante esta señal.', '1.000000', 1, '', 1, '2020-01-18 21:23:17', 'admin', 4),
(12, 'A) Es de 20k/h', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 5),
(13, 'B) Es de 45k/h', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 5),
(14, 'C) Es de 60 kilómetros por hora.', '1.000000', 1, '', 1, '2020-01-18 21:23:17', 'admin', 5),
(15, 'A) personas, vehículo, camino, iluminación, clima.', '1.000000', 1, '', 1, '2020-01-18 21:23:17', 'admin', 6),
(16, 'B) sol, clima, arboles', '0.000000', 0, '', 1, '2020-01-18 21:23:17', 'admin', 6),
(17, 'C) señales, animales, postes', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 6),
(18, 'A) Es un conjunto de equipamiento vial destinado a vigilar, controlar y regular el tráfico vehicular, peatonal y de semovientes en el Municipio de Carmen.', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 7),
(19, 'B) Acción o efecto de trasladarse de un lugar a otro por la vía pública.', '1.000000', 1, '', 1, '2020-01-18 21:23:18', 'admin', 7),
(20, 'C) Dispositivos de seguridad en los conductores.', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 7),
(21, 'A) Indica división de carriles opuestos y a la vez prohibida la maniobra de sobrepasar o de rebasar.', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 8),
(22, 'B) Que delimitan el espacio para circular ganando los carriles de circulación del acotamiento.', '1.000000', 1, '', 1, '2020-01-18 21:23:18', 'admin', 8),
(23, 'C) Indica división de carriles; se permite sobrepasar o rebasar si hay suficiente visibilidad y el carril opuesto se encuentra ocupando un espacio suficiente que permiten la maniobra con', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 8),
(24, 'A) Cinturón de Seguridad', '1.000000', 1, '', 1, '2020-01-18 21:23:18', 'admin', 9),
(25, 'B) Casco de seguridad', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 9),
(26, 'C) Lentes protectores', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 9),
(27, 'A) Cerciorarse antes de abrir las puertas que no existe peligro por los ocupantes del vehículo y demás usuarios de la vía.', '1.000000', 1, '', 1, '2020-01-18 21:23:18', 'admin', 10),
(28, 'B) Abrir las puertas', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 10),
(29, 'C) Activar los seguros de puerta', '0.000000', 0, '', 1, '2020-01-18 21:23:18', 'admin', 10),
(30, 'A)', '0.000000', 0, 'CarreteraSinuosaRespuesta_A.png', 1, '2020-01-18 21:23:18', 'admin', 11),
(31, 'B)', '1.000000', 1, 'CarreteraSinuosaRespuesta_B.png', 1, '2020-01-18 21:23:18', 'admin', 11),
(32, '1.- Dejar que la llamada se vaya al buzón.', '1.000000', 1, '', 1, '2020-01-18 21:23:18', 'admin', 12),
(33, '2.- Revisar el número de llamada', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 12),
(34, '3.- Contestar la llamada porque podría ser una emergencia.', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 12),
(35, '1.- Moverse hacia la orilla derecha de la carretera y detener el vehículo.', '1.000000', 1, '', 1, '2020-01-18 21:23:19', 'admin', 13),
(36, '2.- Moverse hacia la orilla derecha de la calle y disminuir la velocidad.', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 13),
(37, '3.- Mantenerse en su carril disminuir la velocidad y permitir que lo rebase.', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 13),
(38, '1.- Usted tiene el derecho de pase.', '1.000000', 1, '', 1, '2020-01-18 21:23:19', 'admin', 14),
(39, '2.- El conductor a su izquierda tiene el derecho de pase.', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 14),
(40, '3.- Quien ponga el direccional tiene el derecho de pase.', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 14),
(41, '1.- señales de pares en las 4 esquinas más adelante', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 15),
(42, '2.- intersección no controlada más adelante.', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 15),
(43, '3.- señales de tránsito más adelante.', '1.000000', 1, '', 1, '2020-01-18 21:23:19', 'admin', 15),
(44, 'A) Reducir la velocidad', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 16),
(45, 'B) El transito congestionado, deja suficiente espacio entre usted y el vehículo de adelante.', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 16),
(46, 'C) adáptese a las circunstancias', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 16),
(47, 'D) esté atento siempre a los cambios bruscos del carril', '0.000000', 0, '', 1, '2020-01-18 21:23:19', 'admin', 16),
(48, 'E) Conduzca siempre acorde a los cambios bruscos del carril.', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 16),
(49, 'F) Cuando haya más de un carril para el mismo sentido.', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 16),
(50, 'G) Todas son correctas', '1.000000', 1, '', 1, '2020-01-18 21:23:20', 'admin', 16),
(51, 'A) SI', '1.000000', 1, '', 1, '2020-01-18 21:23:20', 'admin', 17),
(52, 'B) NO', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 17),
(53, 'A) Verdadero', '1.000000', 1, '', 1, '2020-01-18 21:23:20', 'admin', 18),
(54, 'B) Falso', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 18),
(55, 'A) Camellón central', '1.000000', 1, '', 1, '2020-01-18 21:23:20', 'admin', 19),
(56, 'B) Tráfico vehicular', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 19),
(57, 'C) Tránsito', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 19),
(58, 'a) Encender las luces.', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 20),
(59, 'b) Colocarse el cinturón de seguridad.', '1.000000', 1, '', 1, '2020-01-18 21:23:20', 'admin', 20),
(60, 'c) Activar la alarma.', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 20),
(61, 'a) Abuso de autoridad.', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 21),
(62, 'b) Ninguna infracción.', '0.000000', 0, '', 1, '2020-01-18 21:23:20', 'admin', 21),
(63, 'c) Infracción.', '1.000000', 1, '', 1, '2020-01-18 21:23:21', 'admin', 21),
(64, 'a) Legal para no estresarse.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 22),
(65, 'b) Infracción a las normas de vialidad.', '1.000000', 1, '', 1, '2020-01-18 21:23:21', 'admin', 22),
(66, 'c) Causa de detención del vehículo.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 22),
(67, 'a) Intransferibles que identifican al vehículo.', '1.000000', 1, '', 1, '2020-01-18 21:23:21', 'admin', 23),
(68, 'b) Se requieren para pago de refrendo.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 23),
(69, 'c) Para obtención de licencia.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 23),
(70, 'a) Alto total.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 24),
(71, 'b) Preventiva.', '1.000000', 1, '', 1, '2020-01-18 21:23:21', 'admin', 24),
(72, 'c) Zona de hospitales.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 24),
(73, 'a) Desviación.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 25),
(74, 'b) Vuelta continúa.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 25),
(75, 'c) Zona escolar.', '1.000000', 1, '', 1, '2020-01-18 21:23:21', 'admin', 25),
(76, 'a) No.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 26),
(77, 'b) Sí.', '0.000000', 0, '', 1, '2020-01-18 21:23:21', 'admin', 26),
(78, 'c) Sí, salvo que exista señalamiento que indique lo contrario.', '1.000000', 1, '', 1, '2020-01-18 21:23:22', 'admin', 26),
(79, 'a) La que resulte necesaria.', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 27),
(80, 'b) 10 metros.', '1.000000', 1, '', 1, '2020-01-18 21:23:22', 'admin', 27),
(81, 'c) Una cuarta parte de la longitud de la calle.', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 27),
(82, 'A) Líneas continuas a la orilla del camino', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 28),
(83, 'B) Una linea central continua y otra discontinua juntas discontinua juntas al centro', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 28),
(84, 'C) Lnea central continua', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 28),
(85, 'D) Línea central discontinua', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 28),
(86, '63. Circulación', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 29),
(87, '64. Estacionamiento permitido en corto periodo', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 29),
(88, '65. prohibido la vuelta a la derecha', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 29),
(89, '66.prohibido el paso a vehículos pesados.', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 29),
(90, '67. prohibido rebasar', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 29),
(91, '68. prohibido estacionarse', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 29),
(92, '69. prohibido parar', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 29),
(93, '70. prohibido seguir de frent', '0.000000', 0, '', 1, '2020-01-18 21:23:22', 'admin', 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id` int(11) NOT NULL,
  `Nombres` varchar(100) DEFAULT NULL,
  `PrimerApellido` varchar(100) DEFAULT NULL,
  `SegundoApellido` varchar(100) DEFAULT NULL,
  `Usuario` varchar(50) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `FechaCrea` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioCrea` varchar(50) DEFAULT NULL,
  `Valido` int(11) DEFAULT NULL,
  `Rol` varchar(100) DEFAULT NULL,
  `Rfc` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id`, `Nombres`, `PrimerApellido`, `SegundoApellido`, `Usuario`, `Password`, `FechaCrea`, `UsuarioCrea`, `Valido`, `Rol`, `Rfc`) VALUES
(1, 'Jose del Carmen', 'Hernandez', 'Izquierdo', 'jhernandez', '12345', NULL, 'admin', 1, 'Administrador', 'ninguno'),
(2, 'jesus', 'garcia', 'floresx', 'admin', '8d5004c9c74259ab775f63f7131da077814a7636', '2020-01-09 00:00:00', 'admin', 1, 'administrador', 'GAFJ871028'),
(3, 'jose del carmen', 'hernandez', 'izquierdo', 'usuario', '8d5004c9c74259ab775f63f7131da077814a7636', '2020-01-19 23:41:36', 'admin', 1, 'usuario', 'sdfdsfsdfsd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioexamen`
--

CREATE TABLE `usuarioexamen` (
  `Id` int(11) NOT NULL,
  `Clave` varchar(50) DEFAULT NULL,
  `TiempoTrascurrio` varchar(10) DEFAULT NULL,
  `FechaHoraInicio` datetime DEFAULT NULL,
  `FechaHoraFin` datetime DEFAULT NULL,
  `Status` int(11) DEFAULT NULL,
  `Aprobado` int(11) DEFAULT NULL,
  `FechaCrea` datetime DEFAULT CURRENT_TIMESTAMP,
  `Valido` int(11) DEFAULT NULL,
  `Examen_IdExamen` int(11) NOT NULL,
  `Usuario_Id` int(11) NOT NULL,
  `Consecutivo` int(11) NOT NULL,
  `IdsPreguntas` varchar(6000) NOT NULL,
  `Calificacion` decimal(18,6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarioexamen`
--

INSERT INTO `usuarioexamen` (`Id`, `Clave`, `TiempoTrascurrio`, `FechaHoraInicio`, `FechaHoraFin`, `Status`, `Aprobado`, `FechaCrea`, `Valido`, `Examen_IdExamen`, `Usuario_Id`, `Consecutivo`, `IdsPreguntas`, `Calificacion`) VALUES
(2, '000002', NULL, NULL, NULL, 0, NULL, '2020-01-19 13:54:18', 0, 1, 2, 2, '', NULL),
(3, '000003', NULL, NULL, NULL, 0, NULL, '2020-01-19 18:46:40', 0, 1, 1, 3, '', NULL),
(4, '000004', NULL, NULL, NULL, 0, NULL, '2020-01-19 18:55:18', 0, 1, 1, 4, '', NULL),
(5, '000005', NULL, NULL, NULL, 0, NULL, '2020-01-19 18:56:11', 0, 1, 1, 5, '', NULL),
(6, 'LM000006', NULL, NULL, NULL, 0, NULL, '2020-01-19 18:57:22', 0, 1, 1, 6, '', NULL),
(7, 'LM000007', NULL, '2020-01-19 23:52:49', '2020-01-20 00:22:54', 2, 0, '2020-01-19 23:42:38', 0, 1, 3, 7, '', NULL),
(8, 'LM000008', NULL, '2020-01-20 00:53:19', '2020-01-20 01:27:29', 2, 0, '2020-01-20 00:52:40', 0, 1, 3, 8, '', NULL),
(9, 'LM000009', NULL, '2020-01-22 23:38:43', '2020-01-23 00:08:58', 2, 0, '2020-01-21 23:58:43', 0, 1, 3, 9, '5,21,24,23,17,4,28,6,8,3,19,10,14,26,11,7,22,29,1,25', NULL),
(10, 'LM000010', NULL, '2020-01-23 00:18:10', NULL, 1, NULL, '2020-01-23 00:14:08', 0, 1, 3, 10, '15,4,1,3,6,14,12,7,25,26,28,11,17,20,19,10,22,27,29,24', NULL),
(11, 'LM000011', NULL, '2020-01-23 00:26:33', '2020-01-23 00:28:13', 2, 0, '2020-01-23 00:26:19', 0, 1, 3, 11, '6,20,25,3,9,7,14,2,4,10,16,24,23,1,26,5,12,17,8,21', NULL),
(12, 'LM000012', NULL, '2020-01-23 00:30:21', '2020-01-23 01:35:44', 2, 0, '2020-01-23 00:30:05', 0, 1, 3, 12, '24,18,22,9,14,23,17,10,25,21,11,19,7,13,6,27,8,2,16,26', NULL),
(13, 'LM000013', NULL, '2020-01-23 07:44:17', NULL, 1, NULL, '2020-01-23 07:43:55', 0, 1, 3, 13, '11,26,8,13,17,18,12,4,21,5,9,22,27,20,3,15,16,24,19,10', NULL),
(14, 'LM000014', NULL, NULL, NULL, 0, NULL, '2020-01-23 10:57:57', 0, 1, 1, 14, '11,26,22,27,8,16,15,7,17,3,19,2,12,4,1,24,13,14,23,20', NULL),
(15, 'LM000015', NULL, '2020-01-23 11:04:12', '2020-01-23 11:06:27', 2, 0, '2020-01-23 11:04:01', 0, 1, 3, 15, '25,1,27,20,3,22,18,4,17,26,13,14,19,16,7,6,11,10,5,24', NULL),
(16, 'LM000016', NULL, '2020-01-23 11:09:12', '2020-01-23 11:09:58', 2, 0, '2020-01-23 11:09:03', 0, 1, 3, 16, '12,7,23,6,26,4,9,16,21,10,15,2,1,5,18,17,27,14,22,3', '0.000000'),
(17, 'LM000017', NULL, '2020-01-23 11:15:02', '2020-01-23 11:16:22', 2, 0, '2020-01-23 11:14:32', 0, 1, 3, 17, '4,18,8,26,2,27,22,19,23,9,20,10,5,15,12,14,16,21,1,7', '0.000000'),
(18, 'LM000018', NULL, '2020-01-23 11:18:36', '2020-01-23 11:19:07', 2, 0, '2020-01-23 11:17:11', 0, 1, 3, 18, '24,22,10,9,11,27,18,14,21,16,3,2,15,23,17,1,4,8,13,12', '0.000000'),
(19, 'LM000019', NULL, '2020-01-23 11:28:59', '2020-01-23 11:29:08', 2, 0, '2020-01-23 11:28:51', 0, 1, 3, 19, '20,9,23,12,6,22,11,13,24,2,27,17,26,14,7,4,25,3,5,21', '0.000000'),
(20, 'LM000020', NULL, '2020-01-23 11:30:11', '2020-01-23 11:30:26', 2, 0, '2020-01-23 11:30:04', 0, 1, 3, 20, '2,11,23,6,15,8,17,10,22,12,4,3,18,16,13,24,5,7,14,9', '15.000000'),
(21, 'LM000021', NULL, NULL, NULL, 0, NULL, '2020-01-23 12:18:13', 0, 1, 3, 21, '24,19,10,21,23,27,11,15,5,6,3,20,8,12,4,2,22,26,18,13', NULL),
(22, 'LM000022', NULL, NULL, NULL, 0, NULL, '2020-01-23 12:19:30', 0, 1, 3, 22, '1,14,8,21,26,13,9,19,2,16,27,23,4,3,25,7,17,11,10,15', NULL),
(23, 'LM000023', NULL, NULL, NULL, 0, NULL, '2020-01-23 12:20:10', 0, 1, 3, 23, '1,14,23,10,22,24,26,4,15,7,5,27,2,11,19,13,25,21,20,3', NULL),
(24, 'LM000024', NULL, NULL, NULL, 0, NULL, '2020-01-23 12:20:35', 1, 1, 3, 24, '20,12,22,8,24,3,9,17,26,25,27,4,23,14,19,2,13,11,21,10', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `examen`
--
ALTER TABLE `examen`
  ADD PRIMARY KEY (`IdExamen`,`Usuario_Id`),
  ADD KEY `fk_Examen_Usuario1_idx` (`Usuario_Id`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`IdPregunta`,`Examen_IdExamen`),
  ADD KEY `fk_Pregunta_Examen_idx` (`Examen_IdExamen`);

--
-- Indices de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD PRIMARY KEY (`IdRespuesta`,`Pregunta_IdPregunta`),
  ADD KEY `fk_Respuesta_Pregunta1_idx` (`Pregunta_IdPregunta`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarioexamen`
--
ALTER TABLE `usuarioexamen`
  ADD PRIMARY KEY (`Id`,`Examen_IdExamen`,`Usuario_Id`),
  ADD KEY `fk_UsuarioExamen_Examen1_idx` (`Examen_IdExamen`),
  ADD KEY `fk_UsuarioExamen_Usuario1_idx` (`Usuario_Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `examen`
--
ALTER TABLE `examen`
  MODIFY `IdExamen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `IdPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `respuesta`
--
ALTER TABLE `respuesta`
  MODIFY `IdRespuesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarioexamen`
--
ALTER TABLE `usuarioexamen`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `examen`
--
ALTER TABLE `examen`
  ADD CONSTRAINT `fk_Examen_Usuario1` FOREIGN KEY (`Usuario_Id`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `fk_Pregunta_Examen` FOREIGN KEY (`Examen_IdExamen`) REFERENCES `examen` (`IdExamen`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `fk_Respuesta_Pregunta1` FOREIGN KEY (`Pregunta_IdPregunta`) REFERENCES `pregunta` (`IdPregunta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarioexamen`
--
ALTER TABLE `usuarioexamen`
  ADD CONSTRAINT `fk_UsuarioExamen_Examen1` FOREIGN KEY (`Examen_IdExamen`) REFERENCES `examen` (`IdExamen`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_UsuarioExamen_Usuario1` FOREIGN KEY (`Usuario_Id`) REFERENCES `usuario` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
