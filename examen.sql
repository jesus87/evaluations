-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-01-2020 a las 09:29:12
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
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id` int(11) NOT NULL,
  `Nombres` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `PrimerApellido` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `SegundoApellido` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `Usuario` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `Password` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `FechaCrea` datetime DEFAULT CURRENT_TIMESTAMP,
  `UsuarioCrea` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `Valido` int(11) DEFAULT NULL,
  `Rol` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `Rfc` varchar(45) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id`, `Nombres`, `PrimerApellido`, `SegundoApellido`, `Usuario`, `Password`, `FechaCrea`, `UsuarioCrea`, `Valido`, `Rol`, `Rfc`) VALUES
(1, 'jesus', 'garcia', 'floresx', 'admin', '8d5004c9c74259ab775f63f7131da077814a7636', '2020-01-09 00:00:00', 'admin', 1, 'administrador', 'GAFJ871028'),
(2, 'jesus', 'del valle', '', 'chuy10', '388506c128cb9a841199f4dd574f4e586206fa93', '2020-01-18 01:01:33', 'admin', 1, 'administrador', ''),
(3, 'juan', 'roman', 'riquelme', 'roman', '8cb2237d0679ca88db6464eac60da96345513964', '2020-01-18 01:08:26', 'admin', 1, 'administrador', 'asdsad');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
