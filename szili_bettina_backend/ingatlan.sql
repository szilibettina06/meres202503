CREATE TABLE `ingatlanok` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `kategoria` integer,
  `leiras` text,
  `datum` date,
  `tehermentes` boolean,
  `ar` integer,
  `kepUrl` text
);

CREATE TABLE `kategoriak` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nev` text
);

ALTER TABLE `ingatlanok` ADD FOREIGN KEY (`kategoria`) REFERENCES `kategoriak` (`id`);
