import { useNavigate } from "react-router-dom";
import KnightFormAsgard from "../components/KnightFormAsgard";

function KnightNewAsgard() {
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
    <KnightFormAsgard
      defaultValue={newknight}
      submitted={(knightData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/knights/domain/2`, {
          method: "post",
          headers: {
            enctype: "multipart/form-data",
          },
          body: knightData,
        }).then((res) => {
          if (res.status === 201) {
            alert("Un nouveau chevalier à rejoint Odin !");
            navigate("/knightListingAsgard");
          } else {
            alert("Le chevalier n'a pas pu rejoindre Odin !");
          }
        });
      }}
    >
      {" "}
    </KnightFormAsgard>
  );
}

export default KnightNewAsgard;
