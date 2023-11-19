"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "iPhone 13",
          image:
            "https://res.cloudinary.com/dluc2m7kg/image/upload/v1700372780/mobile-images/1644463964410_d5szec.jpg",
          brand_id: 1,
        },
        {
          name: "iPhone 13 Pro",
          image:
            "https://res.cloudinary.com/dluc2m7kg/image/upload/v1700382402/mobile-images/1644464009394_dhlcy3.jpg",
          brand_id: 1,
        },
        {
          name: "Galaxy S23",
          image:
            "https://res.cloudinary.com/dluc2m7kg/image/upload/v1700382652/mobile-images/1689828852786_yhcflu.png",
          brand_id: 2,
        },
        {
          name: "Galaxy S23 Ultra",
          image:
            "https://res.cloudinary.com/dluc2m7kg/image/upload/v1700382652/mobile-images/1689829033494_h55yce.png",
          brand_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
