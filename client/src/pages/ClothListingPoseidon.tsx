import { animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ListingCardCarrousel.css";

interface ClothListingProps {
  id: number;
  img: string;
  armor: string;
  vrs: string;
  descript: string;
}

function ClothListingPoseidon() {
  const [clothListing, setClothsListing] = useState<ClothListingProps[]>([]);
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    // Récupération des cloths de le domain des océans
    fetch(`${import.meta.env.VITE_API_URL}/cloths/domain/3`)
      .then((resultAPI) => resultAPI.json())
      .then((clothjson) => {
        setClothsListing(clothjson);
      });
  }, []);

  const handleCardClick = (i: number) => {
    setIndex(i);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      // Glisser à gauche
      handleNext();
    }
    if (startX.current - endX.current < -50) {
      // Glisser à droite
      handlePrev();
    }
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + clothListing.length) % clothListing.length,
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % clothListing.length);
  };

  return (
    <>
      <img
        className="icon-listing"
        src="\public\Armures-poseidon.png"
        alt="cloth-poseidon"
      />
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel">
          {clothListing.map((cloth, i) => {
            let className = "card";
            if (i === index) {
              className += " active";
            } else if (i === (index + 1) % clothListing.length) {
              className += " right";
            } else if (
              i ===
              (index - 1 + clothListing.length) % clothListing.length
            ) {
              className += " left";
            } else if (i === (index + 1) % clothListing.length) {
              className += " behind";
            } else {
              className += " hidden";
            }
            return (
              <animated.div
                key={cloth.id}
                className={className}
                onClick={() => handleCardClick(i)}
                onTouchStart={() => handleCardClick(i)}
              >
                <img
                  className="img-cloth"
                  src={`${import.meta.env.VITE_API_URL}/assets/images/${cloth.img}`}
                  alt={cloth.img}
                />
                <h2>{cloth.armor}</h2>
                <p className="info-cloth">Version : {cloth.vrs}</p>
                <p className="info-cloth">Description : {cloth.descript}</p>
              </animated.div>
            );
          })}
        </div>
        <Link className="new-link" to="/clothNewPoseidon">
          <img
            className="new-button"
            src="\public\Ajout-armure.png"
            alt="Ajout-armure"
          />
        </Link>
      </div>
    </>
  );
}

export default ClothListingPoseidon;
