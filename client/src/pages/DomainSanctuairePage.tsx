import { Link } from "react-router-dom";
import "./Domain.css";

function DomainSanctuairePage() {
  return (
    <div className="domain-sanctuaire">
      <nav className="icon-nav">
        <Link to={"/knightListingSanctuaire"}>
          <img
            className="personnage"
            src="\public\Personnages-sanctuaire.png"
            alt="Personnage-sanctuaire"
          />
        </Link>
        <Link to={"/clothListingSanctuaire"}>
          <img
            className="armor-sanctuaire"
            src="\public\Armures-sanctuaire.png"
            alt="Armure-sanctuaire"
          />
        </Link>
      </nav>
      <div className="container-article">
        <article className="article">
          <h1>Domaine du Sanctuaire</h1>
          <p>
            Plusieurs générations après la première Guerre Sainte contre le dieu
            Poséidon, Athéna décida de construire le Sanctuaire afin de
            préserver la paix sur Terre pour les temps futurs.[1] Le Sanctuaire,
            dont l'entrée est située dans les ruines de l'Acropole d'Athènes,
            devient l'endroit de résidence de la déesse et de ses chevaliers. Le
            domaine sacré sert également de base d'opération contre les
            opposants d'Athéna mais aussi, de centre d'entrainement pour les
            futurs chevaliers. Il est protégé en permanence par le cosmos de la
            déesse, rendant le lieu indétectable aux yeux du monde extérieur,
            même via l'emploi de satellite de pointe et, il est également
            impossible d'y arriver par hasard. Datant des temps mythologiques,
            les constructions composant le Sanctuaire ont une architecture
            antique et beaucoup d'édifices sont en ruines. Cet aspect antique se
            reflète dans les tenues des habitants du Sanctuaire et du village
            voisin de Rodorio.
          </p>
        </article>
        <img
          className="god-athena"
          src="\public\Athena_God_Cloth.png"
          alt="Athena-god-cloth"
        />
      </div>
    </div>
  );
}

export default DomainSanctuairePage;
