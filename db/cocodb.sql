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

DROP TABLE IF EXISTS brands;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE brands (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  description varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES brands WRITE;
/*!40000 ALTER TABLE brands DISABLE KEYS */;
INSERT INTO brands VALUES (1,'Coco','Main brand'),(2,'Vans','Friend brand'),(3,'Wemoto','Friend brand'),(4,'Olend','Friend brand');
/*!40000 ALTER TABLE brands ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS categories;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE categories (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  description varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES categories WRITE;
/*!40000 ALTER TABLE categories DISABLE KEYS */;
INSERT INTO categories VALUES (1,'true','Usuarios administradores'),(2,'false','Usuarios comunes');
/*!40000 ALTER TABLE categories ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoryproduct`
--

DROP TABLE IF EXISTS categoryproduct;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE categoryproduct (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  description varchar(200) DEFAULT NULL,
  genre varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoryproduct`
--

LOCK TABLES categoryproduct WRITE;
/*!40000 ALTER TABLE categoryproduct DISABLE KEYS */;
INSERT INTO categoryproduct VALUES (1,'Shirts','All kind of shirts','Man'),(2,'T-Shirts','All kind of T-shirts','Man'),(3,'Pants','All kind of pants','Man'),(4,'Shoes','All kind of shoes','Man'),(5,'Coats','All kind of coats','Man'),(6,'Dresses','All kind of dresses','Man'),(7,'Skirts','All kind of skirts','Man'),(8,'Belts','All kind of belts','Man'),(9,'Shirts','All kind of shirts','Woman'),(10,'T-Shirts','All kind of T-shirts','Woman'),(11,'Pants','All kind of pants','Woman'),(12,'Shoes','All kind of shoes','Woman'),(13,'Coats','All kind of coats','Woman'),(14,'Dresses','All kind of dresses','Woman'),(15,'Skirts','All kind of skirts','Woman'),(16,'Belts','All kind of belts','Woman'),(17,'Accesories','All kind of accesories','Woman');
/*!40000 ALTER TABLE categoryproduct ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colours`
--

DROP TABLE IF EXISTS colours;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE colours (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colours`
--

LOCK TABLES colours WRITE;
/*!40000 ALTER TABLE colours DISABLE KEYS */;
INSERT INTO colours VALUES (1,'black'),(2,'red'),(3,'white'),(4,'blue'),(5,'grey'),(6,'yellow'),(7,'brown'),(8,'lightblue'),(9,'lilac'),(10,'orange');
/*!40000 ALTER TABLE colours ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS offers;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE offers (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  has tinyint(4) NOT NULL DEFAULT 0,
  description varchar(200) DEFAULT NULL,
  percentage int(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES offers WRITE;
/*!40000 ALTER TABLE offers DISABLE KEYS */;
INSERT INTO offers VALUES (10,0,'No discount',0),(11,1,'Discount apply',10),(12,1,'Discount apply',20),(13,1,'Discount apply',30),(14,1,'Discount apply',40),(15,1,'Discount apply',50);
/*!40000 ALTER TABLE offers ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS products;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE products (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  description varchar(450) DEFAULT NULL,
  image varchar(450) DEFAULT NULL,
  price decimal(10,0) NOT NULL,
  idBrands int(11) NOT NULL,
  idColours int(11) NOT NULL,
  idCategoriesProduct int(11) NOT NULL,
  idOffers int(11) NOT NULL,
  idSizes int(11) NOT NULL,
  quantity int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY fk_products_brands_idx (idBrands),
  KEY fk_products_colours1_idx (idColours),
  KEY fk_products_categories1_idx (idCategoriesProduct),
  KEY fk_products_offers1_idx (idOffers),
  KEY fk_products_sizes_idx (idSizes),
  CONSTRAINT fk_products_brands FOREIGN KEY (idBrands) REFERENCES brands (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_products_categories1 FOREIGN KEY (idCategoriesProduct) REFERENCES categoryproduct (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_products_colours1 FOREIGN KEY (idColours) REFERENCES colours (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_products_offers1 FOREIGN KEY (idOffers) REFERENCES offers (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_products_sizes FOREIGN KEY (idSizes) REFERENCES sizes (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES products WRITE;
/*!40000 ALTER TABLE products DISABLE KEYS */;
INSERT INTO products VALUES (1,'Light blue Basic Shirt Neck Seamless','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s','CamisaBasicaCuelloSinCosturaCeleste1.png',31,1,8,1,12,1,20),(2,'Lilac Basic Shirt Neck Seamless','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s','CamisaBasicaCuelloSinCosturaLila1.png',31,1,9,1,10,1,20),(3,'White Formal Slim Fit Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s','CamisaFormalSlimFitBlanco1.png',31,1,3,1,10,1,20),(4,'Light blue Formal Slim Fit Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s','CamisaFormalSlimFitCeleste1.png',31,1,8,1,10,1,20),(5,'Active Raglan Hooded Jacket','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamperaActiveRaglanConCapucha1.png',60,1,1,5,13,1,20),(7,'Blue Cotton Cashmere Zipper Jacket','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamperaCierreAlgodónCashmereAzul1.png',60,1,4,5,10,1,20),(8,'Black Cotton Cashmere Zipper Jacket','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamperaCierreAlgodónCashmereNegro1.png',60,1,1,5,10,1,20),(9,'Vintage Nickel Belt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CinturonVintageNiquelRolo1.png',15,1,2,8,12,1,20),(10,'Vintage Overlapping Pin Belt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CinturonVintagePasadorSuperpuesto1.png',15,1,1,8,12,2,20),(11,'Blue Formal Slim Fit Trench Coat','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','PantalonFormalGabardinaSlimFitAzul1.png',40,1,4,3,14,2,30),(12,'Formal Lace-up Toe','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','AcordonadoFormalPuntera1.png',80,1,1,4,10,2,30),(13,'Black Formal Slim Fit Trench Coat','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','PantalonFormalGabardinaSlimFitNegro1.png',40,1,1,3,15,2,30),(14,'Black Piqué Lisa shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','ChombaPiqueLisaAM1.png',25,1,1,2,10,2,30),(15,'Red Piqué Lisa shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','ChombaPiqueLisaR1.png',25,1,2,2,10,2,30),(16,'Pima Round Neck T-shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraCuelloRedondoPima1.png',25,1,5,2,10,2,30),(17,'Yellow Scarf','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','BufandaAmarrilla1.png',10,1,6,17,10,3,30),(18,'Brown Scarf','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','BufandaMarron1.png',10,1,7,17,11,3,30),(19,'Diver ballon french terry','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Buzo ballon french terry1.png',45,1,10,13,11,3,30),(20,'French Terry Hoodie','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','Buzo polera french terry1.png',45,1,1,13,10,3,30),(21,'White Shirt Sleeve Cut Poplin','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamisaMangaCortaPoplinBlanco1.png',35,1,3,9,12,3,10),(22,'Black Shirt Sleeve Cut Poplin','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamisaMangaCortaPoplinNegro1.png',35,1,1,9,10,3,10),(23,'White Silk Chiffon Gathering Shirts','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamisasFruncesGasaSedaBlanco1.png',35,1,3,9,10,3,10),(24,'Red Silk Chiffon Gathering Shirts','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CamisasFruncesGasaSedaRojo1.png',35,1,2,9,10,3,10),(25,'Golden Belt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CinturonDorado1.png',15,1,6,16,15,3,40),(26,'Black Belt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','CinturonNegro1.png',15,1,1,16,15,3,40),(27,'Jean Chupin','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','JeanChupin1.png',40,1,1,11,10,3,40),(28,'Straight jean','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','JeanRecto1.png',40,1,7,11,13,3,40),(29,'Black Cotton Striped Long Sleeve T-shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMangaLargaRayadaAlgodonNegro1.png',25,1,1,10,15,4,40),(30,'Red Cotton Striped Long Sleeve T-shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMangaLargaRayadaAlgodonRojo1.png',25,1,2,10,14,4,40),(31,'White Linen Mini Chain T-Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMiniCadenaLinoBlaco1.png',25,1,3,10,15,4,50),(32,'Grey Linen Mini Chain T-Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMiniCadenaLinoGris1.png',25,1,5,10,15,5,50),(33,'Black Linen Mini Chain T-Shirt','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','RemeraMiniCadenaLinoNegro1.png',25,1,1,10,15,5,50),(34,'High Neck Satin Dress','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','VestidoCuelloAltoSatenV1.png',70,1,3,14,10,5,50),(35,'High Neck Dress Satin Board','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','VestidoCuelloAltoSatenVBordo1.png',70,1,2,14,10,5,50),(36,'Long Cross Twill Print','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','VestidoLargoCruzadoTwillEstampado1.png',70,1,2,14,10,5,50),(37,'Lowaodia Boots','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','BotasEowaodia1.png',80,1,1,12,12,6,50),(38,'Texanas With Studs','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','TexanasConTachas1.png',80,1,1,12,13,6,50),(39,'PRUEBA PARA BORRAR','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','TexanasConTachas1.png',80,1,1,12,13,6,50),(40,'PRUEBA PARA EDITAR','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','TexanasConTachas1.png',80,1,1,12,13,6,50);
/*!40000 ALTER TABLE products ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS sizes;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE sizes (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES sizes WRITE;
/*!40000 ALTER TABLE sizes DISABLE KEYS */;
INSERT INTO sizes VALUES (1,'XS'),(2,'S'),(3,'M'),(4,'L'),(5,'XL'),(6,'XXL');
/*!40000 ALTER TABLE sizes ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS users;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE users (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  first_name varchar(45) NOT NULL,
  last_name varchar(45) NOT NULL,
  email varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  avatar varchar(450) DEFAULT NULL,
  idCategories int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY email_UNIQUE (email),
  KEY fk_users_categorys1_idx (idCategories)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES users WRITE;
/*!40000 ALTER TABLE users DISABLE KEYS */;
INSERT INTO users VALUES (1,'Franco','Casuscelli','franco.casuscelli5@gmail.com','$2b$10$EHyP3HFOtveIdyB1JbPJyu/sHJhwEipXmbPZRD0odQr8eMEvzLb9a','fran.jpg',1),(2,'Lucaz','Ramirez','lramirez@gmail.com','$2b$10$suWCBhqcz6IMkBCWaJQ.xuMd2K22y3MVNYTQDEi2id8cbJAXir8o6','default.jpg',2),(3,'Brad','Pitt','BP@gmail.com','$2b$10$uQSLOFvByXqYBmhgMNW84uXpAByra3nGtDLND5T0VWsPNpDaSBLoe','image-1591841636694.jpg',2);
/*!40000 ALTER TABLE users ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-07 14:26:47
