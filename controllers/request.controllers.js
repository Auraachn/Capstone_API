const ProjectModel = require('../models/tb_request_customer')

const getAllRequests = async (req, res) => {
    try {
        const [data]  = await ProjectModel.getAllRequests();
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

const createNewRequests = async (req, res) => {
    const {body} = req;
    try{
        await ProjectModel.createNewRequests(body);
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

const UpdateRequest = (req, res) => {
    const {identifier_project} = req.params;
    console.log('identifier_project:', identifier_project);
    res.json({
        message: 'Update Project Success',
        data: req.body,
    })

}

const DeleteRequest = (req, res) => {
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
   getAllRequests,
   createNewRequests,
   UpdateRequest,
   DeleteRequest,
}