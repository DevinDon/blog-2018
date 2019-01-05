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

/*Table structure for table `motto` */

DROP TABLE IF EXISTS `motto`;

CREATE TABLE `motto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` char(64) DEFAULT NULL,
  `text` char(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

/*Data for the table `motto` */

insert  into `motto`(`id`,`author`,`text`) values
(1,NULL,'大道虽简, 知易行难.'),
(2,NULL,'从善如登, 从恶如崩.'),
(3,NULL,'不以物喜, 不以己悲.'),
(4,NULL,'宠辱不惊, 悲喜无鸣.'),
(5,NULL,'你在心上, 别来无恙.'),
(6,NULL,'念念不忘, 必有回响.'),
(7,NULL,'杀人诛心, 手下留情.'),
(8,NULL,'思念太长, 幸福太短.'),
(9,NULL,'于小不忍, 则乱大谋.'),
(10,NULL,'一厢情愿, 有始无终.'),
(11,NULL,'但行好事, 莫问前程.'),
(12,NULL,'笨鸟先飞, 大器晚成.'),
(13,NULL,'仓鼎实而知礼节, 衣食足者知荣辱.'),
(14,NULL,'马行无力皆因瘦, 人不风流只为贫.'),
(15,NULL,'初闻不识曲中意, 再闻已成曲中人.'),
(16,NULL,'待人友善是修养, 独来独往是性格.'),
(17,NULL,'你本无意穿堂风, 偏偏却引山间洪.'),
(18,NULL,'天堂向上, 生活向下.'),
(19,NULL,'世间所爱皆相聚, 唯有父爱向别离.'),
(20,NULL,'我艰难的行走在人间, 你选择长留地狱和天堂'),
(21,NULL,'人类的悲喜并不相通, 我只觉得他们吵闹.'),
(22,NULL,'如果快乐太难, 那我祝你平安.'),
(23,NULL,'爱有千万种开始, 而死亡是最好的结局.');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
