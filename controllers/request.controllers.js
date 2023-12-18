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

const getRecruitmentbyId = async (req, res) => {
    const {identifier_request_customer} = req.params;
    try {
        const [data]  = await ProjectModel.getRequestbyIdentifier(identifier_request_customer);
        res.json({
        message: 'Get Requst Success',
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
    const { body } = req;

    if (
        !body.name_customer ||
        !body.contact_customer ||
        !body.domicile_customer ||
        !body.description_request_customer ||
        !body.location_project ||
        !body.price_list_project_cash ||
        !body.price_list_project_credit
      ) {
        return res.status(400).json({
            message: 'Masukkan data yang benar',
            data: null,
        });
    }

    try {
        await ProjectModel.createNewRequest(body);
            res.status(201).json({
                message: 'Create New Request Success',
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

const DeleteRequest = async(req, res) => {
    const {identifier_request_customer} = req.params;
    console.log('identifier_request_customer:', identifier_request_customer);

     try{
        await ProjectModel.DeleteRequest(identifier_request_customer);
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
   getAllRequests,
   createNewRequests,
   UpdateRequest,
   DeleteRequest,
   getRecruitmentbyId,
}