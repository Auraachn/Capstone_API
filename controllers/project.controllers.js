
const ProjectModel = require('../models/tb_projects')

const getAllProjects = async (req, res) => {
    try {
        const [data]  = await ProjectModel.getAllProject();
        res.json({
        message: 'Get All Project Success',
        data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }
    
}

const getProjectbyId = async (req, res) => {
    const {identifier_project} = req.params;
    try {
        const [data]  = await ProjectModel.getProjectbyIdentifier(identifier_project);
        res.json({
        message: 'Get Project Success',
        data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }
    
}

const createNewProject = async (req, res) => {
    const { body } = req;

    if (
        !body.name_project ||
        !body.type_project ||
        !body.ready ||
        !body.indent ||
        !body.location_project ||
        !body.price_list_project_cash ||
        !body.price_list_project_credit ||
        !body.surface_area ||
        !body.name_developer ||
        !body.contact_developer
      ) {
        return res.status(400).json({
            message: 'Masukkan data yang benar',
            data: null,
          });
        }
      
        try {
            await ProjectModel.createNewProject(body);
          res.status(201).json({
            message: 'Create New Project Success',
            data: body,
          });
          
        } catch (error) {
          res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
          });
        }
};

const UpdateProject = async(req, res) => {
    const {identifier_project} = req.params;
    const {body} = req;
    try {
        await ProjectModel.UpdateProject(body, identifier_project);
        res.status(201).json({
            message: 'UPDATE Project Success',
            data: {
                id: identifier_project,
                ...body
            },
        })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }  
}

const DeleteProject = async(req, res) => {
    const {identifier_project} = req.params;
    console.log('identifier_project:', identifier_project);

     try{
        await ProjectModel.DeleteProject(identifier_project);
        res.json({
            message: 'DELETE Project Success',
            data: null
        })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }
}

module.exports = {
    getAllProjects,
    createNewProject,
    UpdateProject,
    DeleteProject,
    getProjectbyId
  };