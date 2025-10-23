import type { RequestHandler } from "express";
import knightRepository from "./knightRepository";

// Import access to data
// The B of BREAD - Browse (Read All) operation

const getKnightsByDomain: RequestHandler = async (req, res, next) => {
  const { domainId } = req.params; // Récupérer l'ID du domaine

  try {
    // Appel au repository pour récupérer les chevaliers par domaine
    const knights = await knightRepository.getKnightsByDomain(Number(domainId));

    if (knights.length === 0) {
      res
        .status(404)
        .json({ message: "Aucun chevaliers trouvé pour ce domaine." });
      return;
    }

    res.json(knights);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  const file = req.file as Express.Multer.File;
  // Extract the knigth data from the request body
  const newknight = {
    img: file.filename,
    firstname: req.body.firstname,
    age: req.body.age,
    ranking: req.body.ranking,
    constellation: req.body.constellation,
    descript: req.body.descript,
    domain_id: req.body.domain_id,
  };

  try {
    const insertId = await knightRepository.create(newknight);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// Le handler qui récupère les chevaliers par domaine
// The R of BREAD - Read operation
// const read: RequestHandler = async (req, res, next) => {
//   try {
//     // Fetch a specific item based on the provided ID
//     const knightId = Number(req.params.id);
//     const knight = await knightRepository.read(knightId);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (knight == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(knight);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The A of BREAD - Add (Create) operation

export default { getKnightsByDomain, add };
