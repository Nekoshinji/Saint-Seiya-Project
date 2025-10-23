create table domain (
  id int unsigned primary key auto_increment not null,
  domain varchar(255) not null
);

create table knight (
  id int unsigned primary key auto_increment not null,
  img varchar(255) not null,
  firstname varchar(255) not null,
  age int not null,
  ranking varchar(255) not null,
  constellation varchar(255) not null,
  descript text not null,
  domain_id int unsigned not null,
  foreign key (domain_id) references domain(id)
);

create table myth_cloth (
  id int unsigned primary key auto_increment not null,
  img varchar(255) not null,
  armor varchar(255) not null,
  vrs varchar(255) not null,
  descript text not null,
  domain_id int unsigned not null,
  foreign key (domain_id) references domain(id)
);

insert into domain (domain)
values
  ("Domaine du Sanctuaire"),
  ("Domaine d'Asgard"),
  ("Domaine des Océans");

insert into myth_cloth (img, armor, vrs, descript, domain_id)
values
  ("Pegase.png", "Pégase", "V1", "Transmise aux Chevaliers de Pégase à travers les âges, cette armure a joué un rôle crucial dans les batailles contre les dieux. Elle est liée à la constellation de Pégase, le cheval ailé de la mythologie grecque.", 1),
  ("Dragon.png", "Dragon", "V1", "Forgée pour protéger les guerriers descendants du Dragon Céleste, elle est dotée d’un bouclier légendaire réputé indestructible et d’un poing capable de briser n’importe quelle armure.", 1),
  ("Cygne.png", "Cygne", "V1", "Adaptée aux combats dans des conditions extrêmes, elle est conçue pour supporter des températures allant jusqu’au zéro absolu. Elle tire son inspiration du Cygne mythologique.", 1),
  ("Andromede.png", "Andromède", "V1", "Inspirée de la princesse Andromède enchaînée, cette armure possède une chaîne vivante, capable de protéger son porteur et d’attaquer ses ennemis.", 1),
  ("Phenyx.png", "Phenix", "V1", "Seule armure à se régénérer d’elle-même, elle incarne le pouvoir du Phénix, capable de renaître de ses cendres. Elle est la plus résistante des armures de Bronze.", 1),
  ("Etoile-Alpha.png", "Étoile d'Alpha", "Unique", "L’Armure d’Alpha est l’armure la plus puissante des God Robes, transmise au plus grand guerrier d’Asgard. Inspirée du héros mythologique Siegfried, elle est dotée d’une quasi-invulnérabilité, rendant son porteur presque intouchable en combat. Elle tire son énergie des légendes nordiques et du sang du dragon Fafnir, qui a conféré à Siegfried sa résistance légendaire.", 2),
  ("Etoile-de-Delta.png", "Étoile de Delta", "Unique", "Associée à la puissance de l’Améthyste, cette armure est liée à un pouvoir mystique capable d’emprisonner ses adversaires.", 2),
  ("Etoile-de-Beta.png", "Étoile de Beta", "Unique", " Forgée pour canaliser les éléments opposés, elle permet à son porteur de maîtriser à la fois le feu et la glace.", 2),
  ("Etoile-de-Zeta.png", "Étoile de Zeta", "Unique", "Conçue pour les guerriers les plus rapides d’Asgard, elle est associée au tigre blanc du nord.", 2),
  ("Etoile-Epsilon.png", "Étoile Epsilon", "Unique", "L’armure la plus massive des God Robes, inspirée du dieu nordique Thor et de son marteau légendaire, Mjolnir.", 2),
  ("Dragon-des-mers.png", "Dragon des mers", "Unique", "Une des écailles les plus puissantes, attribuée au commandant des Marinas de Poséidon.", 3),
  ("kraken.png", "kraken", "Unique", "Inspirée du monstre marin légendaire, cette écaille confère un contrôle total sur les océans.", 3),
  ("Chrysaor.png", "Chrysaor", "Unique", "Son point central est la Lance Sacrée, capable de transpercer n’importe quelle armure.", 3),
  ("Sirene.png", "Sirène", "Unique", "Armure conçue pour amplifier les pouvoirs hypnotiques de la flûte de la Sirène.", 3),
  ("Scylla.png", "Scylla", "Unique", "Basée sur la créature marine mythologique, elle combine six attaques différentes, chacune inspirée d’un animal marin.", 3);

insert into knight(img, firstname, age, ranking, constellation, descript, domain_id)
values
  ("Seiya.png", "Seiya", "13", "Bronze", "Pegase", "Originaire du Japon, Seiya est un chevalier fougueux et combatif, toujours prêt à se relever, peu importe les obstacles. Son entraînement en Grèce, sous la tutelle de Marine, lui a permis de maîtriser la Météorite de Pégase, une attaque rapide et puissante. Son plus grand objectif est de retrouver sa sœur disparue, Seika. Son courage et sa ténacité en font un leader naturel du groupe.", 1),
  ("Shiryu.png", "Shiryu", "14", "Bronze", "Dragon", "Disciple de Dohko de la Balance, Shiryu s’est entraîné en Chine sur les Cinq Pics de Rozan. Il est un guerrier discipliné et loyal, avec un sens de l’honneur inébranlable. Son armure du Dragon est l’une des plus résistantes, notamment grâce à son bouclier quasi indestructible. Il maîtrise des techniques puissantes comme le Rozan Shô Ryû Ha (Colère du Dragon), qui projette l’ennemi dans les airs.", 1),
  ("Hyoga.png", "Hyôga", "14", "Bronze", "Cygne", "D'origine russe, Hyôga a été formé en Sibérie sous la direction du Chevalier d'Or Camus du Verseau. Spécialiste des attaques de glace, il utilise des techniques comme Poussière de Diamant et Cercueil de Glace pour geler ses ennemis. Derrière son apparence froide et détachée se cache une grande sensibilité, notamment en raison de son attachement à sa mère, dont le corps repose au fond de l’océan Arctique.", 1),
  ("Shun.png", "Shun", "13", "Bronze", "Andromède", "Shun est un chevalier au tempérament doux et pacifiste, préférant éviter le combat et prônant la compassion. Cependant, son pouvoir est redoutable : ses Chaînes d’Andromède lui permettent de se défendre efficacement et d’attaquer à distance. Malgré sa nature bienveillante, il est capable de libérer une force dévastatrice lorsqu'il est acculé, comme avec sa Tempête Nébulaire.", 1),
  ("Ikki.png", "Ikki", "15", "Bronze", "Phenix", "Frère aîné de Shun, Ikki est un combattant solitaire, dur et impitoyable avec ses ennemis. Il a suivi un entraînement extrêmement brutal sur l’île de la Reine Morte, ce qui l’a rendu plus fort, mais aussi plus amer. Son Poing du Phénix plonge ses adversaires dans des illusions terrifiantes. Fidèle à son symbole, l’oiseau de feu, Ikki peut renaître de ses cendres après chaque défaite.", 1),
  ("Siegfried-de-Dubhe.png", "Siegfried de Dubhe", "24", "Guerrier divin", "Alpha", "Le plus puissant des Guerriers Divins et bras droit d’Hilda. Inspiré du héros Siegfried de la mythologie nordique, il possède une quasi-invulnérabilité. Son attaque Dragon Brisant l’Excalibur est d’une puissance destructrice. Il meurt en héros en tentant d’emporter Poséidon avec lui.", 2),
  ("Alberich-de-Megrez.png", "Alberich de Megrez", "22", "Guerrier divin", "Delta", "Stratège rusé et manipulateur, Alberich est un combattant vicieux qui préfère la ruse à la force brute. Son Améthyste de la Prison enferme ses adversaires dans un cristal indestructible. Ambitieux et cruel, il veut prendre le contrôle d’Asgard, mais il est vaincu par Shiryu.", 2),
  ("Hagen-de-Merak.png", "Hagen de Merak", "23", "Guerrier divin", "Beta", "Ami d’enfance de Flamme, il maîtrise le feu et la glace avec ses attaques Grand Ardent et Tempête Boréale. Aveuglé par son amour pour Flamme et sa loyauté envers Hilda, il affronte Hyôga dans un duel tragique et meurt en réalisant son erreur.", 2),
  ("Syd-de-Mizar.png", "Syd de Mizar", "22", "Guerrier divin", "Zeta", "Guerrier aux attaques rapides et imprévisibles, il utilise ses Griffes du Tigre Viking pour submerger ses ennemis. Il possède un frère jumeau caché, Bud d’Alcor, qui souffre de vivre dans son ombre. Il est tué par Shun, mais Bud venge sa mort.", 2),
  ("Thor-de-Phecda.png", "Thor de Phecda", "25", "Guerrier divin", "Epsilon", "Colosse fidèle à Hilda, il manie un gigantesque Mjolnir, capable de réduire en miettes ses adversaires. Bien que redoutable, il reste un guerrier noble et honorable. Il meurt en comprenant qu’il s’était trompé sur Hilda.", 2),
  ("Kanon.png", "Kanon", "28", "Marinas généraux", "Dragon des mers", "Frère jumeau de Saga, il est à l’origine du réveil de Poséidon et tente de s’emparer du monde. Son Triangle Doré aspire ses ennemis dans une autre dimension. Il finit par se racheter et devient plus tard Chevalier d'Or des Gémeaux.", 3),
  ("Isaak.png", "Isaak", "23", "Marinas généraux", "Kraken", "Ancien camarade d’entraînement de Hyôga en Sibérie, il perd un œil en tentant de le sauver. Sa vision du monde change et il croit que Poséidon doit imposer la paix par la force. Son Tsunami du Kraken est redoutable, mais il est vaincu par Hyôga.", 3),
  ("Krishna.png", "Krishna", "23", "Marinas généraux", "Chrysaor", "Guerrier mystique venu d’Inde, il possède une lance sacrée d’or capable de transpercer toute armure. Il utilise la méditation pour résister aux attaques physiques et psychiques. Son Lance de Chrysaor est redoutable, mais il est battu par Shiryu.", 3),
  ("Sorrento.png", "Sorrento", "22", "Marinas généraux", "Sirène", "Mystérieux guerrier à la Flûte Enchantée, capable de paralyser et manipuler les esprits. Contrairement aux autres généraux, il fait preuve de compassion et finit par trahir Poséidon pour sauver Julian Solo.", 3),
  ("Io.png", "Io", "21", "Marinas généraux", "scylla", "Maître des Mille Bêtes de Scylla, il peut attaquer avec six créatures mythologiques différentes. Fier et sûr de lui, il sous-estime Shun et finit par être vaincu par sa Tempête Nébulaire.", 3);