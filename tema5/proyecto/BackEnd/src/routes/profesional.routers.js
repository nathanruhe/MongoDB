const {Router} = require ("express");
const router = Router();
const profesionalCtrl = require("../controller/profesional.controller");

router.get("/profesionales", profesionalCtrl.getProfesional); 
router.post("/profesionales", profesionalCtrl.postProfesional);
router.put("/profesionales", profesionalCtrl.putProfesional);
router.delete("/profesionales", profesionalCtrl.deleteProfesional);

module.exports = router;