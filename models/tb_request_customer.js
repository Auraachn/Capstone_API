const dbpool = require('../config/database')

const getAllRequest = () => {
  const SQLQuery = 'SELECT * FROM tb_request_customers'

  return dbpool.execute(SQLQuery);
}

const createNewRequest = () => {
  const SQLQuery = `INSERT INTO 	tb_request_customers () 
                    VALUES (
                      '${body.value1}',
                      '${body.value2}')`;
  return dbpool.execute(SQLQuery);
}

const UpdateRequest = () => {

}

const DeleteRequest = () => {

}

module.exports = {
  getAllRequest,
  createNewRequest,
  UpdateRequest,
  DeleteRequest
}