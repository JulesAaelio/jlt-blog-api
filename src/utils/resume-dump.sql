-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: jlt-blog-api
-- ------------------------------------------------------
-- Server version	5.7.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,'2016-09-01','2021-09-21','RNCP 7 - Expert informatique et systèmes d\'informations','Lyon Ynov Campus','Lyon','RNCP35078 - Un équilibre entre l\'apprentissage par la pratique et la théorie. Travail systématique en mode projet. ','OBTENU','https://www.ynov.com','public/resume-images/logo_ynov.png','2021-03-22 22:02:05','2021-03-22 22:02:05'),(2,'2013-09-01','2016-06-01','Baccalauréat Scientifique - Sciences de l\'Ingénieur','Lycée René Descartes','Saint-Genis-Laval','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem arcu, accumsan ut mi a, porttitor scelerisque ante. Vestibulum feugiat massa id diam sagittis dignissim','ADMIS MENTION TRES BIEN','https://rene-descartes.ent.auvergnerhonealpes.fr/','public/resume-images/logo_descartes.png','2021-03-22 22:02:05','2021-03-22 22:02:05');
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` VALUES (1,'2020-01-01','2020-07-01','Développeur informatique ','Groupe Casino','Développements divers, développement d’applications en android natif','https://www.groupe-casino.fr','public/resume-images/logo_casino.png','2021-03-22 22:02:05','2021-03-22 22:02:05'),(2,'2020-01-01','2020-01-31','Développeur open-source','La grosse ESN','Découverte du monde de l’open source. Développement et maintenance de processus d’automatisation.','https://lepetitbloc.net','public/resume-images/logo_petitbloc.png','2021-03-22 22:02:05','2021-03-22 22:02:05'),(3,'2021-03-25','2021-03-25','Responsable d\'application','Worldline','Suivi d\'une instance en production et développements spécifique d’une application permettant aux entreprises de gérer efficacement leur processus d’interaction avec leurs clients.\n','https://worldline.com','public/resume-images/logo_worldline.png','2021-03-25 16:49:29','2021-03-25 16:49:24');
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `experience_skill`
--

LOCK TABLES `experience_skill` WRITE;
/*!40000 ALTER TABLE `experience_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `experience_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'jules.laurent@outlook.com','+33625309652','public/avatar.png','jules.laurent','https://www.juleslaurent.fr','julesaaelio','julesaaelio','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem arcu, accumsan ut mi a, porttitor scelerisque ante. Vestibulum feugiat massa id diam sagittis dignissim.','LYON','jules','laurent','2021-03-22 22:02:05','2021-03-22 22:02:05');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `portfolio`
--

LOCK TABLES `portfolio` WRITE;
/*!40000 ALTER TABLE `portfolio` DISABLE KEYS */;
/*!40000 ALTER TABLE `portfolio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `realisation`
--

LOCK TABLES `realisation` WRITE;
/*!40000 ALTER TABLE `realisation` DISABLE KEYS */;
INSERT INTO `realisation` VALUES (1,'Super site web','Lorem ipsum dolor sit amet','Lorem ipsum dolot sit amet','http://placehold.it/500x500','http://twittet.com','2021-03-22 22:02:06','2021-03-22 22:02:06');
/*!40000 ALTER TABLE `realisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `realisation_portfolio`
--

LOCK TABLES `realisation_portfolio` WRITE;
/*!40000 ALTER TABLE `realisation_portfolio` DISABLE KEYS */;
/*!40000 ALTER TABLE `realisation_portfolio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `realisation_skill`
--

LOCK TABLES `realisation_skill` WRITE;
/*!40000 ALTER TABLE `realisation_skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `realisation_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resume`
--

LOCK TABLES `resume` WRITE;
/*!40000 ALTER TABLE `resume` DISABLE KEYS */;
INSERT INTO `resume` VALUES (1,'PRIMARY','DEVELOPPEUR INFORMATIQUE','OUVERT AUX OPPORTUNITEES','https://placehold.it/500x500','2021-03-22 22:02:05','2021-03-22 22:02:05',1);
/*!40000 ALTER TABLE `resume` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resume_education`
--

LOCK TABLES `resume_education` WRITE;
/*!40000 ALTER TABLE `resume_education` DISABLE KEYS */;
INSERT INTO `resume_education` VALUES ('2021-03-22 22:02:05','2021-03-22 22:02:05',1,1),('2021-03-22 22:02:05','2021-03-22 22:02:05',2,1);
/*!40000 ALTER TABLE `resume_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resume_experience`
--

LOCK TABLES `resume_experience` WRITE;
/*!40000 ALTER TABLE `resume_experience` DISABLE KEYS */;
INSERT INTO `resume_experience` VALUES ('2021-03-22 22:02:05','2021-03-22 22:02:05',1,1),('2021-03-22 22:02:05','2021-03-22 22:02:05',2,1),('2021-03-25 16:50:09','2021-03-25 16:50:12',3,1);
/*!40000 ALTER TABLE `resume_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resume_portfolio`
--

LOCK TABLES `resume_portfolio` WRITE;
/*!40000 ALTER TABLE `resume_portfolio` DISABLE KEYS */;
/*!40000 ALTER TABLE `resume_portfolio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resume_skill`
--

LOCK TABLES `resume_skill` WRITE;
/*!40000 ALTER TABLE `resume_skill` DISABLE KEYS */;
INSERT INTO `resume_skill` VALUES ('2021-03-26 15:56:14','2021-03-26 15:56:16',1,10),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,11),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,12),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,13),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,14),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,15),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,16),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,17),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,18),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,19),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,20),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,21),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,22),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,24),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,25),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,26),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,27),('2021-03-26 15:56:14','2021-03-26 15:56:16',1,28);
/*!40000 ALTER TABLE `resume_skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
INSERT INTO `skill` VALUES (10,'HTML5 / CSS',NULL,'2021-03-26 15:31:49','2021-03-26 15:31:52',3),(11,'Angular',NULL,'2021-03-26 15:31:49','2021-03-26 15:31:52',3),(12,'NodeJS',NULL,'2021-03-26 15:31:49','2021-03-26 15:31:52',3),(13,'Symfony',NULL,'2021-03-26 15:31:49','2021-03-26 15:31:52',3),(14,'Spring-boot',NULL,'2021-03-26 15:31:49','2021-03-26 15:31:52',3),(15,'Docker ',NULL,'2021-03-26 15:33:15','2021-03-26 15:33:18',2),(16,'Gitlab',NULL,'2021-03-26 15:34:00','2021-03-26 15:34:00',2),(17,'Telegraf',NULL,'2021-03-26 15:34:12','2021-03-26 15:34:16',7),(18,'InDesign',NULL,'2021-03-26 15:34:50','2021-03-26 15:34:53',7),(19,'Linux',NULL,'2021-03-26 15:34:50','2021-03-26 15:34:53',6),(20,'Git ',NULL,'2021-03-26 15:35:25','2021-03-26 15:35:28',6),(21,'Office 365',NULL,'2021-03-26 15:35:49','2021-03-26 15:35:53',4),(22,'Java',NULL,'2021-03-26 15:36:16','2021-03-26 15:36:17',4),(23,'VXML',NULL,'2021-03-26 15:36:30','2021-03-26 15:36:35',7),(24,'Jira',NULL,'2021-03-26 15:36:53','2021-03-26 15:36:57',6),(25,'Android ',NULL,'2021-03-26 15:37:07','2021-03-26 15:37:10',4),(26,'Anglais courant',NULL,'2021-03-26 15:37:44','2021-03-26 15:42:19',5),(27,'Management',NULL,'2021-03-26 15:43:22','2021-03-26 15:43:25',1),(28,'Allemand scolaire','J\'ai suivi des cours d\'allemand pendant 7 ans au collège et au lycée. ','2021-03-26 15:51:52','2021-03-26 15:51:56',5),(29,'Typescript',NULL,'2021-03-26 16:04:09','2021-03-26 16:04:10',7);
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `skill_category`
--

LOCK TABLES `skill_category` WRITE;
/*!40000 ALTER TABLE `skill_category` DISABLE KEYS */;
INSERT INTO `skill_category` VALUES (1,'Non techniques ',NULL,'2021-03-26 15:14:52','2021-03-26 15:14:47'),(2,'Devops',NULL,'2021-03-26 15:22:56','2021-03-26 15:23:01'),(3,'Developpement web ',NULL,'2021-03-26 15:23:34','2021-03-26 15:23:47'),(4,'Developpement logiciel',NULL,'2021-03-26 15:23:45','2021-03-26 15:23:48'),(5,'Langues',NULL,'2021-03-26 15:25:14','2021-03-26 15:25:17'),(6,'Outils, systèmes et agilité',NULL,'2021-03-26 15:26:40','2021-03-26 15:26:43'),(7,'Non classé',NULL,'2021-03-26 15:34:31','2021-03-26 15:34:30');
/*!40000 ALTER TABLE `skill_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-12 19:01:36
