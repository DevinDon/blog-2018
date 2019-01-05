/*
SQLyog Community v13.1.1 (64 bit)
MySQL - 5.7.24 : Database - docker
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`docker` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `docker`;

/*Table structure for table `song` */

DROP TABLE IF EXISTS `song`;

CREATE TABLE `song` (
  `id` int(11) NOT NULL COMMENT 'mid, music id.',
  `time` int(11) NOT NULL,
  `title` char(64) NOT NULL,
  `artist` char(64) NOT NULL,
  `album` char(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `song` */

insert  into `song`(`id`,`time`,`title`,`artist`,`album`) values
(101014,242,'曹操','林俊杰','曹操'),
(140265,258,'祝我生日快乐 Panasonic广告原曲','温岚','温式效应'),
(613724,273,'外面的世界 《东成西就2011》电影插曲','莫文蔚','回蔚'),
(5020469,208,'被驯服的象','蔡健雅','天使与魔鬼的对话'),
(5099912,275,'Daisy 《境界的彼方》TV动画片尾曲','STEREO DIVE FOUNDATION','Daisy (雏菊)'),
(5267057,207,'Do You Want to Build a Snowman?','Katie Lopez / Agatha Lee Monn / Kristen Bell','Frozen (Original Motion Picture Soundtrack) [Deluxe Edition]'),
(5267065,224,'Let It Go (Single Version) 《冰雪奇缘》电影主题曲','Demi Lovato','Frozen (Original Motion Picture Soundtrack) [Deluxe Edition]'),
(5604064,276,'寻人启事','徐佳莹','寻人启事'),
(9113528,286,'第三人称','蔡依林','呸'),
(101138698,171,'Do You Want To Build A Snowman? 《冰雪奇缘》电影插曲','Jasmine Thompson','Take Cover'),
(101287035,292,'一切安好','莫文蔚','不散，不见'),
(101798259,258,'难得孤寂','A-Lin','罪恶感'),
(101804789,325,'南山南','马頔','孤岛'),
(101805138,232,'浮光掠影','阿肆','预谋邂逅'),
(101805144,211,'缺乏','阿肆','预谋邂逅'),
(102059922,229,'不散，不见','莫文蔚','不散，不见'),
(102059923,243,'时间里的飞人','莫文蔚','不散，不见'),
(102059928,214,'摇篮曲','莫文蔚','不散，不见'),
(104550904,267,'IF YOU','杨承熹','IF YOU'),
(104792679,286,'一半','薛之谦','一半'),
(105503773,86,'无敌 《美人鱼》电影宣传曲','邓超','无敌'),
(105635545,342,'secret base ~君がくれたもの~ (secret base ~你给我的所有~) 《未闻花名》日剧主题曲','SILENT SIREN (サイレント・サイレン)','S'),
(108965323,238,'我愚蠢的理想主义','阿肆','我愚蠢的理想主义'),
(200097346,308,'也罢','鲁向卉','也罢'),
(200540306,69,'最后的礼物 《小草青青》电视剧片尾曲','许飞',''),
(201213781,318,'高尚','薛之谦','渡 The Crossing'),
(201233287,233,'21','RAiNBOW计划 / 刘雨含','黄'),
(202864131,250,'岁月神偷 《逆时营救》电影主题曲','周笔畅','岁月神偷'),
(203639711,270,'I Do','莫文蔚','我们在中场相遇'),
(212064509,243,'我要的飞翔','徐意如','默'),
(214242389,227,'大梦','李雨','大梦'),
(214734117,279,'年少有为','李荣浩','耳朵'),
(225284905,239,'我要给世界最悠长的湿吻 Kisses For The World','蔡健雅','我要给世界最悠长的湿吻 Kisses For The World');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
