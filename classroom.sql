-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2023 at 02:02 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `classroom`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(25) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `No` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`No`, `Name`, `Status`, `Date`) VALUES
(1831, '', 'false', '2023-12-12 04:59:01'),
(1832, '', 'false', '2023-12-12 04:59:01'),
(1833, '', 'false', '2023-12-12 04:59:01'),
(1834, '', 'false', '2023-12-12 04:59:01'),
(1835, '', 'false', '2023-12-12 04:59:01'),
(1836, '', 'false', '2023-12-12 04:59:01'),
(1837, '', 'false', '2023-12-12 04:59:01'),
(1838, '', 'false', '2023-12-12 04:59:01'),
(1839, '', 'false', '2023-12-12 04:59:01'),
(1840, 'Chrisna', 'false', '2023-12-12 04:59:01'),
(1841, 'Deiga', 'false', '2023-12-12 04:59:01'),
(1842, 'Abiy', 'false', '2023-12-12 04:59:01'),
(1843, 'Sophia', 'false', '2023-12-12 04:59:01'),
(1844, 'Jo', 'false', '2023-12-12 04:59:01'),
(1845, 'Rara', 'false', '2023-12-12 04:59:01'),
(1846, 'Danny', 'false', '2023-12-12 04:59:01'),
(1847, 'Apsa', 'false', '2023-12-12 04:59:01'),
(1848, 'Rendi', 'false', '2023-12-12 04:59:01'),
(1849, 'Chrisna', 'Present', '2023-12-12 04:59:01'),
(1850, 'Deiga', 'Present', '2023-12-12 04:59:01'),
(1851, 'Jo', 'Present', '2023-12-12 04:59:01'),
(1852, 'Sophia', 'Present', '2023-12-12 04:59:01'),
(1853, 'Abiy', 'Present', '2023-12-12 04:59:01'),
(1854, 'Rendi', 'Present', '2023-12-12 04:59:01'),
(1855, 'Rara', 'Present', '2023-12-12 04:59:01'),
(1856, 'Danny', 'Present', '2023-12-12 04:59:02'),
(1857, 'Apsa', 'Present', '2023-12-12 04:59:02'),
(1858, '', 'false', '2023-12-12 05:00:59'),
(1859, '', 'false', '2023-12-12 05:00:59'),
(1860, '', 'false', '2023-12-12 05:00:59'),
(1861, '', 'false', '2023-12-12 05:00:59'),
(1862, '', 'false', '2023-12-12 05:00:59'),
(1863, '', 'false', '2023-12-12 05:00:59'),
(1864, '', 'false', '2023-12-12 05:00:59'),
(1865, '', 'false', '2023-12-12 05:00:59'),
(1866, '', 'false', '2023-12-12 05:00:59'),
(1867, 'Chrisna', 'false', '2023-12-12 05:00:59'),
(1868, 'Deiga', 'false', '2023-12-12 05:00:59'),
(1869, 'Jo', 'false', '2023-12-12 05:00:59'),
(1870, 'Sophia', 'false', '2023-12-12 05:00:59'),
(1871, 'Abiy', 'false', '2023-12-12 05:00:59'),
(1872, 'Rara', 'false', '2023-12-12 05:00:59'),
(1873, 'Rendi', 'false', '2023-12-12 05:00:59'),
(1874, 'Danny', 'false', '2023-12-12 05:00:59'),
(1875, 'Apsa', 'false', '2023-12-12 05:00:59'),
(1876, 'Chrisna', 'Present', '2023-12-12 05:00:59'),
(1877, 'Deiga', 'Present', '2023-12-12 05:00:59'),
(1878, 'Jo', 'Present', '2023-12-12 05:00:59'),
(1879, 'Sophia', 'Present', '2023-12-12 05:00:59'),
(1880, 'Abiy', 'Present', '2023-12-12 05:00:59'),
(1881, 'Rara', 'Present', '2023-12-12 05:00:59'),
(1882, 'Rendi', 'Present', '2023-12-12 05:00:59'),
(1883, 'Danny', 'Present', '2023-12-12 05:00:59'),
(1884, 'Apsa', 'Present', '2023-12-12 05:00:59'),
(1885, 'Danny', 'Not Present', '2023-12-12 05:22:13'),
(1886, 'Danny', 'Present', '2023-12-12 05:22:42'),
(1887, '', 'false', '2023-12-12 05:25:34'),
(1888, '', 'false', '2023-12-12 05:25:34'),
(1889, '', 'false', '2023-12-12 05:25:34'),
(1890, '', 'false', '2023-12-12 05:25:34'),
(1891, '', 'false', '2023-12-12 05:25:34'),
(1892, '', 'false', '2023-12-12 05:25:34'),
(1893, '', 'false', '2023-12-12 05:25:34'),
(1894, '', 'false', '2023-12-12 05:25:34'),
(1895, '', 'false', '2023-12-12 05:25:34'),
(1896, 'Chrisna', 'false', '2023-12-12 05:25:34'),
(1897, 'Deiga', 'false', '2023-12-12 05:25:34'),
(1898, 'Abiy', 'false', '2023-12-12 05:25:34'),
(1899, 'Rara', 'false', '2023-12-12 05:25:34'),
(1900, 'Sophia', 'false', '2023-12-12 05:25:34'),
(1901, 'Jo', 'false', '2023-12-12 05:25:34'),
(1902, 'Rendi', 'false', '2023-12-12 05:25:34'),
(1903, 'Danny', 'false', '2023-12-12 05:25:34'),
(1904, 'Apsa', 'false', '2023-12-12 05:25:34'),
(1905, 'Chrisna', 'Present', '2023-12-12 05:25:34'),
(1906, 'Deiga', 'Present', '2023-12-12 05:25:34'),
(1907, 'Jo', 'Present', '2023-12-12 05:25:34'),
(1908, 'Sophia', 'Present', '2023-12-12 05:25:34'),
(1909, 'Abiy', 'Present', '2023-12-12 05:25:34'),
(1910, 'Rara', 'Present', '2023-12-12 05:25:34'),
(1911, 'Rendi', 'Present', '2023-12-12 05:25:34'),
(1912, 'Danny', 'Present', '2023-12-12 05:25:35'),
(1913, 'Apsa', 'Present', '2023-12-12 05:25:35'),
(1914, '', 'false', '2023-12-12 06:26:07'),
(1915, '', 'false', '2023-12-12 06:26:07'),
(1916, '', 'false', '2023-12-12 06:26:07'),
(1917, '', 'false', '2023-12-12 06:26:07'),
(1918, '', 'false', '2023-12-12 06:26:07'),
(1919, '', 'false', '2023-12-12 06:26:07'),
(1920, '', 'false', '2023-12-12 06:26:07'),
(1921, '', 'false', '2023-12-12 06:26:07'),
(1922, '', 'false', '2023-12-12 06:26:07'),
(1923, 'Chrisna', 'false', '2023-12-12 06:26:08'),
(1924, 'Abiy', 'false', '2023-12-12 06:26:08'),
(1925, 'Sophia', 'false', '2023-12-12 06:26:08'),
(1926, 'Deiga', 'false', '2023-12-12 06:26:08'),
(1927, 'Jo', 'false', '2023-12-12 06:26:08'),
(1928, 'Rara', 'false', '2023-12-12 06:26:08'),
(1929, 'Rendi', 'false', '2023-12-12 06:26:08'),
(1930, 'Danny', 'false', '2023-12-12 06:26:08'),
(1931, 'Apsa', 'false', '2023-12-12 06:26:08'),
(1932, '', 'false', '2023-12-12 06:26:22'),
(1933, '', 'false', '2023-12-12 06:26:22'),
(1934, '', 'false', '2023-12-12 06:26:22'),
(1935, '', 'false', '2023-12-12 06:26:22'),
(1936, '', 'false', '2023-12-12 06:26:22'),
(1937, '', 'false', '2023-12-12 06:26:22'),
(1938, '', 'false', '2023-12-12 06:26:22'),
(1939, 'Chrisna', 'false', '2023-12-12 06:26:22'),
(1940, '', 'false', '2023-12-12 06:26:22'),
(1941, '', 'false', '2023-12-12 06:26:22'),
(1942, 'Jo', 'false', '2023-12-12 06:26:22'),
(1943, 'Sophia', 'false', '2023-12-12 06:26:22'),
(1944, 'Abiy', 'false', '2023-12-12 06:26:22'),
(1945, 'Deiga', 'false', '2023-12-12 06:26:22'),
(1946, 'Rara', 'false', '2023-12-12 06:26:22'),
(1947, 'Rendi', 'false', '2023-12-12 06:26:22'),
(1948, 'Apsa', 'false', '2023-12-12 06:26:22'),
(1949, 'Chrisna', 'Present', '2023-12-12 06:26:22'),
(1950, 'Deiga', 'Present', '2023-12-12 06:26:22'),
(1951, 'Danny', 'false', '2023-12-12 06:26:22'),
(1952, 'Jo', 'Present', '2023-12-12 06:26:22'),
(1953, 'Sophia', 'Present', '2023-12-12 06:26:22'),
(1954, 'Abiy', 'Present', '2023-12-12 06:26:22'),
(1955, 'Rendi', 'Present', '2023-12-12 06:26:22'),
(1956, 'Rara', 'Present', '2023-12-12 06:26:22'),
(1957, 'Apsa', 'Present', '2023-12-12 06:26:22'),
(1958, 'Danny', 'Present', '2023-12-12 06:26:23'),
(1959, 'Chrisna', 'Not Present', '2023-12-12 06:28:23'),
(1960, 'Chrisna', 'Present', '2023-12-12 06:35:06'),
(1961, '', 'false', '2023-12-12 06:39:32'),
(1962, '', 'false', '2023-12-12 06:39:32'),
(1963, '', 'false', '2023-12-12 06:39:32'),
(1964, '', 'false', '2023-12-12 06:39:32'),
(1965, '', 'false', '2023-12-12 06:39:32'),
(1966, '', 'false', '2023-12-12 06:39:32'),
(1967, '', 'false', '2023-12-12 06:39:32'),
(1968, '', 'false', '2023-12-12 06:39:32'),
(1969, '', 'false', '2023-12-12 06:39:32'),
(1970, 'Jo', 'false', '2023-12-12 06:39:32'),
(1971, 'Abiy', 'false', '2023-12-12 06:39:32'),
(1972, 'Sophia', 'false', '2023-12-12 06:39:32'),
(1973, 'Deiga', 'false', '2023-12-12 06:39:32'),
(1974, 'Chrisna', 'false', '2023-12-12 06:39:32'),
(1975, 'Rendi', 'false', '2023-12-12 06:39:32'),
(1976, 'Apsa', 'false', '2023-12-12 06:39:32'),
(1977, 'Danny', 'false', '2023-12-12 06:39:32'),
(1978, 'Rara', 'false', '2023-12-12 06:39:32'),
(1979, 'Chrisna', 'Present', '2023-12-12 06:39:32'),
(1980, 'Deiga', 'Present', '2023-12-12 06:39:32'),
(1981, 'Abiy', 'Present', '2023-12-12 06:39:32'),
(1982, 'Rara', 'Present', '2023-12-12 06:39:32'),
(1983, 'Rendi', 'Present', '2023-12-12 06:39:32'),
(1984, 'Jo', 'Present', '2023-12-12 06:39:32'),
(1985, 'Apsa', 'Present', '2023-12-12 06:39:32'),
(1986, 'Danny', 'Present', '2023-12-12 06:39:32'),
(1987, 'Sophia', 'Present', '2023-12-12 06:39:32'),
(1988, '', 'false', '2023-12-12 06:39:51'),
(1989, '', 'false', '2023-12-12 06:39:51'),
(1990, '', 'false', '2023-12-12 06:39:51'),
(1991, '', 'false', '2023-12-12 06:39:51'),
(1992, '', 'false', '2023-12-12 06:39:51'),
(1993, '', 'false', '2023-12-12 06:39:51'),
(1994, '', 'false', '2023-12-12 06:39:51'),
(1995, '', 'false', '2023-12-12 06:39:51'),
(1996, '', 'false', '2023-12-12 06:39:51'),
(1997, 'Rara', 'false', '2023-12-12 06:39:51'),
(1998, 'Abiy', 'false', '2023-12-12 06:39:51'),
(1999, 'Jo', 'false', '2023-12-12 06:39:51'),
(2000, 'Deiga', 'false', '2023-12-12 06:39:51'),
(2001, 'Chrisna', 'false', '2023-12-12 06:39:51'),
(2002, 'Sophia', 'false', '2023-12-12 06:39:51'),
(2003, 'Rendi', 'false', '2023-12-12 06:39:51'),
(2004, 'Danny', 'false', '2023-12-12 06:39:51'),
(2005, 'Apsa', 'false', '2023-12-12 06:39:51'),
(2006, 'Jo', 'Present', '2023-12-12 06:39:51'),
(2007, 'Chrisna', 'Present', '2023-12-12 06:39:51'),
(2008, 'Sophia', 'Present', '2023-12-12 06:39:51'),
(2009, 'Deiga', 'Present', '2023-12-12 06:39:51'),
(2010, 'Rara', 'Present', '2023-12-12 06:39:51'),
(2011, 'Abiy', 'Present', '2023-12-12 06:39:51'),
(2012, 'Rendi', 'Present', '2023-12-12 06:39:51'),
(2013, 'Danny', 'Present', '2023-12-12 06:39:51'),
(2014, 'Apsa', 'Present', '2023-12-12 06:39:51'),
(2015, '', 'false', '2023-12-12 06:40:28'),
(2016, '', 'false', '2023-12-12 06:40:28'),
(2017, '', 'false', '2023-12-12 06:40:28'),
(2018, '', 'false', '2023-12-12 06:40:28'),
(2019, '', 'false', '2023-12-12 06:40:28'),
(2020, '', 'false', '2023-12-12 06:40:28'),
(2021, '', 'false', '2023-12-12 06:40:28'),
(2022, '', 'false', '2023-12-12 06:40:28'),
(2023, '', 'false', '2023-12-12 06:40:28'),
(2024, 'Deiga', 'false', '2023-12-12 06:40:28'),
(2025, 'Jo', 'false', '2023-12-12 06:40:28'),
(2026, 'Sophia', 'false', '2023-12-12 06:40:28'),
(2027, 'Chrisna', 'false', '2023-12-12 06:40:28'),
(2028, 'Rara', 'false', '2023-12-12 06:40:28'),
(2029, 'Abiy', 'false', '2023-12-12 06:40:28'),
(2030, 'Rendi', 'false', '2023-12-12 06:40:29'),
(2031, 'Apsa', 'false', '2023-12-12 06:40:29'),
(2032, 'Danny', 'false', '2023-12-12 06:40:29'),
(2033, 'Chrisna', 'Present', '2023-12-12 06:40:29'),
(2034, 'Deiga', 'Present', '2023-12-12 06:40:29'),
(2035, 'Sophia', 'Present', '2023-12-12 06:40:29'),
(2036, 'Abiy', 'Present', '2023-12-12 06:40:29'),
(2037, 'Jo', 'Present', '2023-12-12 06:40:29'),
(2038, 'Rara', 'Present', '2023-12-12 06:40:29'),
(2039, 'Rendi', 'Present', '2023-12-12 06:40:29'),
(2040, 'Danny', 'Present', '2023-12-12 06:40:29'),
(2041, 'Apsa', 'Present', '2023-12-12 06:40:29'),
(2042, '', 'false', '2023-12-12 06:40:44'),
(2043, '', 'false', '2023-12-12 06:40:44'),
(2044, '', 'false', '2023-12-12 06:40:44'),
(2045, '', 'false', '2023-12-12 06:40:44'),
(2046, '', 'false', '2023-12-12 06:40:44'),
(2047, '', 'false', '2023-12-12 06:40:44'),
(2048, '', 'false', '2023-12-12 06:40:44'),
(2049, '', 'false', '2023-12-12 06:40:44'),
(2050, '', 'false', '2023-12-12 06:40:44'),
(2051, 'Chrisna', 'false', '2023-12-12 06:40:44'),
(2052, 'Deiga', 'false', '2023-12-12 06:40:44'),
(2053, 'Sophia', 'false', '2023-12-12 06:40:44'),
(2054, 'Jo', 'false', '2023-12-12 06:40:44'),
(2055, 'Rendi', 'false', '2023-12-12 06:40:44'),
(2056, 'Danny', 'false', '2023-12-12 06:40:44'),
(2057, 'Abiy', 'false', '2023-12-12 06:40:44'),
(2058, 'Rara', 'false', '2023-12-12 06:40:44'),
(2059, 'Apsa', 'false', '2023-12-12 06:40:44'),
(2060, 'Chrisna', 'Present', '2023-12-12 06:40:44'),
(2061, 'Deiga', 'Present', '2023-12-12 06:40:44'),
(2062, 'Jo', 'Present', '2023-12-12 06:40:44'),
(2063, 'Sophia', 'Present', '2023-12-12 06:40:44'),
(2064, 'Rara', 'Present', '2023-12-12 06:40:44'),
(2065, 'Abiy', 'Present', '2023-12-12 06:40:44'),
(2066, 'Rendi', 'Present', '2023-12-12 06:40:44'),
(2067, 'Danny', 'Present', '2023-12-12 06:40:44'),
(2068, 'Apsa', 'Present', '2023-12-12 06:40:44');

-- --------------------------------------------------------

--
-- Table structure for table `information`
--

CREATE TABLE `information` (
  `id` int(10) NOT NULL,
  `NoLetter` int(10) NOT NULL,
  `LetterName` varchar(255) NOT NULL,
  `File` varchar(255) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `information`
--

INSERT INTO `information` (`id`, `NoLetter`, `LetterName`, `File`, `Date`) VALUES
(8, 1, 'Holiday Information', 'uploads/HOLIDAY-1701686351706.pdf', '2023-12-04 10:39:11'),
(9, 567, 'Test', 'uploads/HOLIDAY-1702363442678.pdf', '2023-12-12 06:44:02');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `No` int(25) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Subject` varchar(255) NOT NULL,
  `Timein` varchar(255) NOT NULL,
  `Timeout` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`No`, `Name`, `Subject`, `Timein`, `Timeout`) VALUES
(20, 'Mrs Lany', 'Mathematics', '12:47', '13:47'),
(21, 'Mr Boy', 'Sport', '13:47', '14:47'),
(22, 'Mrs Prily', 'Music', '13:42', '14:42');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `No` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `BornDate` varchar(255) NOT NULL,
  `Addres` varchar(255) NOT NULL,
  `Contact` varchar(60) NOT NULL,
  `Picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`No`, `Name`, `BornDate`, `Addres`, `Contact`, `Picture`) VALUES
(1, 'Chrisna firman', '2023-12-12', 'TEST', '081929749600', 'uploads/No Image-1702363498987.jpg'),
(2, 'Deiga', '0001-01-01', '.', '0', 'uploads/fs-1701685122799.jpg'),
(3, 'Jo', '2002-08-06', 'Bekasi', '081929749600', 'uploads/fss-1701685654159.jpg'),
(4, 'Sophia', '2002-08-06', 'Bekasi', '081929749600', 'uploads/fs-1701685154425.jpg'),
(5, 'Abiy', '2002-08-06', 'Bekasi', '081929749600', 'uploads/fs-1701685186905.jpg'),
(6, 'Rara', '2002-08-06', 'Bekasi', '081929749600', 'uploads/fs-1701685644690.jpg'),
(7, 'Rendi', '2002-08-06', 'Bekasi', '081929749600', 'uploads/fs-1701685586507.jpg'),
(8, 'Danny', '2002-08-06', 'Bekasi', '081929749600', 'uploads/fs-1701685598073.jpg'),
(9, 'Apsa', '2002-08-06', 'Bekasi', '081929749600', 'uploads/fs-1701685609688.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `No` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `BornDate` varchar(255) NOT NULL,
  `Addres` varchar(255) NOT NULL,
  `Contact` varchar(60) NOT NULL,
  `Picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`No`, `Name`, `BornDate`, `Addres`, `Contact`, `Picture`) VALUES
(1, 'Mrs Sofia', '2023-12-07', 'Jakarta Indonesia', '083621773', 'uploads/No Image-1702363533813.jpg'),
(2, 'Mr Boy', '1991-06-01', 'PONDOK CIBUBUR ASRI BLOK D3 NO. 12 RT 04/ RW 01 JAKARTA TIMUR', '0851224434611', 'uploads/fsss-1701685774385.jpg'),
(3, 'Mrs Prily', '1993-07-10', 'JALAN BBD RAYA BLOK B1 NO. 54 RT 04/ RW 04 CIMANGGIS DEPOK', '0851284034612', 'uploads/fsss-1701685784327.jpg'),
(4, 'Mr Joe', '1995-05-01', 'JALAN LEBANON JAYA BLOK A3 NO. 22 RT 006/ RW 004 JAKARTA TIMUR', '0851224434612', 'uploads/fsss-1701685793883.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2069;

--
-- AUTO_INCREMENT for table `information`
--
ALTER TABLE `information`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `No` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
