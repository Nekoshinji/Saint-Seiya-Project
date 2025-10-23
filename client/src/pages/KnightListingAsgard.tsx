import { animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ListingCardCarrousel.css";

interface KnightListingProps {
  id: number;
  img: string;
  firstname: string;
  age: string;
  constellation: string;
  descript: string;
}

function KnightListingAsgard() {
  const [knightListing, setKnightsListing] = useState<KnightListingProps[]>([]);
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    // Récupération des knights dans le domain d'asgard
    fetch(`${import.meta.env.VITE_API_URL}/knights/domain/2`)
      .then((resultAPI) => resultAPI.json())
      .then((knightjson) => {
        setKnightsListing(knightjson);
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
        (prevIndex - 1 + knightListing.length) % knightListing.length,
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % knightListing.length);
  };

  return (
    <>
      <img
        className="icon-listing"
        src="\public\Personnages-asgard.png"
        alt="Knight-asgard"
      />
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel">
          {knightListing.map((knight, i) => {
            let className = "card";
            if (i === index) {
              className += " active";
            } else if (i === (index + 1) % knightListing.length) {
              className += " right";
            } else if (
              i ===
              (index - 1 + knightListing.length) % knightListing.length
            ) {
              className += " left";
            } else if (i === (index + 1) % knightListing.length) {
              className += " behind";
            } else {
              className += " hidden";
            }
            return (
              <animated.div
                key={knight.id}
                className={className}
                onClick={() => handleCardClick(i)}
                onTouchStart={() => handleCardClick(i)}
              >
                <img
                  className="img-knight"
                  src={`${import.meta.env.VITE_API_URL}/assets/images/${knight.img}`}
                  alt={knight.img}
                />
                <h2>{knight.firstname}</h2>
                <p className="info-knight">Age : {knight.age}</p>
                <p className="info-knight">
                  Constellation : {knight.constellation}
                </p>
                <p className="info-knight">Description : {knight.descript}</p>
              </animated.div>
            );
          })}
        </div>
        <Link className="new-knight" to="/knigtNewAsgard">
          <img
            className="new-button"
            src="\public\Ajout-personnage.png"
            alt="Ajout-armure"
          />
        </Link>
      </div>
    </>
  );
}

export default KnightListingAsgard;
