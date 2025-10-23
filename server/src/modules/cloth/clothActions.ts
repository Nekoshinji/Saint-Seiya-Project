import type { RequestHandler } from "express";
import clothRepository from "./clothRepository";

// Import access to data

// The B of BREAD - Browse (Read All) operation
const getClothsByDomain: RequestHandler = async (req, res, next) => {
  const { domainId } = req.params; // Récupérer l'ID du domaine

  try {
    // Appel au repository pour récupérer les chevaliers par domaine
    const cloths = await clothRepository.getClothsByDomain(Number(domainId));

    if (cloths.length === 0) {
      res
        .status(404)
        .json({ message: "Aucune armures trouvé pour ce domaine." });
      return; // Je comprends mieux maintenant que tu as eu un souci avec ça, mais c'est juste pour sortir après l'envoi de la réponse
    }

    res.json(cloths);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  const file = req.file as Express.Multer.File;
  // Extract the clth data from the request body
  const newCloth = {
    img: file.filename,
    armor: req.body.armor,
    vrs: req.body.vrs,
    descript: req.body.descript,
    domain_id: req.body.domain_id,
  };

  try {
    const insertId = await clothRepository.create(newCloth);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
// const read: RequestHandler = async (req, res, next) => {
//   try {
//     // Fetch a specific item based on the provided ID
//     const clothId = Number(req.params.id);
//     const cloth = await clothRepository.read(clothId);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (cloth == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(cloth);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

export default { getClothsByDomain, add };
