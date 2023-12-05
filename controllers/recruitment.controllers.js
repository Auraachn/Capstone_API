const ProjectModel = require('../models/tb_recruitment_team')

const getAllRecruitment = async (req, res) => {
    try {
        const [data]  = await ProjectModel.getAllRecruitment();
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

const createNewRecruitment = async (req, res) => {
    const {body} = req;
    try{
        await ProjectModel.createNewRecruitment(body);
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

const UpdateRecruitment = async(req, res) => {
    const {identifier_recruitment_team} = req.params;
    const {body} = req;
    try {
        await ProjectModel.UpdateRecruitment(body, identifier_recruitment_team);
        res.json({
            message: 'UPDATE Team Success',
            data: {
                id: identifier_recruitment_team,
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

const DeleteRecruitment = (req, res) => {
    const {identifier_project} = req.params;
    console.log('identifier_project:', identifier_project);
    res.json({
        message: 'Delete Team Success',
        data: {
            identifier_project: identifier_project,
            name_project: "Private House",
        }
    })
}

module.exports = {
   getAllRecruitment,
   createNewRecruitment,
   UpdateRecruitment,
   DeleteRecruitment
}