'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identifier_project: {
        type: Sequelize.INTEGER
      },
      name_project: {
        type: Sequelize.STRING
      },
      type_project: {
        type: Sequelize.STRING
      },
      access_project: {
        type: Sequelize.STRING
      },
      status_project: {
        type: Sequelize.STRING
      },
      location_project: {
        type: Sequelize.STRING
      },
      price_list_project_cash: {
        type: Sequelize.INTEGER
      },
      price_list_project_credit: {
        type: Sequelize.INTEGER
      },
      promo: {
        type: Sequelize.INTEGER
      },
      description_project: {
        type: Sequelize.STRING
      },
      bedroom: {
        type: Sequelize.INTEGER
      },
      bathroom: {
        type: Sequelize.INTEGER
      },
      carport: {
        type: Sequelize.INTEGER
      },
      building_area: {
        type: Sequelize.INTEGER
      },
      surface_area: {
        type: Sequelize.INTEGER
      },
      facility: {
        type: Sequelize.STRING
      },
      name_developer: {
        type: Sequelize.STRING
      },
      contact_developer: {
        type: Sequelize.STRING
      },
      loan_bank: {
        type: Sequelize.STRING
      },
      handover: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_projects');
  }
};