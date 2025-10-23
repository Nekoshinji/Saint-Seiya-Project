import { useNavigate } from "react-router-dom";
import ClothFormSanctuaire from "../components/ClothFormSanctuaire";

function ClothNewSanctuaire() {
  const navigate = useNavigate();

  const newcloth = {
    armor: "",
    vrs: "",
    descript: "",
  };

  return (
    <ClothFormSanctuaire
      defaultValue={newcloth}
      submitted={(clothData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/cloths/domain/1`, {
          method: "post",
          headers: {
            enctype: "multipart/form-data",
          },
          body: clothData,
        }).then((res) => {
          if (res.status === 201) {
            alert("Une nouvelle armure à rejoint le domaine d'Athéna !");
            navigate("/clothListingSanctuaire");
          } else {
            alert("L'armure n'a pas pu rejoindre le domaine d'Athéna !");
          }
        });
      }}
    >
      {" "}
    </ClothFormSanctuaire>
  );
}

export default ClothNewSanctuaire;
