const express = require('express');
const ProjectController = require('../controllers/project.controllers');

const router = express.Router();

//GET
router.get('/', ProjectController.getAllProjects);

//CREATE - POST
router.post('/', ProjectController.createNewProject);

//UPDATE - PATCH
router.patch('/:identifier_project', ProjectController.UpdateProject)

//DELETE - DELETE
router.delete('/:identifier_project', ProjectController.DeleteProject)

module.exports = router;