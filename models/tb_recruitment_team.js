const dbpool = require('../config/database')

const getAllRecruitment = () => {
  const SQLQuery = 'SELECT * FROM tb_recruitment_teams'

  return dbpool.execute(SQLQuery);
}

const createNewRecruitment = (body) => {
  const SQLQuery = `INSERT INTO tb_recruitment_teams 
                    (identifier_recruitment_team, name_team, post_team, domicile_team, job_description, experience, certificate) 
                    VALUES (
                      '${body.identifier_recruitment_team}',
                      '${body.name_team}',
                      '${body.post_team}',
                      '${body.domicile_team}',
                      '${body.job_description}',
                      '${body.experience}',
                      '${body.certificate}'
                    )`;

  return dbpool.execute(SQLQuery);
}


const UpdateRecruitment = (body, identifier_recruitment_team) => {
  const SQLQuery = `UPDATE tb_recruitment_teams 
                  SET 
                    name_team = '${body.name_team}',
                    post_team = '${body.post_team}',
                    domicile_team = '${body.domicile_team}',
                    job_description = '${body.job_description}',
                    experience = '${body.experience}',
                    certificate = '${body.certificate}'
                  WHERE identifier_recruitment_team = '${identifier_recruitment_team}'`;

  return dbpool.execute(SQLQuery);

}

const DeleteRecruitment = () => {

}

module.exports = {
  getAllRecruitment,
  createNewRecruitment,
  UpdateRecruitment,
  DeleteRecruitment
}