import type { ReactNode } from "react";

type knightData = {
  firstname: string;
  age: string;
  ranking: string;
  constellation: string;
  descript: string;
};

interface knightFormPoseidonProps {
  children: ReactNode;
  defaultValue: knightData;
  submitted: (knightDatas: FormData) => void;
}

function KnightFormPoseidon({
  children,
  defaultValue,
  submitted,
}: knightFormPoseidonProps) {
  return (
    <>
      <img
        className="icon-knight"
        src="\public\Personnages-poseidon.png"
        alt="Knight-poseidon"
      />

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const knightFormData = new FormData(event.currentTarget);

          submitted(knightFormData);
        }}
      >
        <div className="form">
          <label htmlFor="knight-firstname">Chevalier :</label>
          <input
            id="knight-firstname"
            type="text"
            name="firstname"
            defaultValue={defaultValue.firstname}
            required
          />
          <label htmlFor="knight-age">Age :</label>
          <input
            id="knight-age"
            type="text"
            name="age"
            defaultValue={defaultValue.age}
            required
          />
          <label htmlFor="knight-rank">Rang :</label>
          <input
            id="knight-rank"
            type="text"
            name="ranking"
            defaultValue={defaultValue.ranking}
            required
          />
          <label htmlFor="knight-description">Constellation :</label>
          <input
            id="knight-description"
            type="text"
            name="constellation"
            defaultValue={defaultValue.constellation}
            required
          />
          <label htmlFor="knight-description">Description :</label>
          <input
            id="knight-description"
            type="text"
            name="descript"
            defaultValue={defaultValue.descript}
            required
          />
          <label
            htmlFor="domain_id"
            className="block text-sm font-medium text-gray-700"
          >
            Domaine
          </label>
          <select
            id="domain_id"
            name="domain_id"
            className="mt-1 p-2 border rounded-md w-full"
            required
          >
            <option value="">Sélectionner le domaine</option>
            <option value="3">Océans</option>
          </select>
          <label htmlFor="new-image">Ajout chevalier :</label>
          <input id="new-image" type="file" name="img" required />
        </div>
        <button type="submit" className="button-new">
          <img src="/public/Ajout-personnage.png" alt="New-knight" />
          {children}
        </button>
      </form>
    </>
  );
}

export default KnightFormPoseidon;
