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

const getRecruitmentbyId = async (req, res) => {
    const {identifier_recruitment_team} = req.params;
    try {
        const [data]  = await ProjectModel.getRecruitmentbyIdentifier(identifier_recruitment_team);
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

const createNewRecruitment = async (req, res) => {
    const { body } = req;

    if (
        !body.name_team ||
        !body.post_team ||
        !body.domicile_team ||
        !body.job_description ||
        !body.experience ||
        !body.certificate
      ) {
        return res.status(400).json({
            message: 'Masukkan data yang benar',
            data: null,
        });
    }

    try {
            await ProjectModel.createNewRecruitment(body);
            res.status(201).json({
                message: 'Create New Recruitment Success',
                data: body,
            });
        }
    catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        });
    }
};


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

const DeleteRecruitment = async(req, res) => {
    const {identifier_recruitment_team} = req.params;
    console.log('identifier_recruitment_team:', identifier_recruitment_team);

     try{
        await ProjectModel.DeleteRecruitment(identifier_recruitment_team);
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
   getAllRecruitment,
   createNewRecruitment,
   UpdateRecruitment,
   DeleteRecruitment,
   getRecruitmentbyId
}