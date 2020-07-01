CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Coco','Main brand'),(2,'Vans','Friend brand'),(3,'Wemoto','Friend brand'),(4,'Olend','Friend brand');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'true','Usuarios administradores'),(2,'false','Usuarios comunes');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoryproduct`
--

DROP TABLE IF EXISTS `categoryproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categoryproduct` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `idGenres` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoryproduct`
--

LOCK TABLES `categoryproduct` WRITE;
/*!40000 ALTER TABLE `categoryproduct` DISABLE KEYS */;
INSERT INTO `categoryproduct` VALUES (1,'Shirts','All kind of shirts',1),(2,'T-Shirts','All kind of T-shirts',1),(3,'Pants','All kind of pants',1),(4,'Shoes','All kind of shoes',1),(5,'Coats','All kind of coats',1),(6,'Dresses','All kind of dresses',1),(7,'Skirts','All kind of skirts',1),(8,'Belts','All kind of belts',1),(9,'Shirts','All kind of shirts',2),(10,'T-Shirts','All kind of T-shirts',2),(11,'Pants','All kind of pants',2),(12,'Shoes','All kind of shoes',2),(13,'Coats','All kind of coats',2),(14,'Dresses','All kind of dresses',2),(15,'Skirts','All kind of skirts',2),(16,'Belts','All kind of belts',2),(17,'Accesories','All kind of accesories',2);
/*!40000 ALTER TABLE `categoryproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colours`
--

DROP TABLE IF EXISTS `colours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `colours` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colours`
--

LOCK TABLES `colours` WRITE;
/*!40000 ALTER TABLE `colours` DISABLE KEYS */;
INSERT INTO `colours` VALUES (1,'black'),(2,'red'),(3,'white'),(4,'blue'),(5,'grey'),(6,'yellow'),(7,'brown'),(8,'lightblue'),(9,'lilac'),(10,'orange');
/*!40000 ALTER TABLE `colours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `discounts` (
  `id` int(11) NOT NULL,
  `percentage` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
INSERT INTO `discounts` VALUES (1,10),(2,20),(3,30),(4,40),(5,50),(6,0);
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'men'),(2,'women');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `offers` (
  `id` int(11) NOT NULL,
  `has` tinyint(4) NOT NULL DEFAULT 0,
  `description` varchar(200) DEFAULT NULL,
  `idDiscounts` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_offers_discounts1_idx` (`idDiscounts`),
  CONSTRAINT `fk_offers_discounts1` FOREIGN KEY (`idDiscounts`) REFERENCES `discounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (10,0,'No discount',6),(11,1,'Discount apply',1),(12,1,'Discount apply',2),(13,1,'Discount apply',3),(14,1,'Discount apply',4),(15,1,'Discount apply',5);
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(450) DEFAULT NULL,
  `image` varchar(450) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `idBrands` int(11) NOT NULL,
  `idColours` int(11) NOT NULL,
  `idCategoriesProduct` int(11) NOT NULL,
  `idOffers` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_brands_idx` (`idBrands`),
  KEY `fk_products_colours1_idx` (`idColours`),
  KEY `fk_products_categories1_idx` (`idCategoriesProduct`),
  KEY `fk_products_offers1_idx` (`idOffers`),
  CONSTRAINT `fk_products_brands` FOREIGN KEY (`idBrands`) REFERENCES `brands` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`idCategoriesProduct`) REFERENCES `categoryproduct` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_colours1` FOREIGN KEY (`idColours`) REFERENCES `colours` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_offers1` FOREIGN KEY (`idOffers`) REFERENCES `offers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Light blue Basic Shirt Neck Seamless','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s','CamisaBasicaCuelloSinCosturaCeleste1.png',31,1,8,1,12),(2,'Lilac Basic Shirt Neck Seamless','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s','CamisaBasicaCuelloSinCosturaLila1.png',31,1,9,1,10),(3,'White Formal Slim Fit Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s','CamisaFormalSlimFitBlanco1.png',31,1,3,1,10),(4,'Light blue Formal Slim Fit Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s','CamisaFormalSlimFitCeleste1.png',31,1,8,1,10),(5,'Active Raglan Hooded Jacket','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamperaActiveRaglanConCapucha1.png',60,1,1,5,13),(7,'Blue Cotton Cashmere Zipper Jacket','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamperaCierreAlgodónCashmereAzul1.png',60,1,4,5,10),(8,'Black Cotton Cashmere Zipper Jacket','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamperaCierreAlgodónCashmereNegro1.png',60,1,1,5,10),(9,'Vintage Nickel Belt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CinturonVintageNiquelRolo1.png',15,1,2,8,12),(10,'Vintage Overlapping Pin Belt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CinturonVintagePasadorSuperpuesto1.png',15,1,1,8,12),(11,'Blue Formal Slim Fit Trench Coat','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','PantalonFormalGabardinaSlimFitAzul1.png',40,1,4,3,14),(12,'Formal Lace-up Toe','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','AcordonadoFormalPuntera1.png',80,1,1,4,10),(13,'Black Formal Slim Fit Trench Coat','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','PantalonFormalGabardinaSlimFitNegro1.png',40,1,1,3,15),(14,'Black Piqué Lisa shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','ChombaPiqueLisaAM1.png',25,1,1,2,10),(15,'Red Piqué Lisa shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','ChombaPiqueLisaR1.png',25,1,2,2,10),(16,'Pima Round Neck T-shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraCuelloRedondoPima1.png',25,1,5,2,10),(17,'Yellow Scarf','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','BufandaAmarrilla1.png',10,1,6,17,10),(18,'Brown Scarf','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','BufandaMarron1.png',10,1,7,17,11),(19,'Diver ballon french terry','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Buzo ballon french terry1.png',45,1,10,13,11),(20,'French Terry Hoodie','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Buzo polera french terry1.png',45,1,1,13,10),(21,'White Shirt Sleeve Cut Poplin','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamisaMangaCortaPoplinBlanco1.png',35,1,3,9,12),(22,'Black Shirt Sleeve Cut Poplin','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamisaMangaCortaPoplinNegro1.png',35,1,1,9,10),(23,'White Silk Chiffon Gathering Shirts','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamisasFruncesGasaSedaBlanco1.png',35,1,3,9,10),(24,'Red Silk Chiffon Gathering Shirts','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamisasFruncesGasaSedaRojo1.png',35,1,2,9,10),(25,'Golden Belt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CinturonDorado1.png',15,1,6,16,15),(26,'Black Belt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CinturonNegro1.png',15,1,1,16,15),(27,'Jean Chupin','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','JeanChupin1.png',40,1,1,11,10),(28,'Straight jean','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','JeanRecto1.png',40,1,7,11,13),(29,'Black Cotton Striped Long Sleeve T-shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMangaLargaRayadaAlgodonNegro1.png',25,1,1,10,15),(30,'Red Cotton Striped Long Sleeve T-shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMangaLargaRayadaAlgodonRojo1.png',25,1,2,10,14),(31,'White Linen Mini Chain T-Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMiniCadenaLinoBlaco1.png',25,1,3,10,15),(32,'Grey Linen Mini Chain T-Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMiniCadenaLinoGris1.png',25,1,5,10,15),(33,'Black Linen Mini Chain T-Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMiniCadenaLinoNegro1.png',25,1,1,10,15),(34,'High Neck Satin Dress','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','VestidoCuelloAltoSatenV1.png',70,1,3,14,10),(35,'High Neck Dress Satin Board','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','VestidoCuelloAltoSatenVBordo1.png',70,1,2,14,10),(36,'Long Cross Twill Print','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','VestidoLargoCruzadoTwillEstampado1.png',70,1,2,14,10),(37,'Lowaodia Boots','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','BotasEowaodia1.png',80,1,1,12,12),(38,'Texanas With Studs','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','TexanasConTachas1.png',80,1,1,12,13),(39,'PRUEBA PARA BORRAR','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','TexanasConTachas1.png',80,1,1,12,13),(40,'PRUEBA PARA EDITAR','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','TexanasConTachas1.png',80,1,1,12,13);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_sizes`
--

DROP TABLE IF EXISTS `products_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products_sizes` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `idProducts` int(11) NOT NULL,
  `idSizes` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_sizes_products1_idx` (`idProducts`),
  KEY `fk_products_sizes_sizes1_idx` (`idSizes`),
  CONSTRAINT `fk_products_sizes_products1` FOREIGN KEY (`idProducts`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_sizes_sizes1` FOREIGN KEY (`idSizes`) REFERENCES `sizes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_sizes`
--

LOCK TABLES `products_sizes` WRITE;
/*!40000 ALTER TABLE `products_sizes` DISABLE KEYS */;
INSERT INTO `products_sizes` VALUES (1,30,1,1),(2,40,1,2),(3,50,1,3),(4,20,2,4),(5,50,2,5),(6,30,2,6),(7,30,3,4),(8,30,3,1),(9,40,3,2),(10,30,4,3),(11,70,4,1),(12,100,4,2),(13,30,5,3),(14,30,5,1),(15,40,5,2),(16,70,7,1),(17,60,7,2),(18,30,7,3),(19,30,8,1),(20,30,8,2),(21,40,8,3),(22,30,9,1),(23,70,9,2),(24,30,9,3),(25,30,10,1),(26,90,10,2),(27,30,10,3),(28,30,11,1),(29,50,11,2),(30,30,11,3),(31,70,12,3),(32,30,12,1),(33,70,12,2),(34,80,13,3),(35,50,13,5),(36,30,13,6),(37,30,14,3),(38,30,14,1),(39,20,14,2),(40,30,15,3),(41,60,15,5),(42,30,15,6),(43,30,16,3),(44,70,16,1),(45,30,16,2),(46,30,17,3),(47,30,17,5),(48,50,17,6),(49,30,18,3),(50,90,18,1),(51,80,18,2),(52,30,19,3),(53,30,19,5),(54,30,19,6),(55,30,20,3),(56,30,20,1),(57,40,20,2),(58,30,21,3),(59,60,21,5),(60,30,21,6),(61,30,22,3),(62,30,22,1),(63,50,22,2),(64,30,23,3),(65,30,23,5),(66,70,23,6),(67,30,24,3),(68,30,24,1),(69,30,24,2),(70,60,25,3),(71,30,25,5),(72,30,25,6),(73,20,26,3),(74,30,26,1),(75,30,26,2),(76,30,27,3),(77,30,27,5),(78,30,27,6),(79,30,28,3),(80,30,28,1),(81,30,28,2),(82,30,29,3),(83,30,29,5),(84,30,29,6),(85,30,30,3),(86,30,30,1),(87,30,30,2),(88,30,31,3),(89,30,31,5),(90,30,31,6),(91,30,32,3),(92,30,33,1),(93,30,33,2),(94,30,33,3),(95,30,34,5),(96,30,34,6),(97,30,34,3),(98,30,35,1),(99,30,35,2),(100,30,35,3),(101,30,36,5),(102,30,36,6),(103,30,36,3),(104,30,37,1),(105,40,37,2),(106,30,37,3),(107,30,38,5),(108,100,38,6),(109,30,38,3),(110,30,39,1),(111,30,39,2),(112,40,39,3),(113,30,40,5),(114,30,40,6),(115,30,40,3);
/*!40000 ALTER TABLE `products_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'XS'),(2,'S'),(3,'M'),(4,'L'),(5,'XL'),(6,'XXL');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `avatar` varchar(450) DEFAULT NULL,
  `idCategories` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_users_categorys1_idx` (`idCategories`),
  CONSTRAINT `fk_users_categorys1` FOREIGN KEY (`idCategories`) REFERENCES `categoryproduct` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Franco','Casuscelli','franco.casuscelli5@gmail.com','$2b$10$EHyP3HFOtveIdyB1JbPJyu/sHJhwEipXmbPZRD0odQr8eMEvzLb9a','fran.jpg',1),(2,'Lucaz','Ramirez','lramirez@gmail.com','$2b$10$suWCBhqcz6IMkBCWaJQ.xuMd2K22y3MVNYTQDEi2id8cbJAXir8o6','default.jpg',2),(3,'Brad','Pitt','BP@gmail.com','$2b$10$uQSLOFvByXqYBmhgMNW84uXpAByra3nGtDLND5T0VWsPNpDaSBLoe','image-1591841636694.jpg',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-01 12:35:22
