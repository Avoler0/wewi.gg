-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.7.3-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 데이터 wewigg.users:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`Id`, `Email`, `Name`, `Password`, `CreatedAt`, `UpdatedAt`, `OauthType`, `OauthToken`) VALUES
	(50, 'jys1391@gmail.com', '테스트 계정', 'null', '2023-01-26 21:16:47', '2023-01-26 21:16:47', 'google', '111513919415132003355'),
	(51, 'test@test.com', 'test', 'test1234!', '2023-01-28 20:41:56', '2023-01-28 20:41:56', 'null', 'null'),
	(52, 'avoler01@naver.com', '테스트 네이버', 'null', '2023-01-30 16:07:27', '2023-01-30 16:07:27', 'naver', 'AAAAOBwAzQ-rwNeL9mvJwUYiAA3okT6aYPWi_zZZiTvZ9nx5pBAs4iNgPh6YvAK2d3Gb54A82Z5G82vj6-g1I03xOX8'),
	(53, 'test2@test.com', '테스트 계정2', 'test1234!', '2023-02-20 18:51:14', '2023-02-20 18:51:14', 'null', 'null'),
	(54, 'test3@test.com', '테스트 계정3', 'test1234!', '2023-02-20 18:52:59', '2023-02-20 18:52:59', 'null', 'null');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
