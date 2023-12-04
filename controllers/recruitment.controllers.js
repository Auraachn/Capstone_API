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

const UpdateRecruitment = (req, res) => {
    const {identifier_project} = req.params;
    console.log('identifier_project:', identifier_project);
    res.json({
        message: 'Update Project Success',
        data: req.body,
    })

}

const DeleteRecruitment = (req, res) => {
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
   getAllRecruitment,
   createNewRecruitment,
   UpdateRecruitment,
   DeleteRecruitment
}