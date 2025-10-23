import { Link } from "react-router-dom";
import "./SaintSeiyaAccueil.css";

function SaintSeiyaAccueil() {
  return (
    <div className="saint-accueil">
      <nav className="icon-nav">
        <Link to={"/DomainSanctuaire"}>
          <img
            className="sanctuaire"
            src="\public\Domaine-du-sanctuaire.png"
            alt="Sanctuaire"
          />
        </Link>
        <Link to={"/DomainAsgard"}>
          <img
            className="asgard"
            src="\public\Domaine-d'asgard.png"
            alt="Asgard"
          />
        </Link>
        <Link to={"/DomainPoseidon"}>
          <img
            className="poseidon"
            src="\public\Domaine-des-oceans.png"
            alt="Poseidon"
          />
        </Link>
      </nav>
      <article className="article">
        <h1>Histoire des Saints</h1>
        <p>
          Dans la mythologie grecque, depuis la nuit des temps, lorsque les
          forces du Mal s’éveillent, des « Chevaliers Sacrés » (Saints) vêtus de
          leurs armures (Cloth) font leur apparition pour protéger la Terre. On
          les appelle les Chevaliers d’Athéna (Atena no seinto).
        </p>
        <p>
          Lors de l’un de ses voyages en Grèce, Mitsumasa Kido fait la
          connaissance d’un garçon agonisant, Aiolos, Chevalier d’Or du
          Sagittaire. Celui-ci confie à Mitsumasa Kido l’armure d’Or du
          Sagittaire et Saori, un bébé. Aiolos présente la petite fille comme
          étant la réincarnation de la déesse Athéna. Il lui demande de trouver
          et d'entraîner des jeunes garçons courageux afin de protéger l’enfant,
          et le futur chevalier d'or du Sagittaire. Treize ans après, alors que
          Mitsumasa Kido a envoyé 100 enfants aux quatre coins du monde pour
          devenir chevaliers, seuls dix d'entre eux reviennent : Jabu de la
          Licorne, Ichi de l'Hydre Femelle, Nachi du Loup, Ban du Petit Lion,
          Geki de la Grande Ourse, Hyôga du Cygne, le mystérieux Ikki du Phénix,
          Shiryû du Dragon, Shun d'Andromède et Seiya de Pégase. Ce dernier,
          bien déterminé à sauver Saori Kido/Athéna.{" "}
        </p>
        <p>
          Athéna commande 88 chevaliers, chacun associé aux 88 constellations,
          et regroupés en trois castes : Bronze, Argent et Or (constellations
          zodiacales). Il existe une caste secrète de Chevaliers noirs qui
          combattent ceux d’Athéna, usurpent leurs pouvoirs et possèdent les
          mêmes armures, leur seule différence avec les armures originelles
          étant leur couleur noire et leur moindre résistance.{" "}
        </p>
        <p>
          Les autres dieux entrant en guerre ont eux aussi leur armée : les
          Marinas de Poséidon, les Spectres d'Hadès, les Guerriers d’Odin (dans
          la série d’animation uniquement), les Anges d'Artémis / Protecteurs de
          l'Olympe…{" "}
        </p>
      </article>
      <Link to={"/video"}>
        <img
          className="chibi-athena"
          src="\public\Chibi-athena.png"
          alt="Chibi-athena"
        />
      </Link>
    </div>
  );
}

export default SaintSeiyaAccueil;
