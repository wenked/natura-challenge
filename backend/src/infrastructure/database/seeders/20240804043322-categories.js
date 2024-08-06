/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const models = queryInterface.sequelize.models

   

   await queryInterface.bulkInsert('categories', [
     {
       id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
       name: 'Perfumaria',
       description: 'Categoria de perfumaria',
       created_at: new Date(),
       updated_at: new Date()
     },
     {
       id: 'f7b7b8d8-7a6f-4b1f-8f4e-2f4f5f6f7f8f',
       name: 'Cabelos',
       description: 'Categoria de cabelos',
       created_at: new Date(),
       updated_at: new Date()
     },
     {
       id: 'f7b7b8d8-7a6f-4b1f-8f4e-2f4f5f6f7f9f',
       name: 'Maquiagem',
       description: 'Categoria de maquiagem',
       created_at: new Date(),
       updated_at: new Date()
     },{
        id: 'f7b7b8d8-7a6f-4b1f-8f4e-2f4f5f6f7f0f',
        name: 'Corpo e Banho',
        description: 'Categoria de corpo e banho',
        created_at: new Date(),
        updated_at: new Date
     },{
        id: 'f7b7b8d8-7a6f-4b1f-8f4e-2f4f5f6f7f1f',
        name: 'Rosto',
        description: 'Categoria de rosto',
        created_at: new Date(),
        updated_at: new Date()
     },{
        id: 'f7b7b8d8-7a6f-4b1f-8f4e-2f4f5f6f7f2f',
        name: 'Casa',
        description: 'Categoria de produtos de casa',
        created_at: new Date(),
        updated_at: new Date
     },{
        id: 'f7b7b8d8-7a6f-4b1f-8f4e-2f4f5f6f7f3f',
        name: 'Infantil',
        description: 'Categoria de items infantis',
        created_at: new Date(),
        updated_at: new Date()
     },{
        id: 'f7b7b8d8-7a6f-4b1f-8f4e-2f4f5f6f7f5f',
        name: 'Homem',
        description: 'Categoria de produtos para homens',
        created_at: new Date(),
        updated_at: new Date()
     }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
};
