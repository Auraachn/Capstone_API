'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_recruitment_teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identifier_recruitment_team: {
        type: Sequelize.INTEGER
      },
      name_team: {
        type: Sequelize.STRING
      },
      post_team: {
        type: Sequelize.STRING
      },
      domicile_team: {
        type: Sequelize.STRING
      },
      job_description: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      certificate: {
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
    await queryInterface.dropTable('tb_recruitment_teams');
  }
};