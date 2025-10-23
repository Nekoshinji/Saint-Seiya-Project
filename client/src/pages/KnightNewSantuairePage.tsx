import { useNavigate } from "react-router-dom";
import KnightFormSanctuaire from "../components/KnightFormSanctuaire";

function KnightNewSanctuaire() {
  const navigate = useNavigate();

  const newknight = {
    firstname: "",
    age: "",
    ranking: "",
    constellation: "",
    descript: "",
  };

  return (
    <KnightFormSanctuaire
      defaultValue={newknight}
      submitted={(knightData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/knights/domain/1`, {
          method: "post",
          headers: {
            enctype: "multipart/form-data",
          },
          body: knightData,
        }).then((res) => {
          if (res.status === 201) {
            alert("Un nouveau chevalier à rejoint Athéna !");
            navigate("/knightListingSanctuaire");
          } else {
            alert("Le chevalier n'a pas pu rejoindre Athéna !");
          }
        });
      }}
    >
      {" "}
    </KnightFormSanctuaire>
  );
}

export default KnightNewSanctuaire;
