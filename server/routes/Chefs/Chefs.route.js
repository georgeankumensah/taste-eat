const express = require("express");
const { controllerGetChefs, controllerGetAChef, controllerDeleteAChef, controllerSaveChef, controllerUpdateAChef } = require("./Chefs.controller");
const createUpload = require("../../multer");

const chefUpload = createUpload("chefs");

const chefsRouter = express.Router();
chefsRouter.get("/chefs", controllerGetChefs);
chefsRouter.post("/chefs", chefUpload.array("image"), controllerSaveChef);
chefsRouter.get("/chef/:chefId", controllerGetAChef);
chefsRouter.put("/chef/:chefId", chefUpload.array("image"), controllerUpdateAChef);
chefsRouter.delete("/chef/:chefId", controllerDeleteAChef);

module.exports = chefsRouter;
