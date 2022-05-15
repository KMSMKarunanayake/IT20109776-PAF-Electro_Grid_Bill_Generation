-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2022 at 04:39 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electrogriddb`
--

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `billID` int(11) NOT NULL,
  `bName` varchar(50) NOT NULL,
  `bDate` varchar(50) NOT NULL,
  `accNo` varchar(50) NOT NULL,
  `preReading` double NOT NULL,
  `currentReading` double NOT NULL,
  `bUnits` double NOT NULL,
  `bTotal` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`billID`, `bName`, `bDate`, `accNo`, `preReading`, `currentReading`, `bUnits`, `bTotal`) VALUES
(55, '\'Kamal', '2022-05-11', '54321', 100, 250, 150, 2700),
(56, 'Sunil', '2022-05-14', '78945', 200, 350, 150, 2700),
(57, 'Sasanka', '2022-05-13', '45213', 90, 150, 60, 1050),
(58, 'Udaya', '2022-05-14', '35412', 58, 78, 20, 650),
(59, 'Shashika', '2022-05-15', '98542', 900, 2000, 1100, 16950),
(60, 'Randimal', '2022-05-15', '98542', 1500, 5500, 4000, 60450);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`billID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `billID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
