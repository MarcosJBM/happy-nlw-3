import { Router } from "express";
import multer from "multer";

import OrphanagesController from "./controllers/OrphanagesController";
import uploadCongfig from "./config/upload";

const routes = Router();
const upload = multer(uploadCongfig);

// :Parametrô
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

export default routes;
