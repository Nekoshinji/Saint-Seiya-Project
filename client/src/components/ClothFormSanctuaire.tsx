import type { ReactNode } from "react";

type ClothData = {
  armor: string;
  vrs: string;
  descript: string;
};

interface ClothFormSanctuaireProps {
  children: ReactNode;
  defaultValue: ClothData;
  submitted: (clothDatas: FormData) => void;
}

function ClothFormSanctuaire({
  children,
  defaultValue,
  submitted,
}: ClothFormSanctuaireProps) {
  return (
    <>
      <img
        className="icon-cloth"
        src="\public\Armures-sanctuaire.png"
        alt="cloth-sanctuaire"
      />
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const clothFormData = new FormData(event.currentTarget);

          submitted(clothFormData);
        }}
      >
        <div className="form">
          <label htmlFor="Cloth-armor">Armure :</label>
          <input
            id="cloth-armor"
            type="text"
            name="armor"
            defaultValue={defaultValue.armor}
            required
          />
          <label htmlFor="Cloth-version">Version :</label>
          <input
            id="cloth-version"
            type="text"
            name="vrs"
            defaultValue={defaultValue.vrs}
            required
          />
          <label htmlFor="Cloth-description">Description:</label>
          <input
            id="cloth-description"
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
            <option value="1">Sanctuaire</option>
          </select>
          <label htmlFor="new-image">Ajout armure :</label>
          <input id="new-image" type="file" name="img" required />
        </div>
        <button type="submit" className="button-new">
          <img src="\public\Ajout-armure.png" alt="New-cloth" />
          {children}
        </button>
      </form>
    </>
  );
}

export default ClothFormSanctuaire;
