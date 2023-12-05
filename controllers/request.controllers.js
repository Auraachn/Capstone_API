const ProjectModel = require('../models/tb_request_customer')

const getAllRequests = async (req, res) => {
    try {
        const [data]  = await ProjectModel.getAllRequest();
        res.json({
        message: 'Get All Requests Success',
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
    console.log(body);
    try{
        await ProjectModel.createNewRequest(body);
        res.json({
            message: 'Create New Requests Success',
            data: body
        })
    }catch (error) {
        res.status(500).json({
            message: 'Server Error',
            ServerMessage: error,
        })
    }
}

const UpdateRequest = async (req, res) => {
    const {identifier_request_customer} = req.params;
    const {body} = req;
    try {
        await ProjectModel.UpdateRequest(body, identifier_request_customer);
        res.json({
            message: 'UPDATE Request Success',
            data: {
                id: identifier_request_customer,
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

const DeleteRequest = (req, res) => {
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
   getAllRequests,
   createNewRequests,
   UpdateRequest,
   DeleteRequest,
}