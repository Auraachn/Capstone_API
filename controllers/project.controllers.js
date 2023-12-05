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

const createNewProject = async (req, res) => {
    const { body } = req;
    try{
        await ProjectModel.createNewProject(body);
        res.json({
            message: 'Create New Project Success',
            data: body
        })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }
}

const UpdateProject = async(req, res) => {
    const {identifier_project} = req.params;
    const {body} = req;
    try {
        await ProjectModel.UpdateProject(body, identifier_project);
        res.json({
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

const DeleteProject = (req, res) => {
    const {identifier_project} = req.params;
    console.log('identifier_project:', identifier_project);
    res.json({
        message: 'Delete Project Success',
        data: {
            identifier_project: identifier_project,
            name_project: "Private House",
        }
    })
}

module.exports = {
   getAllProjects,
   createNewProject,
   UpdateProject,
   DeleteProject,
}