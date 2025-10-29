
import { Router } from "express";
import { createCV, deleteCV, getCV, updateCV } from "../controllers/cv.controller.js";

const CVrouter = Router();

CVrouter.post('create-cv', createCV);

CVrouter.put('update-cv', updateCV);

CVrouter.delete('delete-cv', deleteCV);

CVrouter.get('get-cv', getCV);

export default CVrouter;