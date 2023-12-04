const dbpool = require('../config/database')

const getAllRecruitment = () => {
  const SQLQuery = 'SELECT * FROM tb_recruitment_teams'

  return dbpool.execute(SQLQuery);
}

const createNewRecruitment = () => {
  const SQLQuery = `INSERT INTO tb_recruitment_teams () 
                    VALUES (
                      '${body.value1}',
                      '${body.value2}')`;
  return dbpool.execute(SQLQuery);
}

const UpdateRecruitment = () => {

}

const DeleteRecruitment = () => {

}

module.exports = {
  getAllRecruitment,
  createNewRecruitment,
  UpdateRecruitment,
  DeleteRecruitment
}