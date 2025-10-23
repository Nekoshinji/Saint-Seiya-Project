import { Link } from "react-router-dom";

function DomainPoseidonPage() {
  return (
    <div className="domain-poseidon">
      <nav className="icon-nav">
        <Link to={"/knightListingPoseidon"}>
          <img
            className="personnage"
            src="\public\Personnages-poseidon.png"
            alt="Personnage-poseidon"
          />
        </Link>
        <Link to={"/clothListingPoseidon"}>
          <img
            className="armor-poseidon"
            src="\public\Armures-poseidon.png"
            alt="Armure-poseidon"
          />
        </Link>
      </nav>
      <div className="container-article">
        <article className="article">
          <h1>Domaine du Sanctuaire</h1>
          <p>
            Dans un lointain passé Il a eu de nombreuses querelles et combat
            contre Athéna. Lors de son dernier combat contre elle, son âme a été
            scellé par Athéna dans un vase et son trident lui a été confisqué.
            Le retour du Dieu Treize ans avant l'Arc Poséidon, Kanon a découvert
            son trident scellé lors de sa détention au Cap Sounion. Kanon
            pénètre dans le Sanctuaire Sous-Marin du Dieu. Il libère par mégarde
            l'âme du Dieu se présentant comme Dragon des Mers. Poséidon apprend
            de sa bouche qu'Athéna vient de se réincarner il y a peu de temps.
            Sentant qu'elle l'avait sûrement fait parce qu'il allait se
            réveiller, Il demande à Kanon de le réveiller le jour du seizième
            anniversaire de Julian Solo puis rejoint son hôte qui n'a que trois
            ans. Dès ce moment-là, Kanon compte se jouer du Dieu en ne le
            réveillant jamais. Il comptait s'emparer de ses soldats et de
            devenir un Dieu à sa place.[1] L'Hôte est le Dieu Il "agit" ( c'est
            Julian Solo qui contrôle toujours son corps à ce moment la ) dans
            l'anime durant l'arc Asgard à cause de Kanon qui souhaite affaiblir
            Athena et son armée. Il vint à la rencontre d'Hilda de Polaris pour
            lui demander d'attaquer le Sanctuaire mais elle refusa. Il l'équipa
            alors d'un anneau maléfique qui transforma la personnalité de la
            jeune femme.[2] Voyant qu'Hilda était revenue à elle-même et que ses
            guerriers divin n'ont pas pu se débarrasser d'Athéna ainsi que de
            son entourage proche, il enleva Athéna en un éclair à Asgard grâce à
            une géante vague.[3] Dans son arc, il se réveille quand Julian est
            touché à la tête. Il est neutralisé durant quelques secondes ce qui
            permet de permettre à Athena d'être libérée. Il lance son trident
            pour la tuer mais Kanon ( Seiya dans l'anime ) la protège de son
            corps.
          </p>
        </article>
        <img
          className="god-poseidon"
          src="\public\Poseidon-2.png"
          alt="Poseidon"
        />
      </div>
    </div>
  );
}

export default DomainPoseidonPage;
