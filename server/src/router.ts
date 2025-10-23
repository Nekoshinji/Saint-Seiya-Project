import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
import multer from "multer";
const upload = multer({ dest: "public/assets/images" });

// Define item-related routes
import knightActions from "./modules/knight/knightActions";

// router.get("/api/knights", knightActions.browse);
// router.get("/api/knights/:id", knightActions.read);
router.post(
  "/api/knights/domain/:domainId",
  upload.single("img"),
  knightActions.add,
);
router.get("/knights/domain/:domainId", knightActions.getKnightsByDomain);

import clothActions from "./modules/cloth/clothActions";

// router.get("/api/cloths", clothActions.browse);
// router.get("/api/cloths/:id", clothActions.read);
router.post(
  "/api/cloths/domain/:domainId",
  upload.single("img"),
  clothActions.add,
);
router.get("/cloths/domain/:domainId", clothActions.getClothsByDomain);

/* ************************************************************************* */

export default router;
