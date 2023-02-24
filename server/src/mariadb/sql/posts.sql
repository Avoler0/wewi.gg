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

-- 테이블 데이터 wewigg.posts:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT IGNORE INTO `posts` (`PostId`, `PostTitle`, `Content`, `CommunityName`, `UserName`, `CreateAt`, `Thumbnail`, `Good`, `Bad`, `View`) VALUES
	(170, '테스트 1', '<p>1234<br><img src="http://localhost:4000/wewi-gg/posts/attach/images?src=emptyUploads/1674904569892-50.png" alt="image"><br></p>', '유저 뉴스', '테스트 계정', '2023-02-01 13:40:24', 'emptyUploads/1674904569892-50.png', 0, 0, 7),
	(171, '테스트 2', '<p>4231<br></p>', '팁과 노하우', '테스트 계정', '2023-01-28 20:21:58', '', 0, 0, 5),
	(172, '테스트 포스트입니다.', '<p><br><br><img src="http://localhost:4000/wewi-gg/posts/attach/images?src=emptyUploads/1675493004721-52.gif" alt="image"><br><br><br>Wewi.gg<br></p>', '유저 뉴스', '테스트 네이버', '2023-02-04 15:43:50', 'emptyUploads/1675493004721-52.gif', 0, 0, 0);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
