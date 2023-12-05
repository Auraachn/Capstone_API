const express = require('express');
const RecruitmentControllers = require('../controllers/recruitment.controllers');

const router = express.Router();

//GET
router.get('/', RecruitmentControllers.getAllRecruitment);

//CREATE - POST
router.post('/', RecruitmentControllers.createNewRecruitment);

//UPDATE - PATCH
router.patch('/:identifier_recruitment_team', RecruitmentControllers.UpdateRecruitment)

//DELETE - DELETE
router.delete('/:identifier_recruitment_team', RecruitmentControllers.DeleteRecruitment)

module.exports = router;