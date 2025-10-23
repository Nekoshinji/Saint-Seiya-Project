import { useNavigate } from "react-router-dom";
import ClothFormPoseidon from "../components/ClothFormPoseidon";

function ClothNewPoseidon() {
  const navigate = useNavigate();

  const newcloth = {
    armor: "",
    vrs: "",
    descript: "",
  };

  return (
    <ClothFormPoseidon
      defaultValue={newcloth}
      submitted={(clothData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/cloths/domain/3`, {
          method: "post",
          headers: {
            enctype: "multipart/form-data",
          },
          body: clothData,
        }).then((res) => {
          if (res.status === 201) {
            alert("Une nouvelle armure à rejoint le domaine de Poseidon !");
            navigate("/clothListingPoseidon");
          } else {
            alert("L'armure n'a pas pu rejoindre le domaine de Poseidon !");
          }
        });
      }}
    >
      {" "}
    </ClothFormPoseidon>
  );
}

export default ClothNewPoseidon;
