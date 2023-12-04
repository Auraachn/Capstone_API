'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_request_customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identifier_request_customer: {
        type: Sequelize.INTEGER
      },
      name_customer: {
        type: Sequelize.STRING
      },
      contact_customer: {
        type: Sequelize.STRING
      },
      domicile_customer: {
        type: Sequelize.STRING
      },
      description_request_customer: {
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
      status_project: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tb_request_customers');
  }
};