-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 03 fév. 2022 à 21:42
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `afpashop`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `id_parent` int(11) NOT NULL DEFAULT '0',
  `nom` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `id_parent`, `nom`) VALUES
(1, 0, 'Homme'),
(2, 0, 'Femme'),
(3, 0, 'Enfant'),
(4, 1, 'Pantalon'),
(5, 2, 'Jupe'),
(9, 1, 'Pantacourt');

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `id_UTILISATEUR` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `commande_validee`
--

CREATE TABLE `commande_validee` (
  `id` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `id_commande` int(11) NOT NULL,
  `qte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `db_name`
--

CREATE TABLE `db_name` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `db_name`
--

INSERT INTO `db_name` (`id`, `name`) VALUES
(2, 'AFPAShop');

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id` int(11) NOT NULL,
  `id_COMMANDE` int(11) NOT NULL,
  `qte` varchar(255) COLLATE utf8_bin NOT NULL,
  `temps_recup` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id` int(11) NOT NULL,
  `image` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_bin NOT NULL,
  `price` float NOT NULL,
  `stock` float NOT NULL,
  `dlc` datetime DEFAULT NULL,
  `id_TVA` int(11) DEFAULT NULL,
  `id_CATEGORIE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id`, `image`, `title`, `price`, `stock`, `dlc`, `id_TVA`, `id_CATEGORIE`) VALUES
(36, '1643667044667_strong-short.jpg', 'Short', 12, 23, NULL, 1, 1),
(37, '1643700731087_pantalon-moto-vstreet-chino-beige.jpg', 'Pantalon', 12, 33, NULL, 1, 1),
(38, '1643712954329_chemise.jpg', 'Chemise', 26, 23, NULL, 1, 1),
(39, '1643806385672_casquette-100-coton-blanche.jpg', 'Casquette', 23, 21, NULL, 1, 1),
(40, '1643919732950_23bb534e-0056-477f-9164-c4d798aeebf1.jpg', 'Short', 25, 32, NULL, 1, 3),
(41, '1643919872180_casquette-enfant-avec-helice.jpg', 'Casquette', 18, 23, NULL, 1, 3),
(42, '1643920024960_femme-robe-de-mariage-courte-floral-dentelle-robe.jpg', 'Robe', 56, 32, NULL, 1, 2),
(43, '1643920145102_roseta-short-femme_1.jpg', 'Short', 13, 25, NULL, 1, 2),
(44, '1643920179362_Robe_Femme_NOIR___ROBE_INAYA_FEMME.jpg', 'Robe', 36, 25, NULL, 1, 2),
(45, '1643920212724_chapeaux-de-soleil-chapeau-de-plage-d-ete-pour-fem.jpg', 'Chapeau', 41, 36, NULL, 1, 2),
(46, '1643920249101_jean-enfant-garcon-en-coton-casual-pantalon-garcon.jpg', 'Pantalon', 31, 9, NULL, 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `type`) VALUES
(1, 'administrateur'),
(2, 'client');

-- --------------------------------------------------------

--
-- Structure de la table `tva`
--

CREATE TABLE `tva` (
  `id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_bin NOT NULL,
  `taux` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `tva`
--

INSERT INTO `tva` (`id`, `type`, `taux`) VALUES
(1, '20,6%', 1.206),
(2, '5,56%', 1.0556);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) COLLATE utf8_bin NOT NULL,
  `lastName` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(500) COLLATE utf8_bin NOT NULL,
  `mail` varchar(255) COLLATE utf8_bin NOT NULL,
  `phone` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id_ROLE` int(11) NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `firstName`, `lastName`, `password`, `mail`, `phone`, `id_ROLE`) VALUES
(9, 'bob', 'bbo', '$2b$10$spqIzXPB/5Tz/iWlRcNFFelByotNkOZmtBtIMJOQNStzM3Icc4GRu', 'sqdqsd@dqsdqssd.fr', '3123123131', 2),
(10, 'bob', 'bbo', '$2b$10$86kkFkzzhiP90m3TEMl8MeqbPiV1SzW03FqJW/BlaZT8lpJHTu1nu', 'sqdqsd@dqsdqssd.fr', '3123123131', 2),
(11, 'bob', 'bbo', '$2b$10$ioY97qXASuQBDplceDe3IO6HwZ0t1.k1Teb4VgvZbMKVB2OcXDHJW', 'sqdqsd@dqsdqssd.fr', '3123123131', 2),
(12, 'Jean-Marc', 'Le blanc', '$2b$10$qpn40JDbtV.KAbRV6ktufuHDULqysK2ZYk66rRmEg72Jx8hgIbLu2', 'jmleblanc@gmail.com', '0639586321', 2),
(13, 'Blou', 'Nouille', '$2b$10$p8FHMuaemPZnBVjoYz5JkOw7Q8PZf0eR/bXC6ISWSMWAP0.Q3wQ9u', 'nouille@gmail.com', '1234567890', 2),
(14, 'vvxvxcvx', 'cvcvcxvxvcx', '$2b$10$6PFrb6GMiDWq/xz571fPie5BIT4GlumWEPIsKAPdNORbO4PD8XnN2', 'gdfgdfgdgfdg@gfgdfgdf.fr', '131231231312', 2),
(15, 'test', 'tzqt', '$2b$10$dCdPCrG..oqBY/D0vWpJmOIk0TBgObXv3qg7/novI/KIR9TTLUhxq', 'dqsdqsd@dqsdqsd.fr', '32132132', 2),
(17, 'John', 'Smith', '$2b$10$4T2NbG6ivdcC6s6LSA8cRuByvlqheqrC58uiXGCZG7KyChEeIslna', 'smith@gmail.com', '0635265896', 2),
(18, 'Bob', 'Smith', '$2b$10$S/Xafr0KjjtLsGbpECwFqu4LIqSyhVfVVK8oVoiyDw/FgATK6issu', 'bobsmith@gmail.com', '1234567891', 2),
(19, 'Max', 'Bloupiller', '$2b$10$VvQ2OrvL9zoYRxzdb97K0.AKNjIiOleRe1ZeWRlvMeOCN4g./3uxm', 'eithel@gmail.com', '0203656968', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `COMMANDE_UTILISATEUR_FK` (`id_UTILISATEUR`);

--
-- Index pour la table `commande_validee`
--
ALTER TABLE `commande_validee`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `db_name`
--
ALTER TABLE `db_name`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id`,`id_COMMANDE`),
  ADD KEY `PANIER_COMMANDE0_FK` (`id_COMMANDE`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PRODUIT_TVA_FK` (`id_TVA`),
  ADD KEY `PRODUIT_CATEGORIE0_FK` (`id_CATEGORIE`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tva`
--
ALTER TABLE `tva`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UTILISATEUR_ROLE_FK` (`id_ROLE`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `commande_validee`
--
ALTER TABLE `commande_validee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `db_name`
--
ALTER TABLE `db_name`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `tva`
--
ALTER TABLE `tva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `COMMANDE_UTILISATEUR_FK` FOREIGN KEY (`id_UTILISATEUR`) REFERENCES `utilisateur` (`id`);

--
-- Contraintes pour la table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `PANIER_COMMANDE0_FK` FOREIGN KEY (`id_COMMANDE`) REFERENCES `commande` (`id`),
  ADD CONSTRAINT `PANIER_PRODUIT_FK` FOREIGN KEY (`id`) REFERENCES `produit` (`id`);

--
-- Contraintes pour la table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `PRODUIT_CATEGORIE0_FK` FOREIGN KEY (`id_CATEGORIE`) REFERENCES `categorie` (`id`),
  ADD CONSTRAINT `PRODUIT_TVA_FK` FOREIGN KEY (`id_TVA`) REFERENCES `tva` (`id`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `UTILISATEUR_ROLE_FK` FOREIGN KEY (`id_ROLE`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
