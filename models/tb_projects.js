const dbpool = require('../config/database')

const getAllProject = () => {
  const SQLQuery = 'SELECT * FROM tb_projects'

  return dbpool.execute(SQLQuery);
}

const createNewProject = (body) => {
  const SQLQuery = `INSERT INTO tb_projects 
                    (identifier_project, name_project, type_project, access_project, status_project, location_project, price_list_project_cash, price_list_project_credit, promo, description_project, bedroom, bathroom, carport, building_area, surface_area, facility, name_developer, contact_developer, loan_bank, handover) 
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

const UpdateProject = (body, identifier_project) => {
  const SQLQuery = `UPDATE tb_projects 
                    SET 
                      name_project = '${body.name_project}',
                      type_project = '${body.type_project}',
                      access_project = '${body.access_project}',
                      status_project = '${body.status_project}',
                      location_project = '${body.location_project}',
                      price_list_project_cash = '${body.price_list_project_cash}',
                      price_list_project_credit = '${body.price_list_project_credit}',
                      promo = '${body.promo}',
                      description_project = '${body.description_project}',
                      bedroom = '${body.bedroom}',
                      bathroom = '${body.bathroom}',
                      carport = '${body.carport}',
                      building_area = '${body.building_area}',
                      surface_area = '${body.surface_area}',
                      facility = '${body.facility}',
                      name_developer = '${body.name_developer}',
                      contact_developer = '${body.contact_developer}',
                      loan_bank = '${body.loan_bank}',
                      handover = '${body.handover}'
                    WHERE identifier_project = '${identifier_project}'`;

  return dbpool.execute(SQLQuery);
};


const DeleteProject = () => {

}

module.exports = {
  getAllProject,
  createNewProject,
  UpdateProject,
  DeleteProject
}