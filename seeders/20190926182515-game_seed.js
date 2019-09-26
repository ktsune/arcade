'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [{ title: 'Fix it Felix Jr.',
      price: 50,
      releaseYear: 1982,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Ms. Pac Man',
      price: 100,
      releaseYear: 1981,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Dig Dug',
      price: 75,
      releaseYear: 1982,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Galaga',
      price: 125,
      releaseYear: 1981,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {})

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
