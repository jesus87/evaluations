-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-01-2020 a las 10:05:40
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
  `Tiempo` int(11) DEFAULT '10',
  `CalificacionAprobatoria` decimal(18,6) DEFAULT '100.000000',
  `FechaCrea` datetime DEFAULT CURRENT_TIMESTAMP,
  `Usuario_Id` int(11) NOT NULL,
  `CantidadPreguntas` int(11) DEFAULT '20',
  `Valido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `examen`
--

INSERT INTO `examen` (`IdExamen`, `Nombre`, `Descripcion`, `Clave`, `Tiempo`, `CalificacionAprobatoria`, `FechaCrea`, `Usuario_Id`, `CantidadPreguntas`, `Valido`) VALUES
(1, 'Evaluacion de Señalamientos', 'Examen para evaluar a los usuarios sobre los señalamientos.', 'LM', 10, '100.000000', NULL, 2, 20, 1);

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
(24, 'LM000024', NULL, '2020-01-23 23:14:54', '2020-01-23 23:15:01', 2, 0, '2020-01-23 12:20:35', 0, 1, 3, 24, '20,12,22,8,24,3,9,17,26,25,27,4,23,14,19,2,13,11,21,10', '10.000000'),
(25, 'LM000025', NULL, '2020-01-23 23:34:01', '2020-01-23 23:34:08', 2, 0, '2020-01-23 23:33:49', 0, 1, 3, 25, '7,25,15,16,21,20,22,17,5,6,4,23,11,9,26,13,27,18,14,2', '5.000000'),
(26, 'LM000026', NULL, '2020-01-23 23:35:47', '2020-01-24 00:06:25', 2, 0, '2020-01-23 23:35:37', 0, 1, 3, 26, '27,13,17,25,24,11,21,23,26,20,18,6,1,16,10,5,19,12,7,3', '10.000000'),
(27, 'LM000027', NULL, NULL, NULL, 0, NULL, '2020-01-24 00:19:30', 0, 1, 3, 27, '7,10,1,17,14,20,21,2,26,12,22,23,16,18,8,9,6,13,11,27', NULL),
(28, 'LM000028', NULL, '2020-01-24 01:07:48', '2020-01-24 01:07:55', 2, 0, '2020-01-24 01:07:34', 0, 1, 3, 28, '15,25,16,23,3,20,21,19,17,11,2,22,9,24,13,8,10,18,4,27', '10.000000'),
(29, 'LM000029', NULL, '2020-01-24 01:09:12', '2020-01-24 01:09:18', 2, 0, '2020-01-24 01:09:00', 0, 1, 3, 29, '18,19,13,20,2,21,24,9,8,11,3,14,1,26,22,17,10,23,6,15', '10.000000'),
(30, 'LM000030', NULL, '2020-01-24 01:13:50', '2020-01-24 01:13:58', 2, 0, '2020-01-24 01:13:40', 0, 1, 3, 30, '21,24,23,25,2,17,9,10,26,22,18,16,13,6,27,8,11,7,12,1', '5.000000'),
(31, 'LM000031', NULL, '2020-01-24 01:15:43', '2020-01-24 01:15:50', 2, 0, '2020-01-24 01:15:33', 0, 1, 3, 31, '11,14,3,6,18,5,21,22,16,24,2,19,26,12,25,20,7,13,9,17', '10.000000'),
(32, 'LM000032', NULL, '2020-01-24 01:28:00', '2020-01-24 01:28:07', 2, 0, '2020-01-24 01:27:50', 0, 1, 3, 32, '19,11,4,15,26,5,20,25,8,24,10,2,6,3,23,9,7,12,22,13', '10.000000'),
(33, 'LM000033', NULL, '2020-01-24 01:30:38', '2020-01-24 01:30:43', 2, 0, '2020-01-24 01:30:27', 0, 1, 3, 33, '24,25,26,4,9,12,15,22,27,23,10,14,1,11,20,17,19,7,13,2', '10.000000'),
(34, 'LM000034', NULL, '2020-01-24 01:32:49', '2020-01-24 01:32:56', 2, 0, '2020-01-24 01:32:40', 0, 1, 3, 34, '14,25,3,7,8,6,26,18,13,2,27,4,9,17,10,22,24,5,23,19', '10.000000'),
(35, 'LM000035', NULL, '2020-01-24 01:35:48', '2020-01-24 01:35:55', 2, 0, '2020-01-24 01:35:32', 0, 1, 3, 35, '25,13,4,10,2,26,8,7,24,9,22,19,3,23,18,11,20,27,1,12', '10.000000'),
(36, 'LM000036', NULL, '2020-01-24 01:37:33', '2020-01-24 01:37:39', 2, 0, '2020-01-24 01:37:23', 0, 1, 3, 36, '8,9,25,14,5,6,18,27,10,12,21,3,11,4,2,15,13,26,7,17', '0.000000'),
(37, 'LM000037', NULL, '2020-01-24 01:41:00', '2020-01-24 01:41:05', 2, 0, '2020-01-24 01:40:51', 0, 1, 3, 37, '10,16,21,22,26,2,17,6,24,7,4,23,25,13,12,5,19,27,15,8', '5.000000'),
(38, 'LM000038', NULL, '2020-01-24 01:44:41', '2020-01-24 01:44:46', 2, 0, '2020-01-24 01:44:32', 0, 1, 3, 38, '11,1,20,9,15,8,2,3,26,27,14,7,22,24,5,12,19,6,13,4', '10.000000'),
(39, 'LM000039', NULL, '2020-01-24 01:48:03', '2020-01-24 01:48:09', 2, 0, '2020-01-24 01:47:55', 0, 1, 3, 39, '5,25,13,10,12,24,3,19,20,27,22,16,1,2,4,6,21,23,15,26', '10.000000'),
(40, 'LM000040', NULL, '2020-01-24 01:50:57', '2020-01-24 01:51:03', 2, 0, '2020-01-24 01:50:49', 0, 1, 3, 40, '6,1,20,19,25,27,23,12,8,22,17,10,4,13,21,24,5,2,7,16', '10.000000'),
(41, 'LM000041', NULL, '2020-01-24 01:56:02', '2020-01-24 01:56:08', 2, 0, '2020-01-24 01:55:53', 0, 1, 3, 41, '15,2,6,17,18,21,27,10,4,5,22,3,11,14,13,1,7,26,20,23', '10.000000'),
(42, 'LM000042', NULL, '2020-01-24 02:13:00', '2020-01-24 02:13:06', 2, 0, '2020-01-24 02:12:48', 0, 1, 3, 42, '5,26,7,27,4,18,9,24,12,13,16,25,1,3,14,23,17,8,20,2', '10.000000'),
(43, 'LM000043', NULL, '2020-01-24 02:46:26', '2020-01-24 02:48:09', 2, 0, '2020-01-24 02:46:14', 0, 1, 3, 43, '3,25,15,26,2,13,19,11,16,17,20,14,24,8,4,9,10,23,12,18', '15.000000'),
(44, 'LM000044', NULL, '2020-01-24 02:50:23', '2020-01-24 02:50:44', 2, 0, '2020-01-24 02:50:11', 0, 1, 3, 44, '20,16,15,10,5,23,4,17,2,6,19,21,26,1,3,18,25,9,22,13', '20.000000'),
(45, 'LM000045', NULL, '2020-01-24 02:52:35', '2020-01-24 02:52:56', 2, 0, '2020-01-24 02:52:24', 0, 1, 3, 45, '5,12,2,26,3,15,16,21,18,22,6,13,25,10,8,17,24,27,14,11', '20.000000'),
(46, 'LM000046', NULL, '2020-01-24 02:54:27', '2020-01-24 02:54:50', 2, 0, '2020-01-24 02:54:13', 0, 1, 3, 46, '25,12,18,3,7,19,17,1,4,26,13,9,15,14,24,23,10,2,20,16', '30.000000'),
(47, 'LM000047', NULL, '2020-01-24 02:56:16', '2020-01-24 02:56:35', 2, 0, '2020-01-24 02:56:06', 0, 1, 3, 47, '3,17,25,6,21,11,18,1,16,19,7,9,5,14,10,22,8,15,27,4', '20.000000'),
(48, 'LM000048', NULL, '2020-01-24 03:01:36', '2020-01-24 03:01:56', 2, 0, '2020-01-24 03:01:25', 0, 1, 3, 48, '2,22,24,12,7,19,14,20,17,23,11,27,21,6,10,16,5,18,9,25', '20.000000'),
(49, 'LM000049', NULL, '2020-01-24 03:04:00', '2020-01-24 03:04:37', 2, 0, '2020-01-24 03:03:47', 1, 1, 3, 49, '14,24,21,22,8,6,19,2,4,17,23,11,3,18,25,10,1,27,20,13', '40.000000');

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

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
