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

-- 테이블 데이터 wewigg.mates:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `mates` DISABLE KEYS */;
INSERT INTO `mates` (`Id`, `SeekerName`, `Line`, `Mode`, `Mic`, `Content`, `Password`, `Champions`, `League`, `CreateAt`, `SeekerLevel`, `SeekerIcon`) VALUES
	(26, '내덕동팬티도둑', 'All', 'Team', 0, '1234', '1234', 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Diana.png,http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Garen.png,http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Nasus.png', '[]', '2023-02-01 15:09:04', 705, 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/4026.png'),
	(27, '전 종일 게임해요', 'All', 'All', 0, '44123', '1234', 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Darius.png,http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Graves.png,http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Zoe.png', '[{"leagueId":"69efc5c0-003e-421c-b83b-0beb8e05026c","queueType":"RANKED_TFT_DOUBLE_UP","tier":"SILVER","rank":"IV","summonerId":"i05YPH3Iii4mH8Xe4n6jtrDGlOCnDCmf6FBZX_siF9dr5A","summonerName":"전 종일 게임해요","leaguePoints":43,"wins":4,"losses":1,"veteran":false,"inactive":false,"freshBlood":false,"hotStreak":false},{"leagueId":"3de33167-917d-4b6a-b664-1113b2134718","queueType":"RANKED_FLEX_SR","tier":"DIAMOND","rank":"IV","summonerId":"i05YPH3Iii4mH8Xe4n6jtrDGlOCnDCmf6FBZX_siF9dr5A","summonerName":"전 종일 게임해요","leaguePoints":29,"wins":9,"losses":8,"veteran":false,"inactive":false,"freshBlood":true,"hotStreak":false}]', '2023-02-02 12:02:54', 2271, 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/5643.png'),
	(28, '스쿵씨', 'All', 'All', 0, '1234', '1234', 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Blitzcrank.png,http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/LeeSin.png,http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/Shaco.png', '[]', '2023-02-02 12:25:23', 296, 'http://ddragon.leagueoflegends.com/cdn/13.1.1/img/profileicon/4560.png');
/*!40000 ALTER TABLE `mates` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
