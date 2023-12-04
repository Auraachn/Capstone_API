const dbpool = require('../config/database')

const getAllProject = () => {
  const SQLQuery = 'SELECT * FROM tb_projects'

  return dbpool.execute(SQLQuery);
}

const createNewProject = () => {
  const SQLQuery = `INSERT INTO tb_project (identifier_project, name_project, type_project, access_project, status_project, location_project, price_list_project_cash, price_list_project_credit, promo, description_project, bedroom, bathroom, carport, building_area, surface_area, facility, name_developer, contact_developer, loan_bank, handover) 
                    VALUES (
                      '${body.identifier_project}',
                      '${body.name_project}',
                      '${body.type_project}',
                      '${body.access_project}',
                      '${body.status_project}',
                      '${body.location_project}',
                      '${body.price_list_project_cash}',
                      '${body.price_list_project_credit}',
                      '${body.promo}',
                      '${body.description_project}',
                      '${body.bedroom}',
                      '${body.bathroom}',
                      '${body.carport}',
                      '${body.building_area}',
                      '${body.surface_area}',
                      '${body.facility}',
                      '${body.name_developer}',
                      '${body.contact_developer}',
                      '${body.loan_bank}',
                      '${body.handover}')`;
  return dbpool.execute(SQLQuery);
}

const UpdateProject = () => {

}

const DeleteProject = () => {

}

module.exports = {
  getAllProject,
  createNewProject,
  UpdateProject,
  DeleteProject
}