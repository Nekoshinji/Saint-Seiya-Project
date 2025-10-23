import { useNavigate } from "react-router-dom";
import KnightFormPoseidon from "../components/KnightFormPoseidon";

function KnightNewPoseidon() {
  const navigate = useNavigate();

  const newknight = {
    firstname: "",
    age: "",
    ranking: "",
    constellation: "",
    descript: "",
    domain_id: "",
  };

  return (
    <KnightFormPoseidon
      defaultValue={newknight}
      submitted={(knightData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/knights/domain/3`, {
          method: "post",
          headers: {
            enctype: "multipart/form-data",
          },
          body: knightData,
        }).then((res) => {
          if (res.status === 201) {
            alert("Un nouveau chevalier à rejoint Poseidon !");
            navigate("/knightListingPoseidon");
          } else {
            alert("Le chevalier n'a pas pu rejoindre Poseidon !");
          }
        });
      }}
    >
      {" "}
    </KnightFormPoseidon>
  );
}

export default KnightNewPoseidon;
