import { useNavigate } from "react-router-dom";
import ClothFormAsgard from "../components/ClothFormAgard";

function ClothNewAsgard() {
  const navigate = useNavigate();

  const newcloth = {
    armor: "",
    vrs: "",
    descript: "",
  };

  return (
    <ClothFormAsgard
      defaultValue={newcloth}
      submitted={(clothData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/cloths/domain/2`, {
          method: "post",
          headers: {
            enctype: "multipart/form-data",
          },
          body: clothData,
        }).then((res) => {
          if (res.status === 201) {
            alert("Une nouvelle armure à rejoint le domaine d'Odin !");
            navigate("/clothListingAsgard");
          } else {
            alert("L'armure n'a pas pu rejoindre le domaine d'Odin !");
          }
        });
      }}
    >
      {" "}
    </ClothFormAsgard>
  );
}

export default ClothNewAsgard;
