import { Link } from "react-router-dom";

function DomainAsgardPage() {
  return (
    <div className="domain-asgard">
      <nav className="icon-nav">
        <Link to={"/knightListingAsgard"}>
          <img
            className="personnage"
            src="\public\Personnages-asgard.png"
            alt="Personnage-asgard"
          />
        </Link>
        <Link to={"/clothListingAsgard"}>
          <img
            className="armor-asgard"
            src="\public\Armures-asgard.png"
            alt="Armure-asgard"
          />
        </Link>
      </nav>
      <div className="container-article">
        <article className="article">
          <h1>Domaine d'asgard</h1>
          <p>
            Hyôga s'est rendu dans le royaume d'Asgard sur la demande de Saori
            qui ressent un danger provenant du grand nord. A la fin de la
            bataille du Sanctuaire, la jeune femme à vu l'étoile du nord briller
            de manière étrange. Mais avant que le chevalier du Cygne n'aie pu
            lui rapporter ce qu'il avait découvert, Saori est attaquée par un
            guerrier divin venu spécialement d'Asgard pour la tuer sur le
            demande de la représentante d'Odin, Hilda de Polaris. Athéna se rend
            immédiatement à Asgard pour comprendre la raison du changement de la
            représentante d'Odin. Après une altercation et un échange rapide
            entre les deux femmes, la guerre entre les deux clans débutent. Pour
            accorder du temps à ses chevaliers et à l'humanité, Athéna décide
            d'utiliser sa formidable cosmo-énergie pour enrayer la fonte des
            glaces. Malgré son statut divin, la jeune femme ne pourra pas tenir
            plus d'une demi-journée. Seiya et ses compagnons doivent affronter
            les 7 guerriers divins, protecteur d'Asgard, s'emparer de leurs
            saphirs d'Odin et retirer l'anneau maléfique des Nibelungen du doigt
            d'Hilda, qui transforme la personnalité de la jeune femme.
          </p>
        </article>
        <img
          className="god-odin"
          src="\public\Armure-odin.png"
          alt="Odin-cloth"
        />
      </div>
    </div>
  );
}

export default DomainAsgardPage;
